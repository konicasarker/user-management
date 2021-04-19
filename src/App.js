import React, {Component} from 'react';
import {Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/header/header'

import AppRoute from './components/approute'
import routes from './routes'



class App extends Component {
    constructor(){
        super()
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: '',
        }
    }

     isLoggedIn = () => {
         console.log( "==================>", window.localStorage.getItem('lms.islogedin'))
         window.localStorage.getItem('lms.islogedin')
        }

    // render() {
    //     return (
    //         <React.Fragment>
    //                {/* <Route exact path="/" component={Mainpage} /> */}
    //                {/* <Mainpage /> */}
    //             <Switch>
    //                 <Route exact path="/" component={Mainpage} />
    //                 <Route exact path="/home" component={HomePage} />
    //                 <Route exact path="/sign-up" component={Signup} />
    //                 <Route path="/login" component={Login} />
    //                 <Route 
    //                     path="/admin" 
    //                     render={ props => (
    //                         this.isLoggedIn() ? (  <Admin />  ) :  (  <Login />  )
    //                     )}
    //                 />
    //             </Switch> 
    //         </React.Fragment>
    //     )
    // }

    render(){
        return (
            <React.Fragment>
                {console.log("============>>", routes)}
                <Header />
                <Switch>
                    { routes.map((route) => (
                        <AppRoute 
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                            role={route.role}
                            exact={route.exact}
                        />
                    ))

                    }
                </Switch>   
            </React.Fragment>
        )
        
    }

}

export default App;