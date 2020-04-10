import React, {Component} from 'react';
import Navbar from "../../components/Navbar";

class Index extends Component {
    static async getInitialProps({query}){
        return  query;
    }


    render() {
        return (
            <div>
                <Navbar/>
               <h1>User {this.props.name} Mofo</h1>
            </div>
        );
    }
}

export default Index;
