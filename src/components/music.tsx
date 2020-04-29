import React from 'react'
import json from '../api/json/music.json'

function Music() {
    const result = Object.values(json).map((item, index) => {
        return (
            <div className="item" key={item.id}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                    ${item["buy-price"]}
                </div>
                <img className='fish_img' src={require(`../static/images/music/${item['file-name']}.png`)}/>
            </div>
        )
    })
    return (
        <div className="contain">
            { result }
        </div>
    )
}

export default Music