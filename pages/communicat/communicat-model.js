import { Base } from "../../utils/base";

class Communicat extends Base {
    constructor(){
        super()
    }
    showAll(callback){
        var params = {
            url : 'scommunicat/showAll',
            sendType : "GET",
            // data : {},
            callback : callback
        }
        this.request(params)
    }
    showMy(data,callback){
        const params = {
            url : 'scommunicat/showMy',
            sendType : "GET",
            data : {userinfo : data},
            callback : callback
        }
        this.request(params)
    }
}

export { Communicat }