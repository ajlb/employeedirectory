import React, { useState, useEffect } from "react";
// import EmployeeRow from "./EmployeeRow";
import NameSortLink from "./NameSortLink";
import NameFilterInput from "./NameFilterInput";
import compareNames from "../utils/compareNames";
import { EmployeeList } from "./EmployeeList";
import { Container, Row, Col } from "./Grid";

function EmployeeTable(props) {
    let employeeRecords = props.employees.slice(0);
    const [filteredEmployees, setFilteredEmployees] = useState(props.employees);
    const [sortedEmployees, setSortedEmployees] = useState(filteredEmployees);
    const [filterState, setFilterState] = useState("");
    const [sortDirection, setSortDirection] = useState(1);

    employeeRecords.sort(compareNames(1));

    // Use effect goes from useEffect to componentDidMount (for startup)
    // and your change function for each update
    useEffect(function () {
        let filteredRecords = props.employees;
        if (filterState !== '') {
            filteredRecords = props.employees
                .filter(employeeRecord => {
                    return employeeRecord.name.first.startsWith(filterState)
                        || employeeRecord.name.last.startsWith(filterState)
                        || employeeRecord.name.first.toLowerCase().startsWith(filterState)
                        || employeeRecord.name.last.toLowerCase().startsWith(filterState);
                });
        }
        setFilteredEmployees(filteredRecords);
    }, [props.employees, filterState]);

    useEffect(function () {
        const filteredEmployeesCopy = filteredEmployees.slice(0);
        filteredEmployeesCopy.sort(compareNames(sortDirection));
        setSortedEmployees(filteredEmployeesCopy);
    }, [filteredEmployees, sortDirection]);

    // These stay basically the same. They just use this.setState
    function onFilterChange(event) {
        const { value } = event.target;
        setFilterState(value);
    }
    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                    <NameFilterInput filterState={filterState} onFilterChange={onFilterChange}></NameFilterInput>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col size="sm-3">
                        <h3>Image</h3>
                    </Col>
                    <Col size="sm-3">
                        <h3><NameSortLink toggleSortDirection={toggleSortDirection} /></h3>
                    </Col>
                    <Col size="sm-3">
                        <h3>Phone</h3>
                    </Col>
                    <Col size="sm-3">
                        <h3>DOB</h3>
                    </Col>
                </Row>
            {/* <HeaderRow> */}
                <ul className="list-group">
                    {
                        sortedEmployees.map(employeeRecord =>
                            <EmployeeList employeeRecord={employeeRecord} key={employeeRecord.id.value} />
                        )
                    }
                    {/* {
                        employeeRecords.map(employeeRecord =>
                            <EmployeeList employeeRecord={employeeRecord} key={employeeRecord.id.value} />)
                    } */}
            {/* </HeaderRow> */}
            </ul>
        </Container>
    </div>
    )
}

export default EmployeeTable;