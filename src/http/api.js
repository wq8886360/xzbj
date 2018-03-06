import { post, get } from "./config";

//登录注册模块
export const callback_uri = 'http://v20-wx.shunliandongli.com/#/user/authorise'; //微信回调域名
export const codeList = params => get('/member/register/codeList', params); //推荐人列表