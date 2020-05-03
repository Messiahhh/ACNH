import React from 'react'

import {
    useDispatch,
    useSelector,
} from 'react-redux'

import {
    Link,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'

import {
    Button,
    Table,
} from 'antd'

import json from '../api/json/bugs.json'
import Months from './common/months'

import { months } from '../api/utils/fishs'

import { 
    changeMonth
} from '../store/actions'
import { State as RootState } from '../store/types'


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

const columns: any[] = [
    {
        title: "名称",
        dataIndex: 'name',
        render: (value: any, record: any) => {
            return (
                <div >
                    <img style={{ width: 50}}src={require(`../static/icons/bugs/${record["file-name"]}.png`)} alt="昆虫"/>
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

    },

]

function Bugs() {
    const dispatch = useDispatch()
    const [
        month,
    ] = useSelector((state: RootState) => [state.month])
    const { path, url } = useRouteMatch()

    function onMonthChange (value: string):void {
        dispatch(changeMonth(value))
    }


    const dataSource = Object.values(json)
    



    const result = dataSource.map((item, index) => {
        const item_month = item.availability["month-northern"]
        console.log(item_month);
        
        if (matchMonth(months[month], item_month)) {
            return (
                <div className="item" key={item.id}>
                    <div>
                        {item.name['name-cn']}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                    <img className='fish_img' src={require(`../static/icons/bugs/${item['file-name']}.png`)} alt="昆虫"/>
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
            <div className="form">
                <Months handleChange={onMonthChange}></Months>
            </div>
            <Switch>
                <Route exact path={path}>
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

export default Bugs