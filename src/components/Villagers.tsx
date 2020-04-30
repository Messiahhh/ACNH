import React from 'react'
import json from '../api/json/villagers.json'

function Villagers() {
    const result = Object.values(json).map((item, index) => {
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
        <div className="contain">
            { result }
        </div>
    )
}
export default Villagers