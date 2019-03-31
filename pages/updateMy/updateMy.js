// pages/updateMy/updateMy.js
import { Updatemy } from "./updateMy-model"
const updatemy = new Updatemy()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl : '',
    name : '',
    password : '',
    placePassword : '',
    placeName : ''
  },

  //name改变data
  nameChange : function(e){
    this.setData({
      name : e.detail.value
    })
  },

  //密码改变
  passwordChange : function(e){
    this.setData({
      password : e.detail.value
    })
  },

  //提交
  sumitUpdate : function(){
    const userinfo = wx.getStorageSync("userinfo")
    console.log(this.data.name)
    const data = {
      uname : this.data.name ,
      upassword : this.data.password,
      uid : userinfo.uid,
    }

    if(this.data.name && this.data.password){
      updatemy.update(data,(res) => {
        const resData = res.data
        if(resData === 1){
          wx.showToast({
            icon: "success",
            title: '修改成功',
          })
          wx.switchTab({
            url : '../my/my'
          })
        }else{
          wx.showModal({
            title: '提示',
            content: '修改失败，请重试',
            success: function (res) {
              if (res.confirm) {
                // console.log('用户点击确定')
              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        }
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '请完善信息',
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userinfo = wx.getStorageSync("userinfo");
    if(userinfo){
      this.setData({
        imgurl : userinfo.uimgurl,
        placeName : userinfo.uname,
        placePassword : userinfo.upassword,
        name : userinfo.uname,
        password : userinfo.upassword
      })
    }else{ 
      wx.redirectTo({
        url: '../login/login',
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