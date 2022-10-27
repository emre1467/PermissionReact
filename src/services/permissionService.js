import axios from "axios";

export default class PermissionService{
    getPermissions(){
        return axios.get("http://localhost:8080/api/permissionForm/getall")
    }
    getByEmployeeId(id){
        return axios.get("http://localhost:8080/api/permissionForm/getByPersonelId?id="+id)
    }
    getByPermissionId(id){
        return axios.get("http://localhost:8080/api/permissionForm/getByPermissionId?id="+id)
    }
    update(confirm,id){
        return axios.put("http://localhost:8080/api/permissionForm/update?confirm="+confirm+"&id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/permissionForm/add",values)
    }
}