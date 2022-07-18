import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
// import { Button, Checkbox, Form, Input } from "antd";
import { Link } from 'react-router-dom'
import './Login.css'
type FormValues = {
	email: string
	password: string
}

function Login() {
	//   const onFinish = (values: any) => {
	//     console.log("Success:", values);
	//   };

	//   const onFinishFailed = (errorInfo: any) => {
	//     console.log("Failed:", errorInfo);
	//   };
	const { control, handleSubmit, register } = useForm<FormValues>()
	return (
		<div className="login col-span-7">
			<div className="login__box rounded-lg shadow-md ">
				<h3 className="login__header">Login</h3>

				<div className="login__form">
					<form
						className="form"
						onSubmit={handleSubmit((data) => console.log(data))}
					>
						<div className="form-group">
							<input className="form-input" {...register('email')} />

							<label className="form-label">Email</label>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-input"
								{...register('password')}
							/>

							<label className="form-label">Passsword</label>
						</div>
						<button className="btn btn-login font-medium rounded-lg text-lg h-12">
							Sign in
						</button>
					</form>
				</div>
				<div></div>
				<div className="login__nav">
					<Link to="/register" className="login__link">
						Create new account
					</Link>
					<Link to="/password-recovery" className="login__link">
						Forgot password
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Login
