import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Icon, List } from 'semantic-ui-react'

export default function AdminPage() {
    let {id}=useParams()
  return (
    <div style={{marginTop:"50px"}}>
      <h1> Yönetici Sistemine Hoşgeldiniz</h1>
    <List size='big'>
    <List.Content style={{ align: "left" }}>
      <Icon size="small" circular name='user' />
      <Link size="big" style={{ color: "black" }} to={`/adminPage/${id}/permissions`} > İzin Talepleri Listesi  </Link>
    </List.Content>
    <List.Content style={{ align: "left" }}>
          <Icon size="small" circular name='sign-out' />
          <Link size="big" style={{ color: "black" }} to={`/`} > Çıkış Yap   </Link>
        </List.Content>
    
    </List>
</div>
  )
}
