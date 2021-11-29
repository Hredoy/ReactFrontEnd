import { LOGIN_USER } from "./types";


const initialState = {
 userData:{
     email:"",
     password:'',
    
 }
};

export default (state = initialState, action) => {
    const {userData} = state
  switch (action.type) {
    case LOGIN_USER:
        const payloadLogin = action.payload;
        return{
            ...userData,
          userData:payloadLogin
        }
    default:
      return state;
  }
};