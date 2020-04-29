import React from 'react'
import json from '../api/json/bugs.json'

function Bugs() {
    const result = Object.values(json).map((item, index) => {
        return (
            <div className="item" key={item.id}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                    ${item.price}
                </div>
                <img className='fish_img' src={require(`../static/icons/bugs/${item['file-name']}.png`)}/>
            </div>
        )
    })
    return (
        <div className="contain">
            { result }
        </div>
    )
}

export default Bugs