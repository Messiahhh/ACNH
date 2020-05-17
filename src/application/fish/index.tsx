import React, {
    useState, 
    useEffect,
    useRef,
} from 'react'
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
    useLocation,
} from 'react-router-dom'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    Button,
    Table,
    Tooltip,
} from 'antd'

// 公共组件
import LazyImage from '../../components/LazyImage'
import Months from '../../components/months'
import Places from '../../components/places'
import Sizes from "../../components/sizes";

import json from '../../common/json/fishs.json'
import {
    months,
    places,
    sizes,
} from '../../common/utils/fish_data'
import {
    matchMonth,
    matchPlace,
    matchSize,
} from '../../common/utils/fish_match'

import { 
    changeMonth,
    changePlace,
    changeSize,
} from './store/actionCreator'
// import Item from 'antd/lib/list/Item'
import { StateType as RootState } from './type'
import { useObserver } from '../../common/utils/observer'
const columns: any[] = [
    {
        title: "名称",
        dataIndex: 'name',
        render: (value: any, record: any) => {
            return (
                <div >
                    {/* <img className="fish_img" style={{ width: 50}} src="./loading.svg" data-src={`./fish/${record["file-name"]}.png`} alt="鱼"/> */}
                    <LazyImage className='fish_img' style={{ width: 50}} loadingSource='./loading.svg' source={`./icons/fish/${record["file-name"]}.png`} observer={observer}></LazyImage>
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

const observer = useObserver()

function Fishs(props: any) {

    const { path, url} = useRouteMatch()

    const [sort, setSort] = useState(false) 
    const dispatch = useDispatch()
    const [
        month,
        place,
        size
    ] = useSelector((state: any) => [state.fish.month, state.fish.place, state.fish.size])
    
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
                <Tooltip title={item.name['name-cn']}>
                    <div className="item" style={{order: sort ? item.price : 0}} key={item.id} data-price={item.price}>
                        <div>
                            {item.name['name-cn']}
                        </div>
                        <LazyImage className='fish_img' loadingSource='./loading.svg' source={`./icons/fish/${item["file-name"]}.png`} observer={observer}></LazyImage>
                        {/* <img className='fish_img' src='./loading.svg'  data-src={`./fish/${item["file-name"]}.png`} alt="鱼"/> */}
                        <div>
                            ${item.price}
                        </div>
                    </div>
                </Tooltip>
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
                        <Months handleChange={onMonthChange} month={month}></Months>
                        <Places handleChange={onPlaceChange} place={place}></Places>
                        <Sizes handleChange={onSizeChange} size={size}></Sizes>
                    </div>
                    <div className="form">
                        <Button className="btn" onClick={sortByPrice}>按售价排序</Button>
                        <Button className="btn" onClick={sortByOrder}>按顺序排序</Button>
                    </div>
                    
                    
                    <div className="contain">
                        { result }
                    </div>
                </Route>
                <Route path={`${path}/table`}>
                    <Table dataSource={dataSource} columns={columns} pagination={{ position: ['bottomCenter']}}></Table>
                </Route>
            </Switch>
        </div>
        
    )
}

export default Fishs