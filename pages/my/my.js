// pages/my/my.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myData:[
      {
        logo:"https://www.yitingting.top/h5edu/smart/images/my/wordsSelect.png",
        title:"收藏单词",
        more:"https://www.yitingting.top/h5edu/smart/images/my/more.png",
        jumpFlag : "myWords"
      },{
        logo:"https://www.yitingting.top/h5edu/smart/images/my/tiezi.png",
        title:"我的帖子",
        more:"https://www.yitingting.top/h5edu/smart/images/my/more.png",
        jumpFlag : "myCommunicat"
      }
      // ,{
      //   logo:"../../images/my/tiku.png",
      //   title:"已完成题库",
      //   more:"../../images/my/more.png",
      //   jumpFlag : ""
      // }
    ]
  },

  jump : function(e){
    const userinfo = wx.getStorageSync("userinfo");
    if(userinfo){
      wx.navigateTo({
        url : `../${e.currentTarget.dataset['jumpdata']}/${e.currentTarget.dataset['jumpdata']}`
      })
    }else{
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },
  // 前往修改个人信息 
  gotoUpdate : function(){
    wx.navigateTo({
      url : '../updateMy/updateMy'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
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
    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})