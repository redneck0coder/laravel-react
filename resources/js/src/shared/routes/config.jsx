import { AdminPage } from "../../pages/Admin";
import { LoginPage } from "../../pages/Login";
import { MainPage } from "../../pages/Main";

export const ADMIN_ROUTES = [
	{ path: '', component: <AdminPage /> }
]

export const PUBLIC_ROUTES = [
	{ path: '/', component: <MainPage /> },
	{ path: '/login', component: <LoginPage /> },
]