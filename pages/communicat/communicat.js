import { Communicat } from "./communicat-model";
const question = new Communicat()
// pages/communicat/communicat.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    selected:true,
    selected1:false,
    allQuestion : [],
    myQuestion : []
  },
  /**
   * 添加问题页
   */
  goAddquestion:(e) => {
    wx.navigateTo({
      // url: "../question/question?qid=" + question.getEventData(event, 'qid')
      url:"../addQuestion/addQuestion"
    })
  },
  /**
   * 问题详情页
   */
  goQuestionCon:(e) => {
    wx.navigateTo({
      url:"../questionCon/questionCon?qid=" + question.getEventData(e,'qid')
    })
  },
  
  /**
   * 加载全部问题
   */
  showAllquestion : function(){
    question.showAll((res) => {
      var resData = res.data;
      this.setData({
        allQuestion : resData
      })
    })
  },

  /**
   * 加载个人问题
   * 
   */
  showMyquestion : function(){
    const userinfo = wx.getStorageSync("userinfo");
    const data = {
      uid : userinfo.uid
    }
    question.showMy(data,(res) => {
      const resData = res.data;
      this.setData({
        myQuestion : resData
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showAllquestion();
    this.showMyquestion();
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
    this.showAllquestion();
    this.showMyquestion();
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
    this.showAllquestion();
    this.showMyquestion();
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
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {  

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  selected:function(e){
      this.setData({
          selected1:false,
          selected:true
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0,
      })
  },
  selected1:function(e){
      this.setData({
          selected:false,
          selected1:true
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 0,
      })
  }
})