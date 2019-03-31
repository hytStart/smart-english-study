// pages/translate/translate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    origin_info : '',
    result_info : ''
  },

  change_origin : function(e){
    const res = e.detail.value
    this.setData({
      origin_info : res,
    })
  },

  translate : function(){
    const temp = this.data.origin_info
    var urlParams = "https://fanyi.youdao.com/openapi.do?keyfrom=f2ec-org&key=1787962561&type=data&doctype=json&version=1.1&q=";
    wx.request({
      url: urlParams + temp,
      // data: params.data,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      success: (res) => {
        const resData = res.data.basic;
        if (resData){
          this.setData({
            result_info: resData.explains[0]
          })
        }else{
          this.setData({
            result_info: 'sorry,暂无该翻译,我们会很快完善'
          })
        }
      }
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