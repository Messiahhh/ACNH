import React from 'react'
import json from '../api/json/fossils.json'
function Fossils() {
    const result = Object.values(json).map((item, index) => {
        return (
            <div className="item" key={index}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                    ${item.price}
                </div>
                <img className='fish_img' src={require(`../static/images/fossils/${item['file-name']}.png`)}  alt="化石"/>
            </div>
        )
    })
    return (
        <div className="contain">
            { result }
        </div>
    )
}
export default Fossils