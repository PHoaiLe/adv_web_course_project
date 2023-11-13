'use client';

import {
    UserOutlined,
    AppstoreOutlined,
    HistoryOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FileImageOutlined
   } from '@ant-design/icons';

import { useState } from 'react';
import { Menu, Button, Avatar } from 'antd';
import Link from 'next/link';
import './UserLeftMenu.css'


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

function getMenuItemLabelAsLink(label, Href)
{
    return <Link href={Href}>{label}</Link>
}

const items = [
  getItem('My Account', 'user-menu-item-1', <UserOutlined />,
  [
    getItem(getMenuItemLabelAsLink('Account Information', '/account/info'), 'user-menu-item-1-child-1'),
    getItem(getMenuItemLabelAsLink('Personal Information', '/account/personal'), 'user-menu-item-1-child-2')
  ]),
  getItem(getMenuItemLabelAsLink('History', 'account/history'), 'user-menu-item-2', <HistoryOutlined />),
  getItem('Others', 'user-menu-item-3', <AppstoreOutlined />)
];
function UserLeftMenu({initialDefaultSelectKey})
{
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className='user-menu-frame'>
        <div className='user-menu-top-info'>
            <Avatar
                size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
                }}
                icon={<FileImageOutlined/>}
            />
            <p>Username</p>
        </div>
        <div>
            <Button className='user-menu-collapsed-button'
                type="primary"
                onClick={toggleCollapsed}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>       
            <Menu className='user-menu'
                defaultSelectedKeys={['user-menu-item-1-child-2']}
                defaultOpenKeys={['user-menu-item-1']}
                mode="inline"
                theme="light"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>

    </div>
  );
};

export default UserLeftMenu;