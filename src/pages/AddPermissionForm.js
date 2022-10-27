import React, { useEffect } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Button, Card, Form } from 'semantic-ui-react';
import PermissionService from '../services/permissionService';
import { useParams } from 'react-router';

export default function () {
    let {id}=useParams()
    useEffect(() => {

    }, [])

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
            confirm: "Onaylanmayı bekliyor",
            endDate: "",
            startDate: "",
            permissionDay:"",
            personel:{personelId:id}
        },
        validationSchema: Yup.object({
            startDate: Yup.date().required("Başlangıç tarihi giriniz"),
            endDate: Yup.date().required("Bitiş tarihi giriniz"),
            permissionDay: Yup.number().required("İzin gün sayısını giriniz")
        }),

        onSubmit: (values) => {
        },

    });
    function add(){
        console.log(values)
        let permissionService=new PermissionService()
        permissionService.add(values).then(result=>alert("İzin Talebi oluşuruldu"))
    }
    return (
        <div align="center" style={{ marginTop: "150px" }}>
            <Card widths="equal" style={{ borderRadius: "15px 15px 15px 15px" }} >

                <Card.Content>
                    <Card.Header  style={{marginBottom: "20px",marginTop:"30px"}}>İzin Talep Formu</Card.Header>
                    <Form onSubmit={handleSubmit} align="center">
                        <Form.Group align="center">
                            <Form.Input
                            style={{marginLeft:"40px"}}
                                id="startDate"
                                type="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.startDate}
                                error={
                                    errors.startDate && touched.startDate}
                                label="Başlangıç Tarihi"
                                placaholder="Başlangıç tarihi giriniz"
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                            style={{marginLeft:"40px"}}

                                id="endDate"
                                type="date"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.endDate}
                                error={
                                    errors.endDate && touched.endDate}
                                label="Bitiş Tarihi"
                                placaholder="Bitiş tarihi giriniz"
                            ></Form.Input>
                        </Form.Group>
                        <Form.Group align="center"  style={{marginLeft:"30px"}}>
                            <Form.Input
                           

                                id="permissionDay"
                                type="number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.permissionDay}
                                error={
                                    errors.permissionDay && touched.permissionDay}
                                label="İzin Gün Sayısı"
                                placaholder="İzin gün sayısı giriniz"
                            ></Form.Input>
                        </Form.Group>
                        <Button color='green' onClick={add}>Oluştur</Button>
                    </Form>

                </Card.Content>
            </Card>
        </div>
    )
}
