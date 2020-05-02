import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    useRouteMatch,
    HashRouter,
} from 'react-router-dom'
import { BackTop } from 'antd'
import 'antd/dist/antd.css' 

import Fishs from './components/fishs'
import Bugs from './components/bugs'
import Fossils from './components/fossils'
import Music from './components/music'
import Villagers from './components/Villagers'

import './index.scss'



function App() {
    return (
        <HashRouter>
            <div className="app">
                <header className="header"></header>
                <main className="main">
                    <div className="types">
                        <Link to='/fish'>
                            <div className="type type-fishs"></div>
                            <div>鱼类图鉴</div>
                        </Link>
                        <Link to='/bugs'>
                            <div className="type type-bugs"></div>
                            <div>昆虫图鉴</div>
                            </Link>
                        <Link to='/fossils'>
                            <div className="type type-fossils"></div>
                            <div>化石图鉴</div>    
                        </Link>
                        <Link to='/kk'>
                            <div className="type type-disc"></div>
                            <div>K.K唱片</div>    
                        </Link>
                        <Link to='/villagers'>
                            <div className="type type-villagers"></div>
                            <div>岛民图鉴</div>    
                        </Link>
                    </div>
                    
                    <Switch>
                        <Route path='/fish'>
                            <Fishs></Fishs>
                        </Route>       
                        <Route path='/bugs'>
                            <Bugs></Bugs>
                        </Route>
                        <Route path="/fossils">
                            <Fossils></Fossils>
                        </Route>
                        <Route path="/kk">
                            <Music></Music>
                        </Route>
                        <Route path="/villagers">
                            <Villagers></Villagers>
                        </Route>         
                        
                    </Switch>
                    
                </main>
                <footer className="footer"></footer>
                <BackTop />
            </div>         
        </HashRouter>

    )
}


export default App