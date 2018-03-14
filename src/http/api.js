import { post, get } from "./config";

export const subRegisteriPhone = params =>
    post("/znzp/registeruser/subRegisteriPhone.shtml", params);
export const submitLogin = params =>
    post("/znzp/registeruser/submitLogin.shtml", params); //登录
export const forgetPassword = params =>
    post("/znzp/registeruser/forgetPassword.shtml", params); //短信验证
