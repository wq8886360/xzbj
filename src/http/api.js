import { post, get } from "./config";

export const phonecode = params =>
    post("/znzp/registeruser/smsvcode.shtml", params); //短信验证码验证
export const userInformation = params =>
    post("/znzp/registeruser/userpassword.shtml", params); //新用户填写信息
export const amendPassword = params =>
    post("/znzp/registeruser/amendPassword.shtml", params); //修改密码
export const submitLogin = params =>
    post("/znzp/registeruser/mallLogin.shtml", params); //登录
