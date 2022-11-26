import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firebaseAuth } from "../constants/firebaseConfig";
import { useAppDispatch } from "../store";
import { setIsBusy } from "../store/appSlice";

class authService {
    constructor() {

    }

    static async UserLogin(userQuery: {email:string, password: string}) {
        var user: UserCredential = await signInWithEmailAndPassword(firebaseAuth,userQuery.email, userQuery.password)
        return user.user;
    }


    static async doLogin_test(email:string, password: string){
        const res = await this.UserLogin({email: email, password: password});
        console.log("[+] [OK] doLogin_test: " + JSON.stringify(res));
        return res;
    }

}


export default authService;


