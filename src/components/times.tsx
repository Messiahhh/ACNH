import React from 'react'
import { Select } from 'antd'

const { Option } = Select

function Times({
    handleChange
} : any) {
    return (
        <Select style={{ width: '30%' }} onChange={(value) => handleChange(value)}>
            <Option value="0">0:00</Option>
            <Option value="1">1:00</Option>
            <Option value="2">2:00</Option>
            <Option value="3">3:00</Option>
            <Option value="4">4:00</Option>
            <Option value="5">5:00</Option>
            <Option value="6">6:00</Option>
            <Option value="7">7:00</Option>
            <Option value="8">8:00</Option>
            <Option value="9">9:00</Option>
            <Option value="10">10:00</Option>
            <Option value="11">11:00</Option>
            <Option value="12">12:00</Option>
            <Option value="13">13:00</Option>
            <Option value="14">14:00</Option>
            <Option value="15">15:00</Option>
            <Option value="16">16:00</Option>
            <Option value="17">17:00</Option>
            <Option value="18">18:00</Option>
            <Option value="19">19:00</Option>
            <Option value="20">20:00</Option>
            <Option value="21">21:00</Option>
            <Option value="22">22:00</Option>
            <Option value="23">23:00</Option>
        </Select>
    )
}

export default Times