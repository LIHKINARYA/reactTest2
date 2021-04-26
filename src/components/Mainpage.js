import React ,{ Component }from 'react';
import Navbar from './navbar';

const Mainpage = (props) => {  
        return ( 
        <div>
            <Navbar />
            <h1>this.props.username</h1>
        </div> );
}
 
export default Mainpage;

