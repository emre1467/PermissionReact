import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button, Card, Form, Grid, Icon, Image } from 'semantic-ui-react';
import * as Yup from "yup";
import AdminService from '../services/adminService';

export default function AdminLogin() {
    const [admins,setAdmins]=useState([])
    const {
        values,
        errors,
        touched,
        handleSubmit,
        handlereset,
        handleChange,
        handleBlur,
        dirty,

    } = useFormik({
        initialValues: {
            nickName: "",
            password: "",
        },
        validationSchema: Yup.object({
            nickName: Yup.string().required("kullanıcı adı giriniz"),
            password: Yup.string().required("şifre giriniz"),
        }),

        onSubmit: (values) => {
        let adminService=new AdminService()
        adminService.getAdminNickNameandPassword(values.nickName,values.password).then(result=>setAdmins(result))
        if(admins.data.success==true){
            window.location.assign(`/adminPage/${admins.data.data[0].adminId}`)
        }
        else if(admins.data.success==false){
            alert("hatalı giriş")
        }
        },
    });
          
    return (
        <div align="center" style={{ marginTop: '150px', fontFamily: 'Josefin Sans' }}>
            <Card widths="equal" style={{ borderRadius: "15px 15px 15px 15px" }} >



                <Card.Content >
                    <Card.Header style={{ marginBottom: "20px" }}>
                        Admin Girişi
                    </Card.Header>
                    <Form onSubmit={handleSubmit} >
                        <Form.Group widths="equal">
                            <Form.Input
                                id="nickName"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nickName}
                                error={
                                    errors.nickName && touched.nickName}
                                label="Kullanıcı Adı"
                                placaholder="nickName giriniz"
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                id="password"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={
                                    errors.password && touched.password}
                                label="Şifre"
                                placaholder="Şifre giriniz"
                            ></Form.Input>
                        </Form.Group>
                        <Button color='green' onSubmit>Giriş Yap</Button>

                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}
