import React, {
    useState
} from 'react'

interface Props {
    display: 'flex' | 'none',
}

function Popup({
    display,
}: Props) {
    const [ canDisplay, setCanDisplay ] = useState(display)
    function clickMask() {
        setCanDisplay('none')
    }


    function clickPopup(e: any) {
        e.stopPropagation()
    }

    return (
        <div className="mask" style={{display: canDisplay}} onClick={clickMask}>
            <div className="popup" onClick={clickPopup}>
                <div className="part-one">
                    <div className="name">兰花螳螂</div>
                    
                    <img className="img" src={require('../static/images/fish/tuna.png')} />
                </div>
                <div className="part-two">
                    <div className="months-label">月份</div>
                    <div className="months">
                        <div className="month">Jan</div>
                        <div className="month">Feb</div>
                        <div className="month">Mar</div>
                        <div className="month">Apr</div>
                        <div className="month">May</div>
                        <div className="month">Jun</div>
                        <div className="month">Jul</div>
                        <div className="month">Aug</div>
                        <div className="month">Sep</div>
                        <div className="month">Oct</div>
                        <div className="month">Nov</div>
                        <div className="month">Dec</div>
                    </div>
                    
                    <div className="">Location</div>
                    <div className="">Price</div>

                </div>
            </div>
        </div>
    )
}

Popup.defaultProps = {
    display: 'flex'
}

export default Popup