import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/auth/login" component={Login} />
				<Route exact path="/auth/register" component={Register} />
				<Route exact path="/users"  component={Login} />
				<Redirect to="/auth/login" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
