import React from 'react'
import Fish from './components/fish'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import 'antd/dist/antd.css' 
import './index.scss'

import hero from './static/images/hero.jpg'




function App() {
    return (
        <div className="app">
            <header className="header"></header>
            <main className="main">
                <Fish></Fish>
            </main>
            <footer className="footer"></footer>
        </div>
    )
}


export default App