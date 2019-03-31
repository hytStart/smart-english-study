import { Addquestion } from "./addQuestion.model";
const addquestion = new Addquestion()
// pages/addQuestion/addQuestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title : '',
    content : ''
  },

  //title改变
  bindtitleinput : function(e){
    this.setData({
      title : e.detail.value
    })
  },
  //content改变
  bindcontentinput : function(e){
    this.setData({
      content : e.detail.value
    })
  },

  //添加帖子
  add : function(){
    const userinfo = wx.getStorageSync("userinfo");
    if(userinfo){
        const data = {
          qtitle : this.data.title,
          qcontent : this.data.content,
          q_uid : userinfo.uid
        };
        addquestion.add(data,(res) => {
          if(res.data){
            wx.showToast({
              icon: "success",
              title: '发帖成功',
            })
            wx.switchTab({
              url: '../communicat/communicat',
            });
          }
        });
    }else{
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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