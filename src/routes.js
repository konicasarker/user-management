import HomePage from './components/homePage'
import Signup from './components/signup/signup'
import Login from './components/login/login'
import EditUser from './components/editUser'
import Admin from './components/admin'
import Testcss from './components/Testcss/Testcss'
import LandingPage from './components/mainpage/landingPage'


const routes = [
    {
        path: '/home',
        component: HomePage,
        isPrivate: false,
        role:['admin', 'user']
    },
    {
        path: '/sign-up',
        component: Signup,
        isPrivate: false,
        role:['admin', 'user']
    },
    {
        path: '/login',
        component: Login,
        isPrivate: false,
        role:['admin', 'user']
    },
    {
        path: '/admin',
        component: Admin,
        isPrivate: true,
        role:['admin']
    },
    {
        path: '/home-page',
        component: HomePage,
        isPrivate: true,
        role:['admin', 'user']
    },
    {
        path: '/editUser',
        component: EditUser,
        isPrivate: true,
        role:['admin', 'user']
    },
    {
        path: '/react-bootstrap',
        component: Testcss,
        isPrivate: false,
        role:['admin', 'user']
    },
    {
        path: '*',
        exact: true,
        component: LandingPage,
        isPrivate: false,
        role:['admin', 'user']
    },
];

export default routes;