import React, {Component} from 'react';
import Navbar from '../../components/Navbar'
import axios from 'axios';

class Index extends Component {

    static async getInitialProps(){
        const response = await axios('https://jsonplaceholder.typicode.com/todos');
        return  {todos : response.data}
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar/>

            </div>
        );
    }
}

export default Index;
