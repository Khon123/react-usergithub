/**
 * Created by Sokhon on 12/11/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    render() {
        return (
            <div>
                {this.state.users.map((user, index) =>
                    <h1 key={index}>{user.login}</h1>
                )}
            </div>
        );
    }

    componentDidMount() {
        this.getUsers(this);
    }

    getUsers = (self) => {
        axios.get("https://api.github.com/users").then(function (res) {
            self.setState({users: res.data});
        }).catch(function (error) {
            console.log(error);
        });
    };

}

export default UserList;

