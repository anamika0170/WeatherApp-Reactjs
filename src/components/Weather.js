import React from "react";
import { Card, ListGroupItem, ListGroup,Spinner } from "react-bootstrap";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import "weather-icons/css/weather-icons.css";
import '../components/style.css'
const Weather = (props) => {
  return (
    <div className="container"><hr/><hr/>
      <h1 className="head1">Weather App</h1><hr/><hr/>
      <Card className="text-center">
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`}></i>
        </h5>
        <Card.Body>
          <Card.Title>
            {/* <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner> */}
          </Card.Title>
          <Card.Text>
            {props.temp_celsius ? <h1>{props.temp_celsius}&deg;</h1> : null}
            {minmaxTemp(props.temp_min, props.temp_max)}
          </Card.Text>
        </Card.Body>
        <h4 className="py-3">{props.description}</h4>
        <div>
          <Card className="text-center">
            <Card.Body>
              <h1>{props.city}</h1>
            </Card.Body>
          </Card>
        </div>
      </Card>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
export default Weather;
