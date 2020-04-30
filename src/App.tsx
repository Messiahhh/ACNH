import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from 'react-router-dom'

import 'antd/dist/antd.css' 

import Fishs from './components/fishs'
import Bugs from './components/bugs'
import Fossils from './components/fossils'
import Music from './components/music'
import Villagers from './components/Villagers'

import './index.scss'



function App() {
    return (
        <Router>
            <div className="app">
                <header className="header"></header>
                <main className="main">
                    <div className="types">
                        <Link to='/'><div className="type type-fishs"></div></Link>
                        <Link to='/bugs'><div className="type type-bugs"></div></Link>
                        <Link to='/fossils'><div className="type type-fossils"></div></Link>
                        <Link to='/kk'><div className="type type-disc"></div></Link>
                        <Link to='/villagers'><div className="type type-villagers"></div></Link>
                        {/* <div className="type type-flowers"></div> */}
                        
                    </div>
                    
                    <Switch>
                                       
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
                        <Route path='/'>
                            <Fishs></Fishs>
                        </Route>
                    </Switch>
                    
                </main>
                <footer className="footer"></footer>
            </div>         
        </Router>

    )
}


export default App