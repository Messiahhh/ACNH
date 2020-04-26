import React from 'react'
import { Select } from 'antd'

const { Option } = Select

function Sizes({
    handleChange
}: any) {
    return (
        <Select style={{ width: 200 }} placeholder="所有大小" onChange={(v) => handleChange(v)}>
            <Option value="所有大小">所有大小</Option>
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
    )
}

export default Sizes