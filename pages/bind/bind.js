// pages/bind/bind.js
const app = getApp()
import { Bind } from './bind-model'
const bind = new Bind()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo: {},
      hasUserInfo: false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      phone:'',
      password:'',
      WarningText:'',
      phoneFlag : false,
      passwordFlag : false
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  //手机号改变
  bindPhoneinput : function(e){
    var phoneNum = e.detail.value;
    const reg = /^1[3|4|5|7|8]\d{9}$/;
    var lastPhone;
    if(reg.test(phoneNum)){
      const data = {
        phone : phoneNum
      }
      bind.isPhone(data,(res) => {
        const resData = res.data
        if(resData){
          lastPhone = '该手机号已被注册';
          this.setData({
            WarningText : lastPhone,
            phoneFlag : false            
          })
        }else{
          lastPhone = '';
          this.setData({
            WarningText : lastPhone,
            phoneFlag : true            
          })
        }
      })
    }else{
      lastPhone = '手机号输入错误';
      this.setData({
        WarningText : lastPhone,
        phoneFlag : false            
      })
    }
    this.setData({
      phone : phoneNum,
    })
  },
  //密码改变
  bindPasswordinput : function(e){
    if(e.detail.value){
      console.log(e.detail.value)
      this.setData({
        password:e.detail.value,
        passwordFlag : true
      })
    }
  },

  //注册
  bind : function() {
    const globalUserinfo = app.globalData.userInfo
    if(globalUserinfo){
      var data = {
        phone: this.data.phone,
        password: this.data.password,
        uimgurl : globalUserinfo.avatarUrl,
        uname : globalUserinfo.nickName
      }
      if(this.data.phoneFlag && this.data.passwordFlag){
        bind.bindUser(data,(res) => {
          if(res.data){
            wx.navigateTo({
              url: '../login/login',
            })
          }
        })
      }else{
        wx.showModal({
          title: '提示',
          content: '手机号或密码不能为空,或者手机号已被注册',
          success: function (res) {
            if (res.confirm) {
              // console.log('用户点击确定')
            } else if (res.cancel) {
              // console.log('用户点击取消')
            }
          }
        })
      }
    }else{
      wx.showModal({
        title: '提示',
        content: '请先获取微信头像',
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

  gotoLogin : function() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  gotoYouke : function() {
    wx.switchTab({
      url: '../homePage/homePage',
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
  
  }
})