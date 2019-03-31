// pages/audioDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      audioData : {},
      questionOne : [],
      questionTwo : [],
      questionThree : [],
      questionFour : [],
      questionFive : [],
      questionSix : [],
      questionSeven : [],
      questionEight : [],
      answer : '',
      explain : [],
      condition : false,
      oneOrtwo : true
  },

  /**
   * 获取题目
   */
  getAudio : function(id) {
    if(id < 4){
      var urlParams = "https://www.yitingting.top/h5edu/smart/json/audio/";
      wx.request({
        url: urlParams  + 'audioSubject'+id+'.json',
        // data: params.data,
        header:{ 'content-type': 'application/x-www-form-urlencoded' },
        method: 'GET',
        success : (res) => {
          const resData = res.data;
          console.log(resData)
          this.setData({
            audioData : resData,
            questionOne : resData.content.slice(0,2),
            questionTwo : resData.content.slice(2,4),
            questionThree : resData.content.slice(4,7),
            questionFour : resData.content.slice(7,11),
            questionFive : resData.content.slice(11,15),
            questionSix : resData.content.slice(15,18),
            questionSeven : resData.content.slice(18,21),
            questionEight : resData.content.slice(21,25),
            answer : resData.answer,
            explain : resData.explain,
            oneOrtwo : true
          })
        }
      })
    }else{
      var urlParams = "https://www.yitingting.top/h5edu/smart/json/audio/";
      wx.request({
        url: urlParams  + 'audioSubject'+id+'.json',
        // data: params.data,
        header:{ 'content-type': 'application/x-www-form-urlencoded' },
        method: 'GET',
        success : (res) => {
          const resData = res.data;
          console.log(resData)
          this.setData({
            audioData : resData,
            questionOne : resData.content.slice(0,8),
            questionTwo : resData.content.slice(8,12),
            questionThree : resData.content.slice(12,15),
            questionFour : resData.content.slice(15,18),
            questionFive : resData.content.slice(18,21),
            questionSix : resData.content.slice(21,25),
            // questionSeven : resData.content.slice(18,21),
            // questionEight : resData.content.slice(21,25),
            answer : resData.answer,
            explain : resData.explain,
            oneOrtwo : false
          })
        }
      })
    }
  },

  showAnswer : function() {
    this.setData({
      condition : !(this.data.condition)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAudio(options.audioId)
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