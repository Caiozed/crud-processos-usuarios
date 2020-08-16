import axios from "axios"

export default {
    get(){
        return axios.get("/usuarios")
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    },
    add(usuario: any){
        return axios.post("/usuarios", usuario)
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    },
    delete(id: number){
        return axios.delete(`/usuarios/${id}`)
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    },
    update(usuario: any){
        return axios.put("/usuarios", usuario)
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    }
}