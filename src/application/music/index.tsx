import React, {
    useState
} from 'react'
import json from '../../common/json/music.json'
import Audio from '../../components/audio'
import LazyImage from '../../components/LazyImage'
import { useObserver } from '../../common/utils/observer'
function Music() {
    const observer = useObserver()
    const [url, setUrl ] = useState("http://acnhapi.com/music/88")

    const result = Object.values(json).map((item, index) => {
        return (
            <div className="item" key={item.id}>
                <div>
                    {item.name['name-cn']}
                </div>
                <div>
                    ${item["buy-price"]}
                </div>
                <LazyImage className="fish_img" loadingSource='./loading.svg' source={`./images/music/${item['file-name']}.png`} observer={observer} onClick={() => setUrl(`http://acnhapi.com/music/${item.id}`)}></LazyImage>
                {/* <img className='fish_img' onClick={() => setUrl(`http://acnhapi.com/music/${item.id}`)} src={require(`../../static/images/music/${item['file-name']}.png`)}  alt="kk"/> */}
            </div>
        )
    })


    return (
        <>
            <Audio src={url}></Audio>
            <div className="contain">
                
                { result }
            </div>
        </>
    )
}

export default Music