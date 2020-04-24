import React from 'react'

import json from '../api/Fish.json'
import months from '../utils/months'
import sizes from '../utils/sizes'

// 批量加载图片
let arr: string[] = []

function importImage(arr: string[]): void {
    for (let i = 0; i < 80; i++) {
        let img = require(`../images/fish-${i + 1}.png`)
        arr.push(img)
    }
}

importImage(arr)




function Fish(props: any) {
    let { month, place, size } = props 
    let set = new Set()
    let result = json.map((item, index) => {
        set.add(item.shadow_size)
        if ((months[month] === 0 || item.months.northern.array.includes(months[month])) && (place === '所有地点' || item.location === place ) && (size === '所有大小' || item.shadow_size === sizes[size] )) {
            return (
            <div className="item" key={item.id}>
                <div>
                    {item.name_zh}
                </div>
                <div>
                    ${item.price}
                </div>
                <img className='fish_img'src={arr[index]}/>
            </div>
            )
        }
    })
    console.log(set);
    

    return (
        <div className="contain">
            { result }
        </div>
    )
}

export default Fish