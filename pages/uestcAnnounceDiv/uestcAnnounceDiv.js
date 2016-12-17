// pages/uestcAnnounceDetail/uestcAnnounceDetail.js
//在使用的View中引入WxParse模块
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data: {
    //当前页面的html地址
    currentHtmlAddress: "",
    currentHtmlAddressWap: "",
    currentHtmlAddressId: "",
    currentHtmlContent: "",
  },
  onLoad: function (options) {
    var that = this;
    this.data.currentHtmlContent = requestData(that);

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
  }
})



/**
 * 请求数据
 * @param that Page的对象，用其进行数据的更新
 * @param targetPage 请求的目标页码
 */
function requestData(that) {
  wx.request({
    //链接都一样 只是最后的id不同。故可以直接这样用
    url: Constant.SERVER_ADDRESS + "/uestcNoticeDetail/" + "?pageId=" + 5751,
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
      var htmlString = 'res.data' + '<div cellspacing="0" cellpadding="0" class="table"><div> <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="75" height="35"><p>楼栋</p></div> <div class="table-th" width="63" height="35"><p>区域（系统）</p></div> <div class="table-th" width="172" height="35"><p>室内检查、清洗</p></div> <div class="table-th" width="208" height="35"><p>管网系统检修</p></div> <div class="table-th" width="180" height="35"><p>主机设备检修</p></div> </div></div></div></div> <div class="table-tr" style="height:60px;">         <div class="table-td">             <div class="sub-table">                 <div class="sub-table-tr">                     <div class="sub-table-td" style="width: 30%;border: none;">                         <div class="sub-table">                             <div class="sub-table-tr">                                 <div class="sub-table-td" style="width: 100%;">                                     主楼                                 </div>                             </div>                         </div>                     </div>                     <div class="sub-table-td" style="width: 20%; border: none;">                         <div class="sub-table">                             <div class="sub-table-tr" style="height:50%;">                                 <div class="sub-table-td" style="width: 100%; height:50%;">                                    B2区                                 </div>                             </div>                             <div class="sub-table-tr" style="height:50%;">                                 <div class="sub-table-td" style="width: 100%; height:50%;">                                     A2区（VRV）                                 </div>                             </div>                         </div>                     </div>                     <div class="sub-table-td" style="width: 30%;border: none;">                         <div class="sub-table">                             <div class="sub-table-tr" style="height:50%;">                                 <div class="sub-table-td" style="width: 100%; height:50%;">                                     3月17日至4月3日                                 </div>                             </div>                             <div class="sub-table-tr" style="height:50%;">                                 <div class="sub-table-td" style="width: 100%; height:50%;">                                     4月1日至4月8日                                 </div>                             </div>                         </div>                     </div>                     <div class="sub-table-td" style="width: 30%;border: none;">                         <div class="sub-table">                             <div class="sub-table-tr" style="height:50%;">                                 <div class="sub-table-td" style="width: 100%; height:50%;">                                     3月17日至4月30日                                 </div>                             </div>                             <div class="sub-table-tr" style="height:50%;">                                 <div class="sub-table-td" style="width: 100%; height:50%;">                                 </div>                             </div>                         </div>                     </div>                 </div>             </div>         </div>     </div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="75" rowspan="2" height="35"><p>图书馆</p></div> <div class="table-th" width="100" height="35"><p>主楼、报告厅</p></div> <div class="table-th" width="172" height="35"><p>4月7日至4月17日</p></div> <div class="table-th" width="387" colspan="2" height="35"><p>4月7日至4月30日</p></div> </div></div></div></div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="100" height="35"><p>辅楼（VRV）</p></div> <div class="table-th" width="425" colspan="3" height="35"><p>4月14日至4月17日</p></div> </div></div></div></div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="75" rowspan="2" height="35"><p>研究院大楼</p></div> <div class="table-th" width="100" height="35"><p>水系统</p></div> <div class="table-th" width="172" height="35"><p>4月18日至4月28日</p></div> <div class="table-th" width="387" colspan="2" height="35"><p>4月10日至4月30日</p></div> </div></div></div></div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="100" height="35"><p>VRV系统</p></div> <div class="table-th" width="425" colspan="3" height="35"><p>4月8日至4月13日</p></div> </div></div></div></div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="75" height="35"><p>科研楼</p></div> <div class="table-th" width="100" height="35"><p>A区（VRV）</p></div> <div class="table-th" width="444" colspan="3" height="35"><p>4月25日至4月28日</p></div> </div></div></div></div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="75" height="35"><p>教学楼</p></div> <div class="table-th" width="100" height="35"><p>C区（VRV）</p></div> <div class="table-th" width="444" colspan="3" height="35"><p>4月20日至4月22日</p></div> </div></div></div></div>   <div class="table-tr"><div class="table-td"><div class="sub-table"><div class="sub-table-tr"> <div class="table-th" width="75" height="35"><p>成电会堂</p></div> <div class="table-th" width="100" height="35"><p>水系统</p></div> <div class="table-th" width="444" colspan="3" height="35"><p>4月15日至4月30日</p></div> </div></div></div></div> </div></div>';
      WxParse.wxParse('article', 'html', htmlString, that, 5);
      return res.data;

    }
  });
}


//获取配置的的 全局常量
var Constant = require('../../utils/constant.js');