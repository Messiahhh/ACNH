import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'

// 公共组件
import Months from './common/months'
import Places from './common/places'
import Sizes from "./common/sizes";

// json数据
import json from '../api/json/Fish.json'
import months from '../api/utils/months'
import sizes from '../api/utils/sizes'

import { 
    changeMonth,
    changePlace,
    changeSize,
} from '../store/actions'

// 接口
interface RootState {
    month: string,
    place: string,
    size: string,
}

// 批量加载图片
let arr: string[] = []

function importImage(arr: string[]): void {
    for (let i = 0; i < 80; i++) {
        let img = require(`../static/images/fish/fish-${i + 1}.png`)
        arr.push(img)
    }
}

importImage(arr)




function Fish(props: any) {
    const [
        month,
        place,
        size
    ] = useSelector((state: RootState) => [state.month, state.place, state.size])

    const dispatch = useDispatch()


   
    function onMonthChange (value: string) {
        dispatch(changeMonth(value))
    }
    
    function onPlaceChange (value: string) {
        dispatch(changePlace(value))
    }

    function onSizeChange (value: string) {
        dispatch(changeSize(value))
    }

    const match = (item: any) => {
        return (
            (months[month] === 0 || item.months.northern.array.includes(months[month])) && 
            (place === '所有地点' || item.location === place ) && 
            (size === '所有大小' || item.shadow_size === sizes[size])
        )
    }

    const result = json.map((item, index) => {
        if (match(item)) {
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
    

    return (
        <div>
            <Months handleChange={onMonthChange}></Months>
            <Places handleChange={onPlaceChange}></Places>
            <Sizes handleChange={onSizeChange}></Sizes>
            <div className="contain">
                { result }
            </div>
        </div>
        
    )
}

export default Fish