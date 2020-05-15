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

            </div>
        </div>
    )
}

Popup.defaultProps = {
    display: 'flex'
}

export default Popup