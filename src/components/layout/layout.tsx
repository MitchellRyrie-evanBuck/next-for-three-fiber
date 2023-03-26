import React, { FC } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

interface layoutProps {
  children: React.ReactElement
}

const SelfLayout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}


export default SelfLayout