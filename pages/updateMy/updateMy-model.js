import { Base } from '../../utils/base'

class Updatemy extends Base {
    constructor(){
        super()
    }

    update(data,callback) {
        const params = {
            url : 'scommon/update',
            sendType : 'GET',
            data : { updateinfo : data },
            callback : callback
        }
        this.request(params)
    }
}

export { Updatemy }