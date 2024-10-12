import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AdminLayout } from "../layouts/AdminLayout"
import { $authHost } from "../api";

export const AdminRouter = () => {
	const [isLoading, setIsloading] = useState(true)
	const navigate = useNavigate()

	const checkAuth = () => {
		$authHost.get('/api/check')
			.then(res => {
				if (res?.data?.isAuth) setIsloading(false)
			})
			.catch(err => navigate('/'))
	}

	useEffect(() => checkAuth(), [])


	if (isLoading) return <>Loading...</>

	return (
		<AdminLayout>
			<Outlet />
		</AdminLayout>
	)
}