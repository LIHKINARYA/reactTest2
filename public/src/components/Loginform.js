import React,{ useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import  '../components/component.css';

function Loginform({ Login,error}) {

    const [details, setDetails] = useState({username: "" , password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <div >
            <div className="login">
            <Form  onSubmit={submitHandler}>
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="username">Userame:</label>
                    <input type="text" name="username" id="username" onChange={ e => setDetails({...details, username: e.target.value})} 
                    value = {details.username}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={ e => setDetails({...details, password: e.target.value})} 
                    value = {details.password}/>
                </div>

                <Button type="submit">Submit</Button>
            </Form>
            </div>
        </div>
    )
}

export default Loginform
