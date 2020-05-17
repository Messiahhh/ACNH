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

import json from '../../common/json/bugs.json'
import Months from '../../components/months'

import { months } from '../../common/utils/fish_data'

import { 
    changeMonth
} from './store/actionCreator'
import { StateType as RootState } from './type'
import { matchMonth } from '../../common/utils/fish_match'
import { useObserver } from '../../common/utils/observer'
import LazyImage from '../../components/LazyImage'
const observer = useObserver()

const columns: any[] = [
    {
        title: "名称",
        dataIndex: 'name',
        render: (value: any, record: any) => {
            return (
                <div >
                    <LazyImage className='fish_img' style={{ width: 50}} loadingSource='./loading.svg' source={`./icons/bugs/${record["file-name"]}.png`} observer={observer}></LazyImage>
                    {/* <img style={{ width: 50}}src={require(`../../static/icons/bugs/${record["file-name"]}.png`)} alt="昆虫"/> */}
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
    ] = useSelector((state: any) => [state.bug.month])
    const { path, url } = useRouteMatch()

    function onMonthChange (value: string):void {
        dispatch(changeMonth(value))
    }


    const dataSource = Object.values(json)
    



    const result = dataSource.map((item, index) => {
        const item_month = item.availability["month-northern"]
        if (matchMonth(months[month], item_month)) {
            return (
                <div className="item" key={item.id}>
                    <div>
                        {item.name['name-cn']}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                    <LazyImage className='fish_img' loadingSource='./loading.svg' source={`./icons/bugs/${item["file-name"]}.png`} observer={observer}></LazyImage>
                    {/* <img className='fish_img' src={require(`../../static/icons/bugs/${item['file-name']}.png`)} alt="昆虫"/> */}
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
                <Months handleChange={onMonthChange} month={month}></Months>
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