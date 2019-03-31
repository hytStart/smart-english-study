// pages/audioList/audioList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioData : [
      {
        title : "2017年12月英语四级听力真题及答案:第1套"
      },{
        title : "2017年6月英语四级听力真题及答案:第1套"
      },{
        title : "2016年12月英语四级听力真题及答案:第1套"
      },{
        title : "2016年6月英语四级听力真题及答案:第1套"
      },{
        title : "2015年12月英语四级听力真题及答案:第1套"
      },{
        title : "2015年6月英语四级听力真题及答案:第1套"
      },{
        title : "2014年12月英语四级听力真题及答案:第1套"
      },{
        title : "2014年6月英语四级听力真题及答案:第1套"
      }
    ],
    imgSrc : []
  },


  jumpDetail : function(e) {
    wx.navigateTo({
      url:"../audioDetail/audioDetail?audioId=" + e.currentTarget.dataset["listid"]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = this.data.audioData
    let imgSrctemp = []
    res.forEach(element => {
      imgSrctemp.push(Math.floor(Math.random()*10))
    });
    this.setData({
      imgSrc : imgSrctemp
    })

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