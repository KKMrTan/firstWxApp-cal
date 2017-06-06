Page({
  data:{
      result:"0",
      id1:"back",
      id2:"clear",
      id3:"nagative",
      id4:"+",
      id5:"7",
      id6:"8",
      id7:"9",
      id8:"-",
      id9:"4",
      id10:"5",
      id11:"6",
      id12:"×",
      id13:"1",
      id14:"2",
      id15:"3",
      id16:"÷",
      id17:"00",
      id18:"0",
      id19:".",
      id20:"=",
      id21:"history",
      num1:"",
      num2:"",
      op:"",
      flag:false,
      p_num:"",
      deng:false,
      logs:[]
  },
  getResult:function(num1,num2,op){
      var result; 
      switch(op) {
          case "+":
            result = num1 + num2;
            break;

          case "-":
            result = num1 - num2;
            break;

          case "×":
            result = num1 * num2;
            break;

          case "÷":
            result = num1 / num2;
            break;

          default:
            break;
      }
      this.data.logs.push(num1+" "+op+" "+num2+" "+" = "+result)
      wx.setStorageSync('history', this.data.logs);
      return result;
  },
  clickBtn:function(event){
    var sd = this.data.result;
    var id = event.target.id;
    if(id == this.data.id1){
        sd = sd.toString();
        sd=sd.substring(0,sd.length-1);
        if(sd.length < 1){
            sd = "0";
        }
        this.setData({result:sd});
        // return;
    }

    if(id == this.data.id2){
        this.setData({result:"0"});
        this.setData({num1:""});
        this.setData({num2:""});
        this.setData({op:""});
        this.setData({p_num:""});
        this.setData({flag:false});
        this.setData({deng:false});
        return;
    }

    if(id == this.data.id3){
        sd = parseInt(sd)*(-1);
        sd = sd.toString();
        this.setData({result:sd});
        return;
    }

    if(this.data.num1 != "" && this.data.flag == false){
        sd = "";
        this.setData({flag:true});
    }

    if(id == this.data.id19){
        if(sd.indexOf(".") < 0){
            sd += this.data.id19;
        }
        this.setData({result:sd});
        return;
    }
    if(this.data.deng == true && id != this.data.id20 && id != this.data.id4 && id != this.data.id8 && id != this.data.id12 && id != this.data.id16){
        this.setData({num1:""});
        this.setData({num2:""});
        this.setData({op:""});
        this.setData({p_num:""});
        this.setData({flag:false});
        this.setData({deng:false});
    }

    if(id == this.data.id17){
        if(sd ==  "0"){
            sd = "0";
        }else{
            sd += this.data.id17;
        }
        this.setData({result:sd});
        return;
    }

    if(id == this.data.id20){
        if(this.data.num1 == ""){
            return;
        }
        if(this.data.num2 == ""&&sd == ""&&this.data.p_num==""){
            this.setData({flag:false});
            return;
        }
        if(this.data.op != "" && sd.length < 1){
            sd = this.data.p_num.toString();
        }
        if(sd.indexOf(".") < 0){
            sd = parseInt(sd);
        }else{
            sd = parseFloat(sd);
        }
        this.setData({num2:sd});
        var rs = this.getResult(this.data.num1,this.data.num2,this.data.op);
        this.setData({result:rs});
        this.setData({num1:rs});
        this.setData({p_num:sd});
        this.setData({num2:""});
        this.setData({deng:true});
        this.setData({flag:false});
        return;
    }

    if(id == this.data.id4 || id == this.data.id8 || id == this.data.id12 ||id == this.data.id16){
        this.setData({deng:false});
        if(this.data.op != "" && sd.length < 1){
            this.setData({op:id});
            this.setData({flag:false});
            return;
        }
        if(sd.indexOf(".") < 0){
            sd = parseInt(sd);
        }else{
            sd = parseFloat(sd);
        }
        if(this.data.num1.length < 1){
            this.setData({num1:sd});
            this.setData({op:id});
        }else if(this.data.num2.length < 1){
            this.setData({num2:sd});
            var rs = this.getResult(this.data.num1,this.data.num2,this.data.op);
            this.setData({result:rs});
            this.setData({num1:rs});
            this.setData({num2:""});
            this.setData({op:id});
            this.setData({flag:false});
        }
        return;
    }
    
    var data;
    if(sd == "0"){
        data = id;
    }else{
        data = sd+id;
    }
    if(data == "back"){
        return;
    }
    this.setData({result:data});
  },
  history:function(){
    wx.navigateTo({
        url: '../history/history'
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
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
      title: '个人计算器', // 分享标题
      desc: '使用个人计算器', // 分享描述
      path: '../cal/cal' // 分享路径
    }
  }
})