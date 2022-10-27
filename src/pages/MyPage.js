import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Icon, List } from 'semantic-ui-react'

export default function MyPage() {
  let { id } = useParams();

  return (
    <div style={{marginTop:"50px" }}>
      <h1 >İzin Talep Formuna Hoşgeldiniz</h1>
        <List inverted size='big'>
        <List.Content style={{ align: "left" }}>
          <Icon size="small" circular name='unordered list' />
          <Link size="massive" style={{ color: "black" }} to={`/myPage/${id}/myPermission`}> İzin Taleplerim   </Link>
        </List.Content>
        <List.Content style={{ align: "left" }}>
          <Icon size="small" circular name='edit' />
          <Link size="big" style={{ color: "black" }} to={`/myPage/${id}/addPermission`} > İzin Talebi Formu   </Link>
        </List.Content>
        <List.Content style={{ align: "left" }}>
          <Icon size="small" circular name='sign-out' />
          <Link size="big" style={{ color: "black" }} to={`/`} > Çıkış Yap   </Link>
        </List.Content>
        </List>
    </div>
  )
}
