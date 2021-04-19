import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup/signup';

export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin : true,
            showList : false
        }
    }

    render() {
            const userData = this.props.history.location.state?.data
        return ( <>
                     {/* <p>EDIT USER {this.props.match.params.id} </p>
                     <p>EDIT USER {userData} </p> */}

                    <Signup  userdata={userData} action={'edit'}/>
                </>
            )
    }
}