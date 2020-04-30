import React from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'

// 公共组件
import Months from './common/months'
import Places from './common/places'
import Sizes from "./common/sizes";

import json from '../api/json/fishs.json'
import {
    months,
    places,
    sizes,
} from '../api/utils/fishs'

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



/**
 * @param {number} month
 * @param {string} interval
 * @returns {boolean}
 */
function monthMatchInterval(month: number, interval: string): boolean {
    const [month_start, month_end] = interval.split('-').map(i => Number(i))
    if (month_start > month_end) {
        if (month >= month_start || month <= month_end) return true
    }
    else {
        if (month >= month_start && month <= month_end) return true
    }
    return false
}

function matchMonth(month: number, interval: string){
    if (month === 0 || interval === '') return true
    if (interval.includes('&')) {
        const [interval_a, interval_b] = interval.split('&').map(s => s.trim())
        return monthMatchInterval(month, interval_a) || monthMatchInterval(month, interval_b)
    } else {
        return monthMatchInterval(month, interval)
    }
}

function matchPlace(p1: string, p2: string): boolean {
    if (p1 === '') return true
    if (p2.includes('&')) {
        const [place_a, place_b] = p2.split('&').map(s => s.trim())
        return p1 === place_a || p1 === place_b
    }
    return p1 === p2
}

function matchSize(s1: string, s2: string): boolean {
    if (s1 === '') return true
    if (s1 === 'fin' && s2.includes('fin')) return true
    if (s1.includes('6') && s2.includes('fin (6)')) return true 
    if (s1.includes('Medium') && s2.includes('fin (4)')) return true
    return s1 === s2 
}


function Fishs(props: any) {
    const dispatch = useDispatch()
    const [
        month,
        place,
        size
    ] = useSelector((state: RootState) => [state.month, state.place, state.size])
    
    function onMonthChange (value: string) {
        dispatch(changeMonth(value))
    }
    
    function onPlaceChange (value: string) {
        dispatch(changePlace(value))
    }

    function onSizeChange (value: string) {
        dispatch(changeSize(value))
    }

    
    

    const result = Object.values(json).map((item, index) => {
        const item_month = item.availability["month-northern"]
        const item_place = item.availability.location
        const item_size = item.shadow


        if (matchMonth(months[month], item_month) && matchPlace(places[place], item_place) && matchSize(sizes[size], item_size)) {
            return (
                <div className="item" key={item.id}>
                    <div>
                        {item.name['name-cn']}
                    </div>
                    <div>
                        ${item.price}
                    </div>
                    <img className='fish_img' src={require(`../static/icons/fish/${item["file-name"]}.png`)}/>
                </div>
            )
        } else {
            return null
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

export default Fishs