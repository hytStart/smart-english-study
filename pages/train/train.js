// pages/train/train.js
import { Base } from '../../utils/base'
const train = new Base()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trainData : {},
    answerData0 : "",
    answerData1 : "",
    answerData2 : "",
    answerData3 : "",
    tempRes : [],
    answerDataarray : [] 
  },


  /**
   * 获取题
   */
  getSubject : function(listid) {
    var urlParams = "https://www.yitingting.top/h5edu/smart/json/train/";
    wx.request({
      url: urlParams  + 'trainSubject.json',
      // data: params.data,
      header:{ 'content-type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      success : (res) => {
        const resData = res.data;
        this.setData({
          trainData : resData[listid],
          answerData : resData[listid].answer
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSubject(options.listid);
    this.setData({
      listid : options.listid
    })
  },

  /**
   * 改变radio
   */
  radioChange : function(e) {
    const arrayTemp = this.data.answerDataarray
    const index = e.currentTarget.dataset["tid"]
    const value = e.detail.value
    arrayTemp[index] = value
    this.setData({
      answerDataarray : arrayTemp
    })
  },

  isNull : function(array){
    for(let i=0;i<array.length;i++){
      if(!array[i]){
        return false
      }
    }
  },

  /**
   * 提交试题
   */
  submit : function() {
    const userinfo = wx.getStorageSync("userinfo");
    const res = this.data.answerDataarray
    if(res.length === this.data.answerData.anskey.length && this.isNull(res) != false){
        if(userinfo){
          let resSub = res.join('')
          wx.navigateTo({
            url:"../trainAnswer/trainAnswer?ans=" + resSub + "&listid=" + this.data.listid
          })
        }else{
          wx.redirectTo({
            url: '../login/login',
          })
        }
    }else{
      wx.showModal({
        title: '提示',
        content: '请完成所有题目',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }
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