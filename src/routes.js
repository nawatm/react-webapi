import {Route, Switch} from 'react-router-dom'
import login from './pages/login/Login'
import Register from './pages/register/Register'
import Forgetpassword from './pages/forgotpassword/Forgotpassword'
import PageNoteFound from './pages/pagenotfound/PageNotFound'
import Dashboard from './pages/backend/dashboard/Dashboard'


const routes = (
    <Switch>
        { /* Frontend */ }
        <Route path="/" component={login} exact={true}></Route>
        <Route path="/login" component={login} ></Route>
        <Route path="/register" component={Register} ></Route>
        <Route path="/forgotpassword" component={Forgetpassword}></Route>

        { /* Backend */ }
        <Route path="/backend/dashboard" component={Dashboard}></Route>
        
        
        { /* Link ไม่มีอยู่จริง */ }
        <Route component={PageNoteFound}></Route>
    </Switch>
)

export default routes