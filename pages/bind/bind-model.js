import { Base } from "../../utils/base.js"
class Bind extends Base {
    constructor(){
        super()
    }
    bindUser(data,callback){
        var params = {
            url : "slogin/bind",
            sendType:"GET",
            data:{userinfo:data},
            callback:callback
        }
        this.request(params)
    }
    isPhone(data,callback){
        var params = {
            url : "slogin/isPhone",
            sendType : "GET",
            data : {phoneinfo : data},
            callback : callback
        }
        this.request(params)
    }
}

export { Bind }