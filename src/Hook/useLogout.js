
import {selectUser,logoutUser} from "../store/features/userSlice"
import { useSelector,useDispatch } from "react-redux";
export const useLogout=()=>{

    const user=useSelector(selectUser);
    const dispatch=useDispatch();



    const logout=()=>{

        
dispatch(logoutUser());
  
        
    }
    return {logout}
}