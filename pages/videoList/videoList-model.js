import { Base } from '../../utils/base'

class Videolist extends Base {
    constructor() {
        super()
    }
    showList(data,callback){
        const params = {
            url : 'scommon/showvideolist',
            sendType : 'GET',
            data : {},
            callback : callback
        }
        this.request(params)
    }
}

export { Videolist }