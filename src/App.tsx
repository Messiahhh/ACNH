import React from 'react'
import Fish from './components/fish'
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import 'antd/dist/antd.css' 
import './index.scss'

// interface appState {
//     month: string,
//     place: string,
//     size: string
// }

function App() {
    // let myState: appState = useSelector(state => state)
    return (
        <div className="app">
            {/* {myState.month} */}
            
            <Fish></Fish>
        </div>
    )
}

export default App