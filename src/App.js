import "./App.css";
import Template from "./pages/Template";
import Login from "./pages/user/Login";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Template>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/search" component={Search}></Route>
				</Template>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
