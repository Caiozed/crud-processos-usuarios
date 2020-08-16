import axios from "axios"

export default {
    get(){
        return axios.get("/processos")
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    },
    add(processo: any){
        return axios.post("/processos", processo)
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    },
    delete(id: number){
        return axios.delete(`/processos/${id}`)
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    },
    update(processo: any){
        return axios.put("/processos", processo)
        .then((response)=>{
            return response.data;
        }).catch(err => {console.log(err); return null})
    }
}