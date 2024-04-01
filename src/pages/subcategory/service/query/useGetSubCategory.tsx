import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetSubCategory=()=>{
    return useQuery({
        queryKey:["subcategory"],
        queryFn:()=> request.get("/api/subcategory/").then((res)=> res.data)
    })
}