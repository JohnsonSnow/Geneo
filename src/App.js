<<<<<<< HEAD
import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";

const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/c">
              <LoggedInComponent />
            </Route>
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
=======
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
>>>>>>> 21abcfe527747fa81344cad542002a2e90b1fd56
}

export default App;
