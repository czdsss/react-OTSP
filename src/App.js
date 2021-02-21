import React from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';
//引用组件
import Login from './views/login/Index'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	
	render(){
		return (
				<HashRouter>
					<Switch>
						<Route exact component={Login}  path="/" />
					</Switch>
				</HashRouter>
			
		)
	}
}

export default App;
