import { Base } from "../../utils/base";

class Addquestion extends Base {
    constructor(){
        super()
    }

    add(data,cb){
        var params = {
            url : 'scommunicat/addQuestionapi',
            sendType : 'GET',
            data : {addinfo : data},
            callback : cb
        }
        this.request(params)
    }
}

export { Addquestion }