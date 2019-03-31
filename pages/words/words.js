import { Words } from "./words-model";
const words = new Words()

// pages/words/words.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wordslist : [],
    wordslistData : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','o','p','q','r','s','t','u','v','w','x','y','z'],
    wordsTitle : "Let's recite the words",
    startNum : [0,706,1172,2095,2779,3327,3818,4140,4512,5064,5154,5217,5763,6869,7240,7567,9500,9604,10877,13741,14633,14842,15018,15282,15284,15314],
    pageNo : 0,
    abcIndx : 0,
  },

  /**
   * 获取数据
   */
  getWords : function(index) {
    const start = this.data.startNum[index]
    const startPage = start + (this.data.pageNo * 15)
    const data = {
      start : startPage
    }
    words.showAll(data,(res)=>{
      const resData = res.data;
      this.setData({
        wordsTitle : this.data.wordslistData[index]
      })

      const userinfo = wx.getStorageSync("userinfo")
      const data = {
        c_uid : userinfo.uid
      }
      const wordslist = resData
      let tempData = []
      words.showCollect(data,(res) => {
        const resData2 = res.data
        let tempArray = []
        if(resData2){
          resData2.forEach(element => {
            tempArray.push(element['c_wid'])
          })
        }
        wordslist.forEach(element => {
          if(tempArray.indexOf(element["ID"]) !== -1){
            element['flag'] = "exist"
          }else{
            element['flag'] = ""
          }
          tempData.push(element)              
        });
        this.setData({
          wordslist : tempData
        })
      })

    })
  },

  /**
   * before 前一页
   */
  before : function(){
    let current = this.data.pageNo === 0 ? 0 : (this.data.pageNo - 1)
    this.setData({
      pageNo : current
    })
    this.getWords(this.data.abcIndx)
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0,
    })
  },

   /**
   * after 后一页
   */
  after : function(){
    let current = this.data.pageNo + 1
    this.setData({
      pageNo : current
    })
    this.getWords(this.data.abcIndx)
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      abcIndx : options.wordsindex
    })
    this.getWords(options.wordsindex)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  collectWords:function(e) {
    const ID = words.getEventData(e,'wid');
    const flag = words.getEventData(e,'flag');
    const userinfo = wx.getStorageSync("userinfo");
    if(userinfo){
      if(flag !== 'exist'){
        const data  = {
          c_wid : ID,
          c_uid : userinfo.uid
        };
        words.collect(data,(res) => {
          if(res.data){
            wx.showToast({
              icon: "success",
              title: '收藏成功',
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '收藏失败',
              success: function (res) {
                if (res.confirm) {
                  // console.log('用户点击确定')
                } else if (res.cancel) {
                  // console.log('用户点击取消')
                }
              }
            })
          }
          this.getWords(this.data.abcIndx)
        })
      }else{
        const data  = {
          c_wid : ID,
          c_uid : userinfo.uid
        };
        words.delCollect(data,(res) => {
          if(res.data){
            //删除
            wx.showToast({
              icon: "success",
              title: '删除成功',
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '删除失败',
              success: function (res) {
                if (res.confirm) {
                  // console.log('用户点击确定')
                } else if (res.cancel) {
                  // console.log('用户点击取消')
                }
              }
            })
          }
          this.getWords(this.data.abcIndx)
        })
      }
    }else{
      wx.redirectTo({
        url: '../login/login',
      })
    }
  }
})