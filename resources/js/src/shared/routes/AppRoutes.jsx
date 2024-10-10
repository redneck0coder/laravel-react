import { ADMIN_ROUTES, PUBLIC_ROUTES } from "./config"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin">
					{ADMIN_ROUTES.map(({ path, component }) => <Route key={path} path={path} element={component}></Route>)}
				</Route>

				{PUBLIC_ROUTES.map(({ path, component }) => <Route key={path} path={path} element={component}></Route>)}
			</Routes>
		</BrowserRouter >
	)
}