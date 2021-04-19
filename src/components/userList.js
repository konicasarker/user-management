import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";


export default class userList extends React.Component {
    constructor(){
        super()
        this.state = {
            allusers : []
        }
    }

    render() {
            return (
                <div>
                    <div className="container-fluid container ">
                        Hello I am user list
                        {console.log(this.props.users)}
                        {this.props.users.map((item, index) => {
                            return (
                                <div>
                                    <ul>
                                        <li>User Name (from userList component): {item.username}  </li>
                                        <li>Email: {item.email}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
               </div>
            );
        }
}