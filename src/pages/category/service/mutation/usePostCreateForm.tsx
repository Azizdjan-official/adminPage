import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

interface data {
    title: string,
    image: any;
}
export const usePostCreateForm = ()=>{
    return useMutation({
        mutationKey:["category"],
        mutationFn:(data: data) => request.post("/category/", data, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        } ).then((res)=> res.data)
    })
}
