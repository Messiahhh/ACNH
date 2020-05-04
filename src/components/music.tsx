import React, {
    useState
} from 'react'
import json from '../api/json/music.json'
import Audio from './common/audio'

function Music() {
    const [url, setUrl ] = useState("http://acnhapi.com/music/1")

    const result = Object.values(json).map((item, index) => {
        return (
            <div className="item" key={item.id}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                    ${item["buy-price"]}
                </div>
                <img className='fish_img' onClick={() => setUrl(`http://acnhapi.com/music/${item.id}`)} src={require(`../static/images/music/${item['file-name']}.png`)}  alt="kk"/>
            </div>
        )
    })


    return (
        <div className="contain">
            <Audio src={url}></Audio>
            { result }
        </div>
    )
}

export default Music