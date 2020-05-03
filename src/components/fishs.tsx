import React, {
    useState
} from 'react'
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    Button,
    Table,
} from 'antd'

// 公共组件
import Months from './common/months'
import Places from './common/places'
import Sizes from "./common/sizes";

import json from '../api/json/fishs.json'
import {
    months,
    places,
    sizes,
} from '../api/utils/fishs'

import { 
    changeMonth,
    changePlace,
    changeSize,
} from '../store/actions'
// import Item from 'antd/lib/list/Item'
import { State as RootState } from '../store/types'

const columns: any[] = [
    {
        title: "名称",
        dataIndex: 'name',
        render: (value: any, record: any) => {
            return (
                <div >
                    <img style={{ width: 50}}src={require(`../static/icons/fish/${record["file-name"]}.png`)} alt="鱼"/>
                    
                    <span>{value['name-cn']}</span>
                </div>
            )
        }
    },
    {
        title: "序号",
        dataIndex: 'id',
        sorter: (a: any, b: any) => a.id - b.id,
        sortDirections: ['descend'],
    },
    {
        title: "英文名",
        dataIndex: 'file-name',
        render: (text: string) => text.toUpperCase()
    },
    {
        title: '价格',
        dataIndex: 'price',
        sorter: (a: any, b: any) => a.price - b.price,

    },
    {
        title: '地点',
        dataIndex: 'availability',
        render: (children: any) => <div>{children.location}</div>,
        filters: [
            {
                text: '河流',
                value: 'River',
            },
            {
                text: '大海',
                value: 'Sea',
            }
        ],
        onFilter: (value: any, record: any) => {
            return record.availability.location.includes(value)
        } 
    },
    {
        title: '阴影',
        dataIndex: 'shadow',
    }
]



/**
 * @param {number} month
 * @param {string} interval
 * @returns {boolean}
 */
function monthMatchInterval(month: number, interval: string): boolean {
    const [month_start, month_end] = interval.split('-').map(i => Number(i))
    if (month_start > month_end) {
        if (month >= month_start || month <= month_end) return true
    }
    else {
        if (month >= month_start && month <= month_end) return true
    }
    return false
}

function matchMonth(month: number, interval: string){
    if (month === 0 || interval === '') return true
    if (interval.includes('&')) {
        const [interval_a, interval_b] = interval.split('&').map(s => s.trim())
        return monthMatchInterval(month, interval_a) || monthMatchInterval(month, interval_b)
    } else {
        return monthMatchInterval(month, interval)
    }
}

function matchPlace(p1: string, p2: string): boolean {
    if (p1 === '') return true
    if (p2.includes('&')) {
        const [place_a, place_b] = p2.split('&').map(s => s.trim())
        return p1 === place_a || p1 === place_b
    }
    return p1 === p2
}

function matchSize(s1: string, s2: string): boolean {
    if (s1 === '') return true
    if (s1 === 'fin' && s2.includes('fin')) return true
    if (s1.includes('6') && s2.includes('fin (6)')) return true 
    if (s1.includes('Medium') && s2.includes('fin (4)')) return true
    return s1 === s2 
}


function Fishs(props: any) {
    const { path, url} = useRouteMatch()
    const [sort, setSort] = useState(false) 
    const dispatch = useDispatch()
    const [
        month,
        place,
        size
    ] = useSelector((state: RootState) => [state.month, state.place, state.size])
    
    function onMonthChange (value: string): void {
        dispatch(changeMonth(value))
    }
    
    function onPlaceChange (value: string): void {
        dispatch(changePlace(value))
    }

    function onSizeChange (value: string): void {
        dispatch(changeSize(value))
    }

    function sortByPrice(): void {
        setSort(true)
    }
    function sortByOrder(): void {
        setSort(false)
    }
    
    const dataSource = Object.values(json)
    

    const result = dataSource.map((item, index) => {
        const item_month = item.availability["month-northern"]
        const item_place = item.availability.location
        const item_size = item.shadow

        if (matchMonth(months[month], item_month) && matchPlace(places[place], item_place) && matchSize(sizes[size], item_size)) {
            return (
                <div className="item" style={{order: sort ? item.price : 0}} key={item.id} data-price={item.price}>
                    <div>
                        {item.name['name-cn']}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                    <img className='fish_img' src={require(`../static/icons/fish/${item["file-name"]}.png`)} alt="鱼"/>
                </div>
            )
        } else {
            return null
        }
    })

    

    return (
        <div>
            <div className="form">
                <Button className="btn" type="primary"><Link to={url}>图鉴</Link></Button>
                <Button className="btn" type="primary"><Link to={`${url}/table`}>表格</Link></Button>
            </div>
            
            <Switch>
                <Route exact path={path}>
                    <div className="form">
                        <Months handleChange={onMonthChange}></Months>
                        <Places handleChange={onPlaceChange}></Places>
                        <Sizes handleChange={onSizeChange}></Sizes>
                    </div>
                    <div className="form">
                        <Button className="btn" onClick={sortByPrice}>按售价排序（由低到高）</Button>
                        <Button className="btn" onClick={sortByOrder}>按顺序排序</Button>
                    </div>
                    
                    
                    <div className="contain">
                        { result }
                    </div>
                </Route>
                <Route path={`${path}/table`}>
                    <Table dataSource={dataSource} columns={columns}></Table>
                </Route>
            </Switch>
        </div>
        
    )
}

export default Fishs