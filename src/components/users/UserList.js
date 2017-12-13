/**
 * Created by Sokhon on 12/11/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import {Card, CardHeader} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }


    render() {

        const style = {
            margin: '50px 300px',
        };
        return (
            <div style={style}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <h1 style={{textAlign: 'center'}}>List users account on gitHub</h1>
                        {this.state.users.map((user, index) =>
                            <Card key={index} style={{margin: '16px'}} expanded={this.state.expanded}>
                                <CardHeader
                                    title={user.login}
                                    subtitle={user.type}
                                    avatar={user.avatar_url}
                                    actAsExpander={true}
                                />
                            </Card>
                        )}
                    </div>
                </MuiThemeProvider>
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

