import { Base } from "../../utils/base"

class Music extends Base {
    constructor(){
        super()
    }

    showMusic(data,callback) {
        var params = {
            url : "scommon/showmusic",
            sendType : 'GET',
            data : { musicinfo : data },
            callback : callback
        }
        this.request(params)
    }
}

export { Music }