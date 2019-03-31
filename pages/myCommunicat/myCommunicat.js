import { Communicat } from "../communicat/communicat-model";
const question = new Communicat()
// pages/myCommunicat/myCommunicat.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      myCommunicatData : []
  },

  /**
   * 获取我的帖子
   */
  showMyquestion : function(e){
    const userinfo = wx.getStorageSync("userinfo");
    const data = {
      uid : userinfo.uid
    }
    question.showMy(data,(res) => {
      const resData = res.data;
      this.setData({
        myCommunicatData : resData
      })
    })
  },

    /**
   * 问题详情页
   */
  goQuestionCon:(e) => {
    wx.navigateTo({
      url:"../questionCon/questionCon?qid=" + question.getEventData(e,'qid')
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showMyquestion()
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