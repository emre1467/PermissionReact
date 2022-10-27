import React from 'react'
import PersonelList from '../pages/PersonelList'
import { Routes, Route, Router } from "react-router-dom"
import Login from '../pages/Login'
import MyPage from '../pages/MyPage'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import MyPermissionList from '../pages/MyPermissionList'
import MyPermissionDetail from '../pages/MyPermissionDetail'
import AdminLogin from '../pages/AdminLogin'
import AdminPage from '../pages/AdminPage'
import PermissionList from '../pages/PermissionList'
import PermissionDetail from '../pages/PermissionDetail'
import AddPermissionForm from '../pages/AddPermissionForm'
export default function Dashboard() {
  return (
    <div>

      <Routes>
        <Route exact  path="/" element={<Login />}></Route>
        <Route exact  path="/adminLogin" element={<AdminLogin />}></Route>


      </Routes>

      <Grid >
        <GridRow >
       <GridColumn width={2}></GridColumn>
          <Grid.Column  width={12}>
            <Routes>
            <Route  path="/myPage/:id" element={<MyPage />}></Route>
            <Route exact path="/myPage/:id/myPermission" element={<MyPermissionList />}></Route>
            <Route exact path="/myPage/:id/myPermission/:idd" element={< MyPermissionDetail />}></Route>
            <Route exact path="/myPage/:id/addPermission" element={< AddPermissionForm />}></Route>

            <Route  path="/adminPage/:id" element={<AdminPage />}></Route>
            <Route  path="/adminPage/:id/permissions" element={<PermissionList />}></Route>
            <Route  path="/adminPage/:id/permissions/:idd" element={<PermissionDetail />}></Route>

            </Routes>
          </Grid.Column>
       <GridColumn width={2}></GridColumn>

        </GridRow>
      </Grid>


    </div>
  )
}
