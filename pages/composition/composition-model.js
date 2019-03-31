import { Base } from '../../utils/base.js'

class Composition extends Base {
  constructor(){
    super()
  }

  showArticle(data,callback){
    const params = {
      url : 'scommon/showarticle',
      data : data,
      sendType : 'GET',
      callback : callback
    }
    this.request(params)
  }


  showList(callback){
    const params = {
      url : 'scommon/showlist',
      data : {},
      sendType : 'GET',
      callback : callback
    }
    this.request(params)
  }
}

export { Composition }