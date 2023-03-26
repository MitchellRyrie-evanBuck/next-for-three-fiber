import React from 'react';
import { DatePicker, Button } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import { Skeleton } from 'antd';

const Login: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }} >
      <DatePicker />
      <Button type="primary">Primary Button</Button>

      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
      <Skeleton avatar active paragraph={{ rows: 4 }} />
    </div>
  )
}

export default Login