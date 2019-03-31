// pages/trainList/trainList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trainData : [],
    imgSrc : []
  },

  /**
   * 获取题
   */
  getSubject : function(callback) {
    var urlParams = "https://www.yitingting.top/h5edu/smart/json/train/";
    wx.request({
      url: urlParams  + 'trainSubject.json',
      // data: params.data,
      header:{ 'content-type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      success : (res) => {
        const resData = res.data;
        this.setData({
          trainData : resData,
        },callback)
      }
    })
  },

  jumpDetail : function(e) {
    wx.navigateTo({
      url:"../train/train?listid=" + e.currentTarget.dataset["listid"]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSubject(() => {
      const res = this.data.trainData
      let imgSrctemp = []
      res.forEach(element => {
        imgSrctemp.push(Math.floor(Math.random()*10))
      });
      this.setData({
        imgSrc : imgSrctemp
      })
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