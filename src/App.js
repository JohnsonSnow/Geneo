import logo from './logo.svg';
import React from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import routes, { landing } from './userRoutes';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, i) => (
					<Route key={i} exact path={route.path}>
						<route.component />
					</Route>
				))}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
