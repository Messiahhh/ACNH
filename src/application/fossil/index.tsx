import React from 'react'
import json from '../../common/json/fossils.json'
import LazyImage from '../../components/LazyImage'
import { useObserver } from '../../common/utils/observer'

function Fossils() {
    const observer = useObserver()
    const result = Object.values(json).map((item, index) => {
        return (
            <div className="item" key={index}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                    ${item.price}
                </div>
                <LazyImage className="fish_img" loadingSource='./loading.svg' source={`./images/fossils/${item['file-name']}.png`} observer={observer}></LazyImage>
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