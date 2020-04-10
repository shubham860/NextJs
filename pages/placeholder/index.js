import React, {Component} from 'react';
import Navbar from '../../components/Navbar'
import axios from 'axios';
import Link from "next/link";

class Index extends Component {

    static async getInitialProps(props){
        const response = await axios('https://jsonplaceholder.typicode.com/todos');
        return  {dopa : response.data}
    }

    render() {
        const { dopa } = this.props;
        return (
            <div>
                <Navbar/>
                {
                    dopa.map((item,index) => <Link href={`/placeholder/Todo?id=${item.id}`} as={`/placeholder/${item.id}`} ><a key={index}>{item.title}</a></Link>)
                }
            </div>
        );
    }
}

export default Index;
