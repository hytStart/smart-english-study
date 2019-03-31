import { Base } from "../../utils/base";

class QuestionCon extends Base {
    constructor(){
        super()
    }
    showQuestion(data,callback){
        const params = {
            url : 'Squestioncon/showQuestion',
            sendType : "GET",
            data : {queinfo : data},
            callback : callback
        }
        this.request(params)
    }
    showAnswer(data,callback){
        const params = {
            url : 'Squestioncon/showAnswer',
            sendType : 'GET',
            data : {ansinfo : data},
            callback : callback
        }
        this.request(params)
    }
    addans(data,callback){
        const params = {
            url : 'Squestioncon/addAnswer',
            sendType : 'GET',
            data  : {addansinfo : data},
            callback : callback
        }
        this.request(params)
    }
}

export { QuestionCon }