import React, { useState } from 'react';
import './App.scss';
import { Select } from 'antd'
import 'antd/dist/antd.css' 


import Fish from './components/fish'


const { Option } = Select







function App() {

    let [month, setMouth] = useState('所有时间')
    let [place, setPlace] = useState('所有地点')
    let [size, setSize] = useState('所有大小')

    const handleMonthChange = (value: string) => {
        setMouth(value)
    }

    const handlePlaceChange = (value: string) => {
        setPlace(value)
    }

    const handleSizeChange = (value: string) => {
        setSize(value)
    }


    return (
        <div className="app">
            <Select style={{ width: 200 }} placeholder="所有时间" onChange={handleMonthChange}>
                <Option value="所有时间">所有时间</Option>
                <Option value="一月">一月</Option>
                <Option value="二月">二月</Option>
                <Option value="三月">三月</Option>
                <Option value="四月">四月</Option>
                <Option value="五月">五月</Option>
                <Option value="六月">六月</Option>
                <Option value="七月">七月</Option>
                <Option value="八月">八月</Option>
                <Option value="九月">九月</Option>
                <Option value="十月">十月</Option>
                <Option value="十一月">十一月</Option>
                <Option value="十二月">十二月</Option>
            </Select>

            <Select style={{ width: 200 }} placeholder="所有地点" onChange={handlePlaceChange}>
                <Option value="所有地点">所有地点</Option>
                <Option value="河流">河流</Option>
                <Option value="池塘">池塘</Option>
                <Option value="大海">大海</Option>
                <Option value="雨天大海">雨天大海</Option>
                <Option value="入海口">入海口</Option>
                <Option value="码头">码头</Option>
                <Option value="悬崖上">悬崖上</Option>
            </Select>

            <Select style={{ width: 200 }} placeholder="所有大小" onChange={handleSizeChange}>
                <Option value="最小">最小</Option>
                <Option value="小">小</Option>
                <Option value="中等">中等</Option>
                <Option value="大">大</Option>
                <Option value="超大">超大</Option>
                <Option value="最大">最大</Option>
                <Option value="狭长">狭长</Option>
                <Option value="最大带背鳍">最大带背鳍</Option>
                <Option value="背鳍">背鳍</Option>
            </Select>
            <Fish month={month} place={place} size={size}></Fish>
        </div>
    )
}

export default App;
