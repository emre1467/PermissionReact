import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Header, Icon, Tab, Table } from 'semantic-ui-react'
import PermissionService from '../services/permissionService'

export default function () {
    let { idd } = useParams()
    const [permission, setPermission] = useState([])
    useEffect(() => {

        let permissionService = new PermissionService()
        permissionService.getByPermissionId(idd).then(result => setPermission(result.data.data))
    }, [])




    function Onayla() {
        let permissionService = new PermissionService()
        permissionService.update("Onaylandı", idd)
        alert("İzin Talebi onaylandı")
    }
    function Reddet() {
        let permissionService = new PermissionService()
        permissionService.update("Onaylanmadı", idd)
        alert("İzin Talebi reddedildi")
    }
    return (
        <div style={{ marginTop: "30px" }}>
            <Header as="h2">
                <Icon name="info circle" />
                <Header.Content>İzin Talep Bilgileri</Header.Content>
            </Header>
            <Table color='red'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Başlangıç Zamanı</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Zamanı</Table.HeaderCell>
                        <Table.HeaderCell>İzin Gün Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Onay Durumu</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>
                <Table.Body>{
                    permission.map((permission) => (
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
            <Button onClick={Reddet} color='red'>Reddet</Button>

            <Button onClick={Onayla} color='green'>Onayla</Button>

        </div>
    )
}
