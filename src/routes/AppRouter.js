import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/Register';
import RecoverPassword from '../pages/auth/RecoverPassword';
import WallPost from '../pages/wall-posts/WallPost';
import AuthProvider from '../context/AuthProvider';

const AppRouter = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/auth/login" component={Login} />
					<Route exact path="/auth/register" component={Register} />
					<Route exact path="/auth/recover" component={RecoverPassword} />
					<Route exact path="/post" component={WallPost} />
					<Redirect to="/auth/login" />
				</Switch>
			</Router>
		</AuthProvider>
	);
};

export default AppRouter;
