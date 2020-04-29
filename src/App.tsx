import React from 'react'
import 'antd/dist/antd.css' 

import Fishs from './components/fishs'
import Bugs from './components/bugs'
import Fossils from './components/fossils'
import Music from './components/music'
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
                <Fishs></Fishs>
                <Bugs></Bugs>
                <Fossils></Fossils>
                <Music></Music>
            </main>
            <footer className="footer"></footer>
        </div>
    )
}


export default App