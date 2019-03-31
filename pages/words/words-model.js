import { Base } from "../../utils/base";

class Words extends Base {
    constructor(){
        super()
    }
    // 显示单词
    showAll(data,callback){
        const params = {
            url : 'words/showWords',
            sendType : "GET",
            data : {wordsinfo : data},
            callback : callback
        }
        this.request(params)
    }
    //收藏
    collect(data,callback){
        const params = {
            url : 'words/collect',
            sendType : 'GET',
            data : {wordsinfo : data},
            callback : callback
        }
        this.request(params)
    }
    //显示收藏id
    showCollect(data,callback) {
        const params = {
            url : 'words/showcollect',
            sendType : 'GET',
            data : {wordsinfo : data},
            callback : callback
        }
        this.request(params)
    }

    delCollect(data,callback) {
        const params = {
            url : 'words/del',
            sendType : 'GET',
            data : { wordsinfo : data },
            callback : callback
        }
        this.request(params)
    }
}

export { Words }