import React from "react";
import { Button } from "react-bootstrap";
import { BsFillCloudCheckFill } from "react-icons/bs";
import {BsFillHandThumbsDownFill} from "react-icons/bs"
import './style.css'

const Form = props=>{
    return(
        <div className="container"><br/>
        <h2 className="head1">Search Weather <BsFillCloudCheckFill/> Here <BsFillHandThumbsDownFill/> According To City and Country Name</h2><br/>
        <Button variant="info" className="bt1" size="lg">
            <Button variant="outline-secondary" size="lg">
            <div>{props.error?error():null}</div>
                <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                    </div>
                    <div className="col-md-3">
                    <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
                </form>
            </Button>
        </Button>
        </div>
    );
}

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    );
}

export default Form;