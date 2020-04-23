import React from 'react';
import { Button } from 'antd'
import './App.css';

import json from './api/Fish.json'

function App() {
    return (
        <div className="app">
            {json.map((item) => 
                <div key={item.id}>{item.name_zh}</div>
            )}
        </div>
    )
}

export default App;
