// pages/music/music.js
import { Music } from './music-mode';
const music = new Music();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicData : {},
    musicname : '',
    geci : ''
  },

  /**
   * 获取music
   */
  getMusic : function(name) {
    wx.request({
      url: "https://www.yitingting.top/h5edu/smart/thinkphp-3.2/api/scommon/getMusic",
      data: {name : name},
      header:{ 'content-type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      success : (res) => {
        const resData = res.data.data.info[0]['320hash'];
        wx.request({
          url: "https://www.yitingting.top/h5edu/smart/thinkphp-3.2/api/scommon/getMusicbyhash",
          data: {hash :resData},
          header:{ 'content-type': 'application/x-www-form-urlencoded' },
          method: 'GET',
          success : (res) => {
            const resTwo = res.data
            this.setData({
              musicData : resTwo
            })
          }
        })
        wx.request({
          url: "https://www.yitingting.top/h5edu/smart/thinkphp-3.2/api/scommon/getGeci",
          data: {name : name,hash : resData},
          header:{ 'content-type': 'application/x-www-form-urlencoded' },
          method: 'GET',
          success : (res) => {
            const resThree = res.data
            this.setData({
              geci : resThree
            })
          }
        })
      }
    })
    // var urlParams = "http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword="+name+"&page=1&pagesize=1";
    // wx.request({
    //   url: urlParams,
    //   // data: params.data,
    //   header:{ 'content-type': 'application/x-www-form-urlencoded' },
    //   method: 'GET',
    //   success : (res) => {
    //     const resData = res.data.data.info[0]['320hash'];
    //     wx.request({
    //       url: "http://m.kugou.com/app/i/getSongInfo.php?hash="+resData+"&cmd=playInfo",
    //       // data: params.data,
    //       header:{ 'content-type': 'application/x-www-form-urlencoded' },
    //       method: 'GET',
    //       success : (res) => {
    //         const resTwo = res.data
    //         this.setData({
    //           musicData : resTwo
    //         })
    //       }
    //     })
    //     wx.request({
    //       url: "http://m.kugou.com/app/i/krc.php?cmd=100&keyword="+this.data.musicname+"&hash="+resData+"&timelength=246000&d=0.5261128980200738",
    //       // data: params.data,
    //       header:{ 'content-type': 'application/x-www-form-urlencoded' },
    //       method: 'GET',
    //       success : (res) => {
    //         const resThree = res.data
    //         this.setData({
    //           geci : resThree
    //         })
    //       }
    //     })
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const musicname = options.musicname
    this.setData({
      musicname : musicname
    })
    this.getMusic(musicname)
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