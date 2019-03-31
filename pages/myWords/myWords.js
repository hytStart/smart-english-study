import { MyWords } from "./myWords-model.js";
const mywords = new MyWords();
// pages/myWords.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageMywords : []
  },

  /**
   * 获取收藏单词
   */
  getCollectWords : function(){
    const userinfo = wx.getStorageSync("userinfo");
    const data = {
      c_uid : userinfo.uid
    };
    mywords.showMy(data,(res) => {
      this.setData({
        pageMywords : res.data
      })
    })
  },

  delcollectWords : function(e){
    const ID = mywords.getEventData(e, 'wid');
    const userinfo = wx.getStorageSync("userinfo");
    const data = {
      c_wid : ID,
      c_uid : userinfo.uid
    }
    mywords.del(data,(res) => {
      const resData = res.data;
      if(resData === 1){
        this.getCollectWords()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCollectWords()
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
  
  }
})