import React from 'react'
import Fish from './components/fish'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css' 
import './index.scss'

interface RootState {
    month: string,
    place: string,
    size: string,
}


function App() {
    let state = useSelector((state: RootState) => state)
    return (
        <div className="app">
            {state.place}
            <Fish></Fish>
        </div>
    )
}


export default App