import axios from "axios";

export default class AdminService{
    getAdminNickNameandPassword(nickName,password){
        return axios.get("http://localhost:8080/api/admin/getByNickNameandPaswword?nickName="+nickName+"&password="+password)
    }
}