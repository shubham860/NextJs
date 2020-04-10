import React, {Component} from 'react';
import Navbar from "../../components/Navbar";
import axios from 'axios';

class Todo extends Component {

     static async getInitialProps({query}){
        const resp = await axios(`https://jsonplaceholder.typicode.com/todos/${query.id}`);
        return {todo: resp.data}
    }

    render() {
        const { todo } = this.props;
        const {userId, id, title} = todo;
        return (
            <div>
                <Navbar/>
                <h1>User Id - {userId}</h1>
                <h1>Id - {id}</h1>
                <h1>Title - {title}</h1>
            </div>
        );
    }
}

export default Todo;
