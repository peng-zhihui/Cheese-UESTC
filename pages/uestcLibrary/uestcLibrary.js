// pages/uestcNews/uestcNews.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var app = getApp()
Page({
  data: {
    newList: [],
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    var that = this;
    requestData(that, "");

    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['weappdev', '小程序', 'wxParse', 'wxSearch', 'wxNotification']);
    WxSearch.initMindKeys(['weappdev.com', '微信小程序开发', '微信开发', '微信小程序']);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },


  onItemClick: function (event) {
    var targetUrl = "/pages/uestcNoticeDetail/uestcNoticeDetail"
    if (event.currentTarget.dataset.detailHref != null)
      targetUrl = targetUrl + "?navigateURL=" + event.currentTarget.dataset.detailHref.substr(2);

    wx.navigateTo({
      url: targetUrl
    });
  },


  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})


/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that, targetPage) {
  wx.request({
    //连到服务器 获取json格式的文档
    url: Constant.SERVER_ADDRESS + "/library",
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      if (res == null) {
        console.error(Constant.ERROR_DATA_IS_NULL);
        return;
      }
      for (var i = 0; i <= res.data.htmlBody.length; i++) {
        _body: res.data.htmlBody
      }
      that.setData({
        newList: res.data.htmlBody,
      })

    }
  });
}


//获取配置的的 全局常量
var Constant = require('../../utils/constant.js');