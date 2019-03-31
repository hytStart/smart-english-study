import { Base } from "../../utils/base";

class MyWords extends Base {
    constructor(){
        super()
    }
    showMy(data,callback){
        const params = {
            url : 'Smywords/showmywords',
            sendType : 'GET',
            data : {mywordsinfo : data},
            callback : callback
        }
        this.request(params)
    }

    del(data,callback){
      const params = {
        url : 'smywords/delco',
        sendType : 'GET',
        data : {delwordsinfo : data},
        callback : callback
      }
      this.request(params)
    }
}

export { MyWords }