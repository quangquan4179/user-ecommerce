import React from 'react'
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'
import AppHeader from '../header/Header'
import Slide from '../slide/Slide'
const { Content, Footer, Sider } = Layout

type props = {
	children: React.ReactNode
}
const items2: MenuProps['items'] = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
].map((icon, index) => {
	const key = String(index + 1)
	return {
		key: `sub${key}`,
		icon: React.createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1
			return {
				key: subKey,
				label: `option${subKey}`,
			}
		}),
	}
})

function LayoutApp({ children }: props) {
	return (
		<Layout>
			<AppHeader />
			<Slide />
			<Content className="px-5">
				<Breadcrumb className="my-4">
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Layout
					className="site-layout-background"
					style={{ padding: '24px 0' }}>
					{/* <Sider className="site-layout-background" width={200}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%' }}
							items={items2}
						/>
					</Sider> */}
					<Content className="px-6 min-h-[280px]"> {children}</Content>
				</Layout>
			</Content>
			<Footer className="text-center">
				Ant Design ©2018 Created by Ant UED
			</Footer>
		</Layout>
	)
}

export default LayoutApp
