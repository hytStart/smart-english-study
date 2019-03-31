// pages/videoDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      videoData:{
        title:"Agents of S.H.I.E.L.D.",
        introduction:"《Agents of S.H.I.E.L.D.》is a real life science fiction series, a part of the cosmology of the marvel film, which is directed by the Avengers union director Jose Weiden's handheld mirror navigation set, and Jose Weiden, his brother Jade Weiden and his brother - in law Malisa Tacharon are involved in the script creation.",
        link:"../../video/SHIELD.mp4"
      },
      selected:true,
      selected1:false
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
  
  },

  selected:function(e){
    this.setData({
        selected1:false,
        selected:true
    })
  },
  selected1:function(e){
      this.setData({
          selected:false,
          selected1:true
      })
  }
})