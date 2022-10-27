import React, { useEffect, useState } from 'react'
import { Header, Icon, Table } from 'semantic-ui-react'
import EmployeeService from '../services/employeeService'

export default function PersonelList() {
  
  const [employees, setEmployees] = useState([])

  useEffect(() => {
      let employeeService = new EmployeeService()
      employeeService.getEmployees().then(result => setEmployees(result.data.data))
  },[])

  
  return (
    <div>
       <div>
            <Header as="h2">
                <Icon name="list alternate outline" />
                <Header.Content>Employee List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee Name</Table.HeaderCell>
                     

                    </Table.Row>
                </Table.Header>

                <Table.Body>{
                    employees.map((employee) => (
                        <Table.Row key={employee.id}>
                            <Table.Cell>{employee.nickName}</Table.Cell>
                       
                        </Table.Row>

                    ))
                }
                </Table.Body>
            </Table>
        </div>
    </div>
  )
}
