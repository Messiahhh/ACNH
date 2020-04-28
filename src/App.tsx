import React from 'react'
import 'antd/dist/antd.css' 

import Fish from './components/fish'
import './index.scss'


function App() {
    return (
        <div className="app">
            <header className="header"></header>
            <main className="main">
                <div className="types">
                    <div className="type type-fishes"></div>
                    <div className="type type-bugs"></div>
                    <div className="type type-fossil"></div>
                    <div className="type type-flowers"></div>
                    <div className="type type-disc"></div>
                </div>
                <Fish></Fish>
            </main>
            <footer className="footer"></footer>
        </div>
    )
}


export default App