// pages/musicList/musicList.js
import { MusicList } from './musicList-model'
const musiclist = new MusicList()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData : ["see you again",
    "Blank Space",
    "You Belong With Me",
    "Highway Don't Care",
    "I Knew You Were Trouble",
    "Welcome To New York",
    "Two Is Better Than One",
    "Look What You Made Me Do",
    "Red",
    "Blank Space",
    "We Are Never Ever Getting Back Together",
    "Style",
    "nothing in the world",
    "Shake It Off",
    "Sparks Fly",
    "Babe",
    "Delicate (Seeb Remix)",
    "22",
    "Gorgeous",
    "Back to December",
    "Delicate",
    "Call It What You Want",
    "Enchanted",
    "End Game",
    "Rolling in the Deep",
    "Love Story",
    "Hello",
    "Someone Like You",
    "Set Fire to the Rain",
    "Make You Feel My Love",
    "Chasing Pavements",
    "All I Ask",
    "Water Under the Bridge",
    "Lovesong",
    "Million Years Ago",
    "One and Only",
    "Right As Rain",
    "Rumour Has It",
    "Crazy for You",
    "I Miss You",
    "Daydreamer",
    "He Won't Go",
    "Turning Tables",
    "Remedy",
    "Hometown Glory",
    "Try Everything",
    "Clandestino",
    "She Wolf",
    "Hips Don't Lie",
    "Can't Remember to Forget You",
    "How Do You Do",
    "Underneath Your Clothes",
    "Something",
    "Illegal",
    "Dreams for Plans",
    "The Day and the Time",
    "Timor",
    "Don't Bother",
    "Animal City",
    "Your Embrace",
    "Hey You",
    "Costume Makes the Clown",
    "Chantaje",
    "Perro Fiel",
    "Tik Tok",
    "Timber",
    "Crazy Kids",
    "Die Young",
    "Blow",
    "Take It Off",
    "This Is Me",
    "Your Love Is My Drug",
    "My First Kiss",
    "Praying",
    "Rainbow",
    "Right Round",
    "Supernatural",
    "Animal",
    "Good Old Days",
    "Learn To Let Go",
    "Feels Like Rain",
    "True Colors",
    "Boy Like You",
    "Just One Last Dance",
    "That Girl",
    "Christmas in My Heart",
    "Living to Love You",
    "Love Is Color Blind",
    "Every Moment Of My Life",
    "Bounce",
    "Wait 'til You Hear From Me",
    "From Sarah With Love",
    "Cold As Ice",
    "Still Crazy In Love",
    "He's Unbelievable",
    "Miss U Too Much",
    "You're the Kinda Man",
    "Change",
    "I Just Started Being Bad",
    "French Kissing",
    "A Ride in the Snow",
    "Turn Off the Lights",
    "Sexy as hell",
    "Skin on Skin",
    "I'm Gonna Find You",
    "Carry Me Home",
    "Born To Die",
    "Video Games",
    "Dark Paradise",
    "God Save Our Young Blood",
    "High By The Beach",
    "Old Money",
    "Prisoner",
    "TV In Black And White",
    "West Coast",
    "This Is What Makes Us Girls",
    "Summer Wine",
    "Diet Mountain Dew",
    "Salvatore",
    "Lust for Life",
    "Puppy Love",
    "Love",
    "Blue Velvet",
    "Lost Stars",
    "A Step You Can’t Take Back",
    "Like A Fool",
    "Tell Me If You Wanna Go Home",
    "Coming Up Roses",
    "Faded",
    "The Spectre",
    "Alone",
    "Ignite",
    "All Falls Down",
    "Sing Me to Sleep",
    "Spectre",
    "Routine",
    "Tired",
    "Sky",
    "Baby",
    "Let Me Love You",
    "As Long as You Love Me",
    "What Do You Mean?",
    "Love Yourself",
    "Sorry",
    "Eenie Meenie",
    "Cold Water",
    "I'm the One",
    "Boyfriend",
    "Friends",
    "Love Me",
    "Hard 2 Face Reality",
    "Despacito (DNMO Remix)",
    "Company",
    "Never Say Never",
    "Beauty and a Beat",
    "One Time (Album Version)",
    "All Around the World",
    "Live My Life",
    "Latin Girl",
    "Mistletoe",
    "That Girl",
    "Unpredictable",
    "Wrapped Up",
    "Grow Up",
    "Right Place Right Time",
    "Loud and Clear",
    "Dear Darlin'",
    "Grow Up (Acoustic)",
    "You Don't Know Love",
    "Dance With Me Tonight",
    "Please Don't Let Me Go",
    "Heart Skips A Beat",
    "Kiss Me",
    "If I Stay",
    "Alone Tonight",
    "Seasons",
    "Thinking Of Me",
    "In Case You Didn't Know",
    "Hand On Heart",
    "Never Been Better",
    "Oh My Goodness (Radio Edit)",
    "Shape of You",
    "Perfect",
    "Galway Girl",
    "Thinking Out Loud",
    "Nancy Mulligan",
    "Photograph",
    "Perfect Duet",
    "Don't",
    "I See Fire",
    "Castle on the Hill",
    "Sing",
    "Happier",
    "Be My Forever",
    "Perfect Symphony",
    "Supermarket Flowers",
    "End Game",
    "The A Team",
    "Lego House",
    "What Do I Know?",
    "All of the Stars",
    "Lay It All on Me",
    "Boom Clap",
    "After the Afterparty",
    "bitches",
    "Fancy",
    "Backseat",
  ],
    imgSrc : []
  },

  /**
   * 显示列表
   */
  showMusiclist : function() {
    // wx.request({
    //   url: "http://m.kugou.com/rank/info/?rankid=4681&page=2&json=true",
    //   // data: params.data,
    //   header:{ 'content-type': 'application/x-www-form-urlencoded' },
    //   method: 'GET',
    //   success : (res) => {
    //     const resData = res.data.songs.list[0].hash
    //     console.log(resData)
    //   }
    // })
    let imgSrctemp = []
    const resData = this.data.listData
    resData.forEach(element => {
      imgSrctemp.push(Math.floor(Math.random()*10))
    });
    this.setData({
      imgSrc : imgSrctemp
    })
  },

  /**
   * 跳转
   */
  jump : function(e){
    wx.navigateTo({
      url:"../music/music?musicname=" + e.currentTarget.dataset["musicname"]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showMusiclist()
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