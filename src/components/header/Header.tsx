import React from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'

const { Header } = Layout

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}))
function AppHeader() {
	return (
		<Header className="header">
			<div className="logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				items={items1}
			/>
		</Header>
	)
}

export default AppHeader
