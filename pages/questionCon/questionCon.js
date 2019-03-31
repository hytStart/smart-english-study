import { QuestionCon } from "./questionCon-model";
const questioncon = new QuestionCon();
// pages/questionCon/questionCon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionconData : [],  //问题数据源
    answerData : [] ,       //评论数据源
    answerCon : '',  // 添加评论内容
    pageQid : '', // 问题id
    commentState : false,  // 是否显示评论模态框
  },
  clo : function(){
    this.setData({
      commentState : false
    })
  },

  /**
   * 问题
   */
  showQue(id){
    const data = {
      qid : id
    }
    questioncon.showQuestion(data,(res) => {
      const resData = res.data;
      this.setData({
        questionconData : resData
      })
    })
  },

  /**
   * 答案
   */
  showAns(id){
    const data = {
      as_qid : id,
    }
    questioncon.showAnswer(data,(res) => {
      const resData = res.data;
      this.setData({
        answerData : resData
      })
    })
  },

  bindta : function(e){
    this.setData({
      answerCon : e.detail.value
    })
  },


  /**
   * 显示判断
   */
  showComment : function(e) {
    const pageQ_uid = questioncon.getEventData(e,'q_uid');
    const storageUid = wx.getStorageSync("userinfo").uid;
    if(pageQ_uid === storageUid){
      this.setData({
        commentState : false
      })
      wx.showModal({
        title: '提示',
        content: '不可对自己问题评论',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    }else{
      this.setData({
        commentState : true
      })
    }
  },
  /**
   * 添加评论
   */
  addAnswer(){
    const userinfo = wx.getStorageSync("userinfo");
    const data = {
      as_qid : this.data.pageQid,
      as_uid : userinfo.uid,
      ascontent : this.data.answerCon
    };
    questioncon.addans(data,(res) => {
      const resData = res.data;
      if(resData){
        wx.showToast({
          icon: "success",
          title: '评论成功',
        })
        this.setData({
          commentState : false
        })
        this.showAns(this.data.pageQid);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pageQid : options.qid
    });
    this.showQue(options.qid);
    this.showAns(options.qid);
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