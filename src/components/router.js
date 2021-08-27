import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home';
import Menu from './menu';
import Amorios from './amorios'
import Dragones from './Dragones'
class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Menu}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/amorios' component={Amorios}></Route>
                    <Route path='/Dragones' component={Dragones}></Route>
                   
                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;