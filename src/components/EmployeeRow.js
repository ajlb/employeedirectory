import React from "react";
import Thumbnail from "./Thumbnail";

function EmployeeRow(props) {
    let thumbnail = props.employeeRecord.picture.thumbnail;
    if (thumbnail === "") {
        thumbnail = "https://via.placeholder.com/150"
    }
    let dateOfBirth = props.employeeRecord.dob.date.slice(0,10);

    return (
        <tr>
            <td><Thumbnail src={thumbnail} /></td>
            <td>{props.employeeRecord.name.first} {props.employeeRecord.name.last}</td>
            <td>{props.employeeRecord.phone}</td>
            <td>{props.employeeRecord.email}</td>
            <td>{dateOfBirth}</td>
        </tr>
    );
}

export default EmployeeRow;