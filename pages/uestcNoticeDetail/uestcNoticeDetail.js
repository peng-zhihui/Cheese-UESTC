// pages/uestcNewsDetail/uestcNewsDetail.js
//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');

//表格控件
var WXGrid = require('../../js/wxgrid.js');
var wxgrid = new WXGrid;
// wxgrid.init(2,4);
// var img = "http://pic.qqtn.com/up/2016-9/20169281936395677.png";
// var classifies = [
//   {name:"领聘1",img},
//   {name:"领聘2",img},
//   {name:"领聘3",img},
//   {name:"领聘4",img},
//   {name:"领聘5",img},
//   {name:"领聘6",img},
//   {name:"领聘7",img},
//   {name:"领聘8",img}]
// wxgrid.data.add("classifies",classifies);

wxgrid.init(4,4);
wxgrid.setRowsHeight(100,2);
wxgrid.setColsWidth(100,2);


Page({
  data:{
      //当前页面的html地址
      currentHtmlAddress:"",
      currentHtmlAddressWap:"",
      currentHtmlAddressId:"",
      currentHtmlContent:"",

      wxgrid
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    if (options == null ) {
        
        return;
    }
    this.setData({
          currentHtmlAddress: "/?n=UestcNews.Front.Document.ArticlePage&Id="+options.Id,
          currentHtmlAddressWap:"http://wap.uestc.edu.cn/post/53118"+options.Id,
          currentHtmlAddressId:options.Id,
    });
    this.data.currentHtmlContent=requestData(that,options.Id);


    
		
  
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  
});

/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that, targetPageId) {
    wx.request({
      
        url: Constant.SERVER_ADDRESS+"/uestcNoticeDetail/"+"?pageId="+targetPageId,
        header: {
        },
        success: function (res) {
            if (res == null) {  
                console.error(Constant.ERROR_DATA_IS_NULL);
                return;
            }
            
        /**
        * WxParse.wxParse(bindName , type, data, target,imagePadding)
        * 1.bindName绑定的数据名(必填)
        * 2.type可以为html或者md(必填)
        * 3.data为传入的具体数据(必填)
        * 4.target为Page对象,一般为this(必填)
        * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
        */
        var htmlString=res.data+'';
        WxParse.wxParse('article', 'html', htmlString, that,5);
        return res.data;

        }
    });
}


//获取配置的的 全局常量
var Constant = require('../../utils/constant.js');

