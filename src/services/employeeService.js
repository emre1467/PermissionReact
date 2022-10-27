import axios from "axios";

export default class EmployeeService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/personel/getall")
    }
    getEmployeesByNickNameandPassword(nickName,password){
        return axios.get("http://localhost:8080/api/personel/getByNickNameandPaswword?nickName="+nickName+"&password="+password)
    }
}