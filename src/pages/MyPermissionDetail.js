import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header, Icon, Table } from 'semantic-ui-react'
import PermissionService from '../services/permissionService'

export default function MyPermissionDetail() {
  let {idd}=useParams()
  const [permissions,setPermissions]=useState([])
  useEffect(() => {
    
    let permissionService=new PermissionService()
    permissionService.getByPermissionId(idd).then(result=>setPermissions(result.data.data))
      
  }, [])
  
    return (
    <div style={{marginTop:"30px"}} >
      <Header as="h2">
            <Icon name="list alternate outline" />
            <Header.Content>İzin Taleplerim</Header.Content>
        </Header>
        <Table color='green' celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Başlangıç Zamanı</Table.HeaderCell>
                    <Table.HeaderCell>Bitiş Zamanı</Table.HeaderCell>
                    <Table.HeaderCell>İzin Gün Sayısı</Table.HeaderCell>
                    <Table.HeaderCell>Onay Durumu</Table.HeaderCell>
                 

                </Table.Row>
            </Table.Header>

            <Table.Body>{
                permissions.map((permission) => (
                    <Table.Row key={permission.id}>
                        <Table.Cell>{permission.startDate}</Table.Cell>
                        <Table.Cell>{permission.endDate}</Table.Cell>
                        <Table.Cell>{permission.permissionDay}</Table.Cell>
                        <Table.Cell>{permission.confirm}</Table.Cell>

                   
                    </Table.Row>

                ))
            }
            </Table.Body>
        </Table>
    </div>
  )
}
