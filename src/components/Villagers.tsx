import React, {
    useState,
    useEffect,
} from 'react'
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
import axios from 'axios'

const personality: any = {
    Cranky: {
        text: '暴躁',
        value: 'Cranky',
    },
    Lazy: {
        text: '悠闲',
        value: 'Lazy',
    },
    Smug: {
        text: '自恋',
        value: 'Smug',
    },
    Jock: {
        text: '运动',
        value: 'Jock',
    },
    Normal: {
        text: '普通',
        value: 'Normal',
    },
    Snooty: {
        text: '成熟',
        value: 'Snooty',
    },
    Peppy: {
        text: '元气',
        value: 'Peppy',
    },
    Uchi: {
        text: '大姐姐',
        value: 'Uchi',
    },
}

const species: any = {
    Anteater: {
        text: '食蚁兽',
        value: 'Anteater',
    },
    Bear: {
        text: '大熊',
        value: 'Bear',
    },
    Bird: {
        text: '小鸟',
        value: 'Bird',
    },
    Bull: {
        text: '牛',
        value: 'Bull',
    },
    Cat: {
        text: '猫',
        value: 'Cat',
    },
    Cub: {
        text: '小熊',
        value: 'Cub',
    },
    Chicken: {
        text: '小鸡',
        value: 'Chicken',
    },
    Cow: {
        text: '奶牛',
        value: 'Cow',
    },
    Alligator: {
        text: '鳄鱼',
        value: 'Alligator',
    },
    Deer: {
        text: '鹿',
        value: 'Deer',
    },
    Dog: {
        text: '狗',
        value: 'Dog',
    },
    Duck: {
        text: '鸭子',
        value: 'Duck'
    },
    Elephant: {
        text: '大象',
        value: 'Elephant'
    },
    Frog: {
        text: '青蛙',
        value: 'Frog'
    },
    Goat: {
        text: '山羊',
        value: 'Goat',
    },
    Gorilla: {
        text: '猩猩',
        value: 'Gorilla'
    },
    Hamster: {
        text: '仓鼠',
        value: 'Hamster'
    },
    Hippo: {
        text: '河马',
        value: 'Hippo',
    },
    Horse: {
        text: '马',
        value: 'Horse'
    },
    Koala: {
        text: '考拉',
        value: 'Koala'
    },
    Kangaroo: {
        text: '袋鼠',
        value: 'Kangaroo'
    },
    Lion: {
        text: '狮子',
        value: 'Lion'
    },
    Monkey: {
        text: '猴子',
        value: 'Monkey'
    },
    Mouse: {
        text: '老鼠',
        value: 'Mouse'
    },
    Octopus: {
        text: '章鱼',
        value: 'Octopus'
    },
    Ostrich: {
        text: '鸵鸟',
        value: 'Ostrich'
    },
    Eagle: {
        text: '老鹰',
        value: 'Eagle'
    },
    Penguin: {
        text: '企鹅',
        value: 'Penguin'
    },
    Pig: {
        text: '猪',
        value: 'Pig'
    },
    Rabbit: {
        text: '兔子',
        value: 'Rabbit'
    },
    Rhino: {
        text: '犀牛',
        value: 'Rhino'
    },
    Sheep: {
        text: '绵羊',
        value: 'Sheep'
    },
    Squirrel: {
        text: '松鼠',
        value: 'Squirrel'
    },
    Tiger: {
        text: '老虎',
        value: 'Tiger'
    },
    Wolf: {
        text: '狼',
        value: 'Wolf'
    }

}

const columns: any[] = [
    {
        title: "名称",
        dataIndex: 'name',
        render: (value: any, record: any) => {
            return (
                <div >
                    <img style={{ width: 50}}src={require(`../static/icons/villagers/${record["file-name"]}.png`)} alt="小动物"/>
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
            return personality[value].text
        },
        filters: [
            ...Object.values(personality)
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
        dataIndex: 'birthday-string',
        sorter: (a: any, b: any) => {
            const [a_month, a_day] = a.birthday.split('/').map((i: string) => Number(i))
            const [b_month, b_day] = b.birthday.split('/').map((i: string) => Number(i))
            
            if (a_day !== b_day) return a_day - b_day 
            else {
                return a_month - b_month
            }
        }
    },
    {
        title: '种族',
        dataIndex: 'species',
        render: (value: string) => {
            return species[value].text
        },
        filters: [
            ...Object.values(species)
        ],
        onFilter: (value: string, record: any) => {
            return record.species === value
        },
        sorter: (a: any, b: any) => {
            const char1 = a.species.charCodeAt(0)
            const char2 = b.species.charCodeAt(0)
            return char1 - char2
        }
    },
    {
        title: '性别',
        dataIndex: 'gender',
        render: (value: string) => {
            if (value === 'Male') return '男'
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

interface State {
    id: number,
    name: string,
    birth: string,
    personality: string,
    species: string,
    phrase: string,
    imgUrl: string,
}

const initialVillager: State = {
    id: 0,
    name: '名字',
    birth: '',
    personality: '',
    species: '',
    phrase: '',
    imgUrl: ''
}

function Villagers() {
    const [ villager, setVillager] = useState(initialVillager)
    const { path, url } = useRouteMatch()

    function changeVillager(record: any) {
        setVillager({
            id: record.id,
            name: record.name['name-cn'],
            birth: record['birthday-string'],
            personality: personality[record.personality].text,
            species: species[record.species].text,
            phrase: record['catch-phrase'],
            imgUrl: `http://acnhapi.com/images/villagers/${record.id}`,
        })
    }

    useEffect(() => {
        (async function () {
            const id = ~~(Math.random() * 391) + 1
            const { data } = await axios.get(`http://acnhapi.com/villagers/${id}`)
            changeVillager(data)
        })() 
    }, [])

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
                <img className='fish_img' src={require(`../static/icons/villagers/${item['file-name']}.png`)} alt="小动物"/>
            </div>
        )
    })
    return (
        <div>
            
            <div className="villager">
                <div className="villager-image" style={{ backgroundImage: `url(${villager.imgUrl})`}}>
                    
                </div>
                <div className="villager-info">
                    <div className="villager-name">{villager.name}</div>
                    <div className="info">
                        <div className="label">生日</div>
                        <div className="birth">{villager.birth}</div>
                    </div>
                    <div className="info">
                        <div className="label">性格</div>
                        <div className="birth">{villager.personality}</div>
                    </div>
                    <div className="info">
                        <div className="label">种族</div>
                        <div className="birth">{villager.species}</div>
                    </div>
                    <div className="info">
                        <div className="label">口头禅</div>
                        <div className="birth">{villager.phrase}</div>
                    </div>
                </div>
            </div>

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
                        <Table dataSource={dataSource} columns={columns} pagination={{ position: ['bottomCenter']}} onRow={record => {
                            return {
                                onClick: (event: any) => {
                                    changeVillager(record)
                                }
                            }
                        }}></Table>
                    </div>
                </Route>
            </Switch>
        </div>
        
    )
}
export default Villagers