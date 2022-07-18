import React from 'react'
import {
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import AppHeader from './components/header/Header'

import Slide from './components/slide/Slide'

import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
	Navigate,
	Outlet,
} from 'react-router-dom'
import RequireAuth from './components/auth/RequiredAurh'

import LayoutApp from './components/Layout/Layout'
import { AuthProvider } from './AuthProvider'
import Login from './components/auth/Login'

const { Content, Footer, Sider } = Layout

const ROLES = {
	User: 2001,
}
function App() {
	return (
		<AuthProvider>
			<LayoutApp>
			<Routes>
				<Route path="/" element={<>aaaa</>}>
					{/* public routes */}
				</Route>
				<Route path="login" element={<Login />} />
				{/* we want to protect these routes */}
				<Route element={<RequireAuth />}>
					<Route path="/test" element={<HomePage />} />
				</Route>
			</Routes>

			</LayoutApp>
			
		</AuthProvider>
	)
}

export default App

// Home.jsx
export const HomePage = () => (
	<div>
		<h1>This is the Home Page</h1>
	</div>
)
