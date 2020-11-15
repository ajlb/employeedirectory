import React from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import EmployeeTable from "./components/EmployeeTable";

import employeeData from "./employees.json";


function App() {

  return (
    <div>
      <Nav />
      <Jumbotron />
      <EmployeeTable employees={employeeData.results} />
    </div>
    
  );
}

export default App;
