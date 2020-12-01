import React from "react";
import Thumbnail from "./Thumbnail";
import { Row, Col } from "./Grid";

export function EmployeeList(props){
    // console.log(props.employeeRecord.picture.thumbnail);
    let thumbnail = props.employeeRecord.picture.thumbnail;
    if (!props.employeeRecord.picture.thumbnail) {
        thumbnail = "https://via.placeholder.com/150"
    }
    let dateOfBirth = props.employeeRecord.dob.date.slice(0,10);

    return (
        <li className="list-group-item">
                <Row>
                    <Col size="sm-3">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="sm-3">
                        <p>{props.employeeRecord.name.first} {props.employeeRecord.name.last}</p>
                    </Col>
                    <Col size="sm-3">
                        <p>{props.employeeRecord.phone}</p>
                    </Col>
                    <Col size="sm-3">
                        <p>{dateOfBirth}</p>
                    </Col>
                </Row>
        </li>
    )
}