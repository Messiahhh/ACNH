import React, {
    Suspense,
    lazy,
} from 'react'
import {
    Link,
    Switch,
    Route,
    HashRouter,
} from 'react-router-dom'
import { BackTop } from 'antd'

import './index.scss'


const Fishs = lazy(() => import('./components/fishs'))
const Bugs = lazy(() => import('./components/bugs'))
const Fossils = lazy(() => import('./components/fossils'))
const Music = lazy(() => import('./components/music'))
const Villagers = lazy(() => import('./components/Villagers'))




function App() {
    return (
        <HashRouter>
            <div className="app">
                {/* <header className="header"></header> */}
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
                    <Suspense fallback={<div>加载中...</div>}>
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

                    </Suspense>
                    
                </main>
                <footer className="footer"></footer>
                <BackTop />
            </div>         
        </HashRouter>

    )
}


export default App