import React, { FunctionComponent } from 'react'
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Article } from './pages/article/Article'

const App: FunctionComponent<RouteComponentProps> = () => {
	return (
		<>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/article' component={Article} />
			</Switch>
		</>
	)
}

export default withRouter(App)
