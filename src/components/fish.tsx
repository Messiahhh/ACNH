import React from 'react'

import Months from './common/months'
import Places from './common/places'
import Sizes from "./common/sizes";

import json from '../api/json/Fish.json'
import months from '../api/utils/months'
import sizes from '../api/utils/sizes'

// 批量加载图片
let arr: string[] = []



function importImage(arr: string[]): void {
    for (let i = 0; i < 80; i++) {
        let img = require(`../static/images/fish-${i + 1}.png`)
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
        <div>
            <Months></Months>
            <Places></Places>
            <Sizes></Sizes>
            <div className="contain">
                { result }
            </div>
        </div>
        
    )
}

export default Fish