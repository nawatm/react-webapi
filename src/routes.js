import {Route, Switch} from 'react-router-dom'
import login from './pages/login/Login'

const routes = (
    <Switch>
        { /* Frontend */ }
        <Route path="/" component={login} exact={true}></Route>
        <Route path="/login" component={login} ></Route>
        {/* <Route path="/register" component={"register"} ></Route> */}

        { /* Backend */ }
        { /* <Route path="/backend/dashboard" component={"dashboard"} ></Route> */ }

    </Switch>
)

export default routes