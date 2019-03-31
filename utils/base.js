class Base{
    constructor(){ };
    request(params){
        var urlParams = "https://www.yitingting.top/h5edu/smart/thinkphp-3.2/api/";
        wx.request({
            url: urlParams + params.url,
            data: params.data,
            header:{ 'content-type': 'application/x-www-form-urlencoded' },
            method: params.sendtype,
            success:function(res){
                params.callback(res)
            },
        })
    };
    getEventData(data, tag) {
      return data.currentTarget.dataset[tag];
    };
    saveimg(params) {
        var userinf=[];
        wx.showToast({
          icon: "loading",
          title: "正在上传"
        }),
        wx.uploadFile({
            url: "https://www.yitingting.top/h5edu/moyu/thinkphp-3.2/api/login/saveimg?email=" + params.email,
            filePath: params.path[0],
            name: 'photo',
            header: { "Content-Type": "multipart/form-data" },
            success: function (res) {
              if (res.statusCode != 200) {
                wx.showModal({
                  title: '提示',
                  content: '上传失败',
                  showCancel: false
                })
                return;
              }
              else {
                params.callback(res)
              }
    
              var data = res.data
              userinf['img_url'] = data["img_url"];
              wx.setStorageSync("userinf", userinf);
            },
            fail: function (e) {
              wx.showModal({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
            },
            complete: function () {
              wx.hideToast();  //隐藏Toast
            }
        })
    };
    gologin(userinf){
        if (userinf == "") {
          wx.redirectTo({
            url: '../login/login',
          })
        }
    };
    checkregist(data){
        var emailtext = data.emailtext;
        var nametext = data.nametext;
        var pswtext = data.pswtext;
        var rppswtext = data.rppswtext;
        var email = data.email;
        var name = data.name;
        var psw = data.psw;
        var repsw = data.repsw;
        if (emailtext == "" && nametext == "" && pswtext == "" && rppswtext == "" && email != "" && repsw != "" && name != "" && psw != ""){
          return false;
        }
    };
}
export { Base }