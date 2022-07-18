import React from 'react'
import { Carousel } from 'antd'
import samsung from '../../../public/images/samsung.jpg'
type Props = {}
const contentStyle: React.CSSProperties = {
	height: '70vh',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
}
function Slide({}: Props) {
	return (
		<Carousel autoplay className="w-[90vw] m-auto mt-4">
			<div className="h-[70vh] flex justify-center">
				<img
					src={process.env.PUBLIC_URL + 'images/iphone.png'}
					style={contentStyle}
					className="object-cover w-[100%]"
				/>
			</div>
			<div className="h-[70vh]">
				<img
					src={process.env.PUBLIC_URL + 'images/samsung.jpg'}
					style={contentStyle}
					className="object-cover w-[100%]"
				/>
			</div>
			<div className="h-[70vh]">
				<img
					src={process.env.PUBLIC_URL + 'images/oppo.jpg'}
					style={contentStyle}
					className="object-cover w-[100%]"
				/>
			</div>
			<div className="h-[70vh]">
				<img
					src={process.env.PUBLIC_URL + 'images/oppo2.jpg'}
					style={contentStyle}
					className="object-cover w-[100%]"
				/>
			</div>
		</Carousel>
	)
}

export default Slide
