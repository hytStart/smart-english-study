// pages/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageArticle : {},
    showState : true
  },

  getArticle : function(tag){
    if((tag === 'duanwen' )|| (tag === 'tingli')){
      this.setData({
        showState : false
      })
    }else{
      this.setData({
        showState : true
      })
    }
    var urlParams = "https://www.yitingting.top/h5edu/smart/json/article/";
    wx.request({
      url: urlParams + tag + '.json',
      // data: params.data,
      header:{ 'content-type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      success : (res) => {
        const resData = res.data;
        this.setData({
          pageArticle : resData
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle(options.pageType)
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