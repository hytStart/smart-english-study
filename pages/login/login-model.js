import { Base } from "../../utils/base.js"
class Login extends Base {
    constructor(){
        super()
    }
    showTest(data,callback){
        var params = {
            url : "slogin/login",
            sendType:"GET",
            data:{userinfo:data},
            callback:callback
        }
        this.request(params)
    }
}

export { Login }