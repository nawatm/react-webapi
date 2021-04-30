import {Route, Switch} from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Forgetpassword from './pages/forgotpassword/Forgotpassword'
import PageNoteFound from "./pages/pagenotfound/PageNotFound"
import Dashboard from './pages/backend/dashboard/Dashboard'
import Product from './pages/backend/product/Product'

const routes = () => {
    return (
    <Switch>
        { /* Frontend */ }
        <Route path="/" component={Login} exact={true}></Route>
        <Route path="/login" component={Login} ></Route>
        <Route path="/register" component={Register} ></Route>
        <Route path="/forgotpassword" component={Forgetpassword}></Route>

        { /* Backend */ }
        <Route path="/backend/dashboard" component={Dashboard}></Route>
        <Route path="/backend/product" component={Product}></Route>
        
        
        { /* Link ไม่มีอยู่จริง */ }
        <Route component={PageNoteFound}></Route>

    </Switch>
    )
}
export default routes