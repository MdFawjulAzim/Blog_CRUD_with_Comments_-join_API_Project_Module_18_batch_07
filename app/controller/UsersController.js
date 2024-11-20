import { loginService, registerService } from "../service/UserService.js"


//! Register Service
export const register =async (req,res) =>{
    let result = await registerService(req) ;
    res.json(result);
}
//! login Service
export const login =async (req,res) =>{
    let result = await loginService(req) ;
    res.json(result);
}