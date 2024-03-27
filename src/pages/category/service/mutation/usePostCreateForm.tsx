import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";


export const usePostCreateForm = ()=>{
    return useMutation({
        mutationKey:["category"],
        mutationFn:(data: FormData) => request.post("/category/", data, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        } ).then((res)=> res.data)
    })
}
