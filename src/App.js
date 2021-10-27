import "./App.css";
import Template from "./pages/Template";
import Login from "./pages/user/Login";
import Home from "./pages/home/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="container-fluid">
				<Template>
					<Switch>
						<Route exact path="/login" component={Login}></Route>
						<Route exact path="/" component={Home}></Route>
					</Switch>
				</Template>
			</div>
		</BrowserRouter>
	);
}

export default App;
