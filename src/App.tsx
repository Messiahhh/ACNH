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
import {
    useSelector,
    useDispatch
} from 'react-redux'
import { BackTop } from 'antd'
import Popup from './components/popup'
import './index.scss'


const Fishs = lazy(() => import('./application/fish'))
const Bugs = lazy(() => import('./application/bug'))
const Fossils = lazy(() => import('./application/fossil'))
const Music = lazy(() => import('./application/music'))
const Villagers = lazy(() => import('./application/villager'))




function App() {
    let [fish, bug, p, s] = useSelector((state: any) => [state.fish.month, state.bug.month, state.fish.place, state.fish.size])
    return (
        <HashRouter>
            { fish }
            { bug }
            {p}
            {s}
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
                <footer className="footer" ></footer>
                <BackTop />
                <Popup display="none" />
            </div>         
        </HashRouter>

    )
}


export default App