Page({
  data:{
    history:[]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({history:wx.getStorageSync('history')});
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '计算历史', // 分享标题
      desc: '使用计算器计算的历史记录', // 分享描述
      path: '../history/history' // 分享路径
    }
  }
})