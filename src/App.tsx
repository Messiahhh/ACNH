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
import Popup from './components/popup'
import './index.scss'


const Fishs = lazy(() => import('./application/fish'))
const Bugs = lazy(() => import('./application/bug'))
const Fossils = lazy(() => import('./application/fossil'))
const Music = lazy(() => import('./application/music'))
const Villagers = lazy(() => import('./application/villager'))




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
                            <Route path='/' exact>
                                <div className="title">Animal Crossing: New Horizon</div>
                                <div className="discription">
                                    用爱发电的动物森友会网站。<br />
                                    最近在准备考试，所以都是抽空才写一点点代码，功能相比市面上的项目差了很多功能。<br />
                                    本项目是部署在Github Pages上的，所以国内访问的话速度估计十分的捉急，不过本项目本来就是自己写着玩的，没想过有用户的问题。<br />
                                    未来也许会增加各种功能吧。
                                </div>
                            </Route>
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
                <footer className="footer" ></footer>
                <BackTop />
                {/* <Popup /> */}
            </div>         
        </HashRouter>

    )
}


export default App