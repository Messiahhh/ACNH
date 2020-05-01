import React from 'react'
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import {
    Table,
    Button,
} from 'antd'
import json from '../api/json/villagers.json'
const columns: any[] = [
    {
        title: "名称",
        dataIndex: 'name',
        render: (value: any, record: any) => {
            return (
                <div >
                    <img style={{ width: 50}}src={require(`../static/icons/villagers/${record["file-name"]}.png`)} alt=""/>
                    
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
        title: "性格",
        dataIndex: 'personality',
        render: (value: string) => {
            switch (value) {
                case 'Cranky':
                    return '暴躁'
                    break
                case 'Lazy':
                    return '悠闲'
                    break
                case 'Smug':
                    return '自恋'
                    break
                case 'Jock':
                    return '运动'
                    break
                case 'Normal':
                    return '普通'
                    break
                case 'Snooty':
                    return '成熟'
                    break
                case 'Peppy':
                    return '元气'
                    break
                case 'Uchi':
                    return '大姐姐'
                    break
                default:
                    return value
                    break;
            }
        },
        filters: [
            {
                text: '暴躁',
                value: 'Cranky'
            },
            {
                text: '悠闲',
                value: 'Lazy'
            },
            {
                text: '自恋',
                value: 'Smug'
            },
            {
                text: '运动',
                value: 'Jock'
            },
            {
                text: '普通',
                value: 'Normal'
            },
            {
                text: '成熟',
                value: 'Snooty'
            },
            {
                text: '元气',
                value: 'Peppy'
            },
            {
                text: '大姐姐',
                value: 'Uchi'
            },
        ],
        onFilter: (value: string, record: any) => {
            return record.personality === value
        },
        sorter: (a: any, b: any) => {
            const char1 = a.personality.charCodeAt(0)
            const char2 = b.personality.charCodeAt(0)
            return char1 - char2
        }
    },
    {
        title: "生日",
        dataIndex: 'birthday-string'
    },
    {
        title: '种族',
        dataIndex: 'species',
    },
    {
        title: '性别',
        dataIndex: 'gender',
        render: (value: string) => {
            if (value == 'Male') return '男'
            return '女'
        },
        filters: [
            {
                text: '男',
                value: 'Male',
            },
            {
                text: '女',
                value: 'Female'
            },
        ],
        onFilter: (value: string, record: any) => record.gender === value,
        sorter: (a: any, b: any) => a.gender.charCodeAt(0) - b.gender.charCodeAt(0)
    }
]
function Villagers() {
    const { path, url } = useRouteMatch()
    const dataSource = Object.values(json)
    const result = dataSource.map((item, index) => {
        return (
            <div className="item" key={item.id}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                     {item.birthday.split('/')[1]} 月 {item.birthday.split('/')[0]} 日
                </div>
                <img className='fish_img' src={require(`../static/icons/villagers/${item['file-name']}.png`)}/>
            </div>
        )
    })
    return (
        <div>
            <div className="form">
                <Button className="btn" type="primary"><Link to={url}>图鉴</Link></Button>
                <Button className="btn" type="primary"><Link to={`${url}/table`}>表格</Link></Button>
            </div>
            <Switch>
                <Route exact path={path}>
                    <div className="contain">
                        { result }
                    </div>
                </Route>
                <Route path={`${path}/table`}>
                    <div>
                        <Table dataSource={dataSource} columns={columns} pagination={{ position: ['bottomCenter'], pageSize: 20}}></Table>
                    </div>
                </Route>
            </Switch>
        </div>
        
    )
}
export default Villagers