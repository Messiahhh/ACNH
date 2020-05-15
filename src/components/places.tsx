import React from 'react'
import { Select } from 'antd'

const { Option } = Select

function Places({
    handleChange,
    place
}: any) {
    return (
        <Select style={{ width: '30%' }} placeholder={place} onChange={(v) => handleChange(v)}>
            <Option value="所有地点">所有地点</Option>
            <Option value="河流">河流</Option>
            <Option value="池塘">池塘</Option>
            <Option value="大海">大海</Option>
            <Option value="雨天大海">雨天大海</Option>
            <Option value="入海口">入海口</Option>
            <Option value="码头">码头</Option>
            <Option value="悬崖上">悬崖上</Option>
        </Select>
    )
}

export default Places