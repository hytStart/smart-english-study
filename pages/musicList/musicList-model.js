import { Base } from '../../utils/base'
class MusicList extends Base {
    constructor(){
        super()
    }
    showmusicList(callback){
        var params = {
            url : "scommon/showmusicList",
            sendType : "GET",
            data : {},
            callback : callback
        }
        this.request(params)
    }
}

export { MusicList }