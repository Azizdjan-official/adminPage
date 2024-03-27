import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

interface data {
    phone_number: string,
    password:string;
}
export const useLogin = ()=>{
    return useMutation({
        mutationKey:["login"],
        mutationFn:(data: data) => request.post<{token: string}>("/api/admin-login/", data ).then((res)=> res.data)
    })
}
