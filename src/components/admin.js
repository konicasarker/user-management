import React from "react";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import UserTableList from "./userTable/userTableList";
import axios from 'axios';

export default class Admin extends React.Component {
    constructor(){
        super()
        this.state = {
            allusers : [],
            updateList : false,
        }
    }


    handleDelete = (row) =>{
        alert("Hello !! you have clicked Delete")
        console.log(">>>>",row)
        axios.post('http://localhost:8000/app/deleteuser', {"_id" : row._id , "email" : row.email})
                .then(response => {
                        console.log(response.status)
                        if(response.status===200) 
                        {
                            this.setState({allusers : this.state.allusers.filter(item => item._id !== row._id)})
                        }
                    })
    }

    componentDidMount() {
        if(this.state.allusers.length === 0){
            fetch("http://localhost:8000/app/users")
            .then(response =>response.json())
            .then(data => {
                console.log("All users = ", data)
                this.setState({
                    allusers : data
                })
            })
        }
    }

    render() {
            return (
            <div className="container-fluid container ">
                {/* <UserList users={this.state.allusers}/>
                <p> 2nd table</p> */}
                <UserTableList users={this.state.allusers} updateAfterDelete={this.updateAfterDelete} handleDelete = {this.handleDelete}/>
            </div>
            );
        }
}