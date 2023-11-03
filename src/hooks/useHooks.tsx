// import useSWR from "swr";
// import { getStudent, getStudentBags } from "../api/userAPI";
import {useQuery} from '@tanstack/react-query'
import { viewApi } from '../api/taskApi';

// export const useBagHistory = (userID: string) => {
//   const { data, isLoading, mutate } = useSWR(
//     `api/${userID}/view`,
//     () => getStudentBags(userID)
//   );
//   return { data, isLoading, mutate };
// };

export const useViewtask = () =>{
    const {data : tasks, isLoading} = useQuery({
        queryKey: ["view"],
        queryFn : viewApi,
        refetchInterval : 1000
    })

    return {tasks, isLoading}
}