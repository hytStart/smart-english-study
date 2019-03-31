// pages/wordsList/wordsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      wordslistData : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','o','p','q','r','s','t','u','v','w','x','y','z']
  },

  gotoWords : function(e) {
    const wordsindex = e.currentTarget.dataset["wordsindex"]
    wx.navigateTo({
      url:"../words/words?wordsindex=" + wordsindex
    })
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