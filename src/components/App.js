/**
 * Created by RealwatInc on 12/13/2017.
 */
import React, {Component} from 'react';
import {Button} from "react-bootstrap";
class App extends Component {
    render() {
        return (
            <div>
                <Button bsStyle="primary" bsSize="large"
                        onClick={()=>{this.props.history.push('/users');}}
                >
                    Show list users gitHub account
                </Button>
            </div>
        );
    }
}

export default App;