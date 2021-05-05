import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import StorePage from "../Store/store";
import Home from "../Home/home";
import "./style.css"
import Constructor from "../Constructor/Constructor";

function NavigationBar(){
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/store">Shop now</Link>
                        </li>
                        <li>
                            <Link to="/constructor">Constructor</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>

                    </ul>
                </nav>

                <Switch>
                    <Route path="/constructor">
                        <Constructor />
                    </Route>
                    <Route path="/store">
                        <StorePage />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>

                    <Route path="/cart">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}


export default NavigationBar;
