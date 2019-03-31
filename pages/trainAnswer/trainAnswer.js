// pages/train/trainAnswer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answerData : {},
    wrongNum : [], // 错误题目
  },


  /**
   * 获取答案
   */
  getAnswer: function(listid,callback) {
    var urlParams = "https://www.yitingting.top/h5edu/smart/json/train/";
    wx.request({
      url: urlParams  + 'trainSubject.json',
      // data: params.data,
      header:{ 'content-type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      success : (res) => {
        const resData = res.data;
        const answertemp = resData[listid].answer
        this.setData({
          answerData : answertemp
        },callback)
      }
    })
  },

  /**
   * 判断题目显示
   */
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAnswer(options.listid,() => {
      let resArray = []
      const rightStr = this.data.answerData.anskey
      const practice = options.ans
      for(let i=0;i<10;i++){
        if(rightStr[i] !== practice[i]){
          resArray.push(i)
        }
      }

      // 存储错误数组
      const result = []
      for(let i=0;i<resArray.length;i++){
        const resObj = {}
        resObj["num"] = resArray[i] + 1
        resObj["rightans"] = rightStr[resArray[i]]
        resObj["wrongans"] = practice[resArray[i]]
        resObj["explain"] = this.data.answerData.explain[resArray[i]]
        result.push(resObj)
      }
      this.setData({
        wrongNum : result
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