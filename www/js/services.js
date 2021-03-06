angular.module('starter.services', [])



.factory('Activities', function() {
  //存储活动数据
  var activities = [{
      date: 1,
      activityId:1,
      time: '08:00 - 10:00',
      content: '拜访张总',
      completed: true,
      type:'拜访',
      sale:'Andy',
      contact:'Tony',
      custom:'Alibaba科技公司',
      state:'已计划',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 08:00',
      endDate:'2015-11-11 10:00',
      priority:'高',
      explanation:'去看一看',
      address:'浙江省杭州市滨江区长河路99号阿里巴巴科技公司'
    },{
      date: 1,
      activityId:2,
      time: '11:00 - 12:00',
      content: '新产品展览',
      completed: true,
      type:'展示',
      sale:'Andy',
      contact:'Tony',
      custom:'阿里巴巴科技公司',
      state:'已结束',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 11:00',
      endDate:'2015-11-11 12:00',
      priority:'高',
      explanation:'针对15年冬季新产品免费展示',
      address:'浙江省杭州市滨江区长河路99号阿里巴巴科技公司'
    },{
      date: 1,
      activityId:3,
      time: '15:00 - 16:00',
      content: '总结大会',
      completed: false,
      type:'总结',
      sale:'Andy',
      contact:'Tony',
      custom:'阿里巴巴科技公司',
      state:'进行中',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 15:00',
      endDate:'2015-11-11 16:00',
      priority:'高',
      explanation:'总结经验',
      address:'浙江省杭州市滨江区长河路99号阿里巴巴科技公司'
  },{
      date: 3,
      activityId:4,
      time: '08:00 - 10:00',
      content: 'Coding',
      completed: true,
      type:'学习',
      sale:'Hand',
      contact:'石总',
      custom:'汉得',
      state:'进行中',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 8:00',
      endDate:'2015-11-11 10:00',
      priority:'高',
      explanation:'学习!!!!最重要!!!',
      address:'上海汉得工业园'
    },{
      date: 3,
      activityId:5,
      time: '11:00 - 12:00',
      content: '吃饭',
      completed: true,
      type:'日常',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'已结束',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 11:00',
      endDate:'2015-11-11 12:00',
      priority:'高',
      explanation:'日常任务',
      address:'上海汉得工业园'
    },{
      date: 3,
      activityId:6,
      time: '15:00 - 16:00',
      content: 'Coding',
      completed: false,
      type:'学习',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'进行中',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 15:00',
      endDate:'2015-11-11 16:00',
      priority:'高',
      explanation:'学习学习',
      address:'允惠人才公寓'
  },{
      date: 5,
      activityId:7,
      time: '08:00 - 10:00',
      content: '起床?',
      completed: true,
      type:'日常',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'中止',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 8:00',
      endDate:'2015-11-11 10:00',
      priority:'高',
      explanation:'睡懒觉了',
      address:'床上?'
    },{
      date: 5,
      activityId:8,
      time: '11:00 - 12:00',
      content: '出去玩?',
      completed: true,
      type:'日常',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'已结束',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 11:00',
      endDate:'2015-11-11 12:00',
      priority:'高',
      explanation:'放假了额',
      address:'杭州西湖'
    },{
      date: 5,
      activityId:9,
      time: '15:00 - 16:00',
      content: '吃东西',
      completed: false,
      type:'日常',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'进行中',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 15:00',
      endDate:'2015-11-11 16:00',
      priority:'高',
      explanation:'吃好吃的',
      address:'上海汉得工业园'
  },{
      date: 12,
      activityId:10,
      time: '08:00 - 10:00',
      content: '出去玩',
      completed: true,
      type:'日常',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'中止',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 18:00',
      endDate:'2015-11-11 10:00',
      priority:'高',
      explanation:'为什么不玩OW?',
      address:'努巴尼'
    },{
      date: 12,
      activityId:11,
      time: '11:00 - 12:00',
      content: '吃大餐',
      completed: true,
      type:'日常',
      sale:'无',
      contact:'石总',
      custom:'汉得',
      state:'已结束',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 11:00',
      endDate:'2015-11-11 12:00',
      priority:'高',
      explanation:'吃豪华午餐',
      address:'上海市和平饭店'
    },{
      date: 12,
      activityId:12,
      time: '15:00 - 16:00',
      content: '玩',
      completed: false,
      type:'日常',
      sale:'无',
      contact:'莱因哈特',
      custom:'暴雪',
      state:'进行中',
      anticipatedRevenue:'28,000',
      budgetAmount:'20,000',
      currency:'CNY',
      startDate:'2015-11-11 15:00',
      endDate:'2015-11-11 16:00',
      priority:'高',
      explanation:'正在前往漓江塔',
      address:'漓江塔'
  }];
  return {
    get: function(date){
      var concreteActivities = [];
      for (var i = 0; i < activities.length; i++){
        if (activities[i].date == date){
          concreteActivities.push(activities[i]);
        }
      }
      return concreteActivities;
    },
    getById:function(id){
      for (var i = 0; i < activities.length; i++){
        if (activities[i].activityId == id){
          return activities[i];
        }
      }
      return null;
    },
    getAll: function(){
      return activities;
    }
  }
})

.factory('ExpenseClaim',function(){
  var expenseClaim = [{
    head:'ID0000001',
    applicantId:'1101',
    applicant:'张冉',
    department: '中国-华东区-移动技术部',
    date:'2016-07-20',
    theme:'培训报销',
    totalSum:'1300',
    suggestion:'',
    examine:false,
    approval:false,
    detail:[{
      type:'差旅',
      category:'交通费',
      explanation :'公司到学校两地来往费用',
      num:'2',
      unitPrice:'400',
      sum:'800'
    }, {
      type:'差旅',
      category:'酒店费',
      explanation :'外地住宿费用',
      num:'1',
      unitPrice:'200',
      sum:'200'
    }, {
      type:'应酬',
      category:'餐费',
      explanation :'与参会人员高层吃饭',
      num:'1',
      unitPrice:'300',
      sum:'300'
    }]
  }, {
    head:'ID0000002',
    applicantId:'1102',
    applicant:'石杨',
    department: '中国-华东区-研发中心',
    date:'2016-07-20',
    theme:'参加会议报销',
    totalSum:'1400',
    suggestion:'',
    examine:false,
    approval:false,
    detail:[{
      type:'差旅',
      category:'交通费',
      explanation :'公司到开会地点两地来往费用',
      num:'2',
      unitPrice:'400',
      sum:'800'
    }, {
      type:'差旅',
      category:'酒店费',
      explanation :'外地住宿费用',
      num:'2',
      unitPrice:'150',
      sum:'300'
    }, {
      type:'应酬',
      category:'餐费',
      explanation :'与参会人员高层吃饭',
      num:'1',
      unitPrice:'300',
      sum:'300'
    }]
  }, {
    head:'ID0000003',
    applicantId:'1103',
    applicant:'毛一环',
    department: '中国-华东区-移动技术部',
    date:'2016-07-20',
    theme:'培训报销',
    totalSum:'1300',
    suggestion:'',
    examine:true,
    approval:false,
    detail:[{
      type:'差旅',
      category:'交通费',
      explanation :'公司到学校两地来往费用',
      num:'2',
      unitPrice:'400',
      sum:'800'
    }, {
      type:'差旅',
      category:'酒店费',
      explanation :'外地住宿费用',
      num:'1',
      unitPrice:'200',
      sum:'200'
    }, {
      type:'应酬',
      category:'餐费',
      explanation :'与参会人员高层吃饭',
      num:'1',
      unitPrice:'300',
      sum:'300'
    }]
  }, {
    head:'ID0000004',
    applicantId:'1104',
    applicant:'袁梦',
    department: '中国-华东区-移动技术部',
    date:'2016-07-20',
    theme:'会议报销',
    totalSum:'1800',
    suggestion:'',
    examine:true,
    approval:true,
    detail:[{
      type:'差旅',
      category:'交通费',
      explanation :'公司到开会地点两地来往费用',
      num:'2',
      unitPrice:'400',
      sum:'800'
    }, {
      type:'差旅',
      category:'酒店费',
      explanation :'外地住宿费用',
      num:'2',
      unitPrice:'200',
      sum:'400'
    }, {
      type:'应酬',
      category:'餐费',
      explanation :'与高层吃饭',
      num:'2',
      unitPrice:'300',
      sum:'600'
    }]
  }];
  return {
    getByHead: function(head){
      for(var i = 0; i < expenseClaim.length; i++){
        if(head == expenseClaim[i].head)
          return expenseClaim[i];
      }
      return null;
    },
    getAll: function(){
      return expenseClaim;
    }
  }
})

.factory('Chats',function(){
    var chats = [ {
      chatName:'张冉',
      messageNum:'1',
      date:'2015-11-11',
      time:'19:00',
      face:'img/mike.png',
      people:[{
        name:'袁梦',
        face:'img/me.jpg'
      },{
        name:'张冉',
        face:'img/mike.png'
      }],
      message:[{
        peopleId:1,
        content: '好多要做啊'
      }]
    }, {
      chatName:'豆豆 ',
      messageNum:'2',
      date:'2015-11-11',
      time:'19:00',
      face:'img/ben.png',
      people:[{
        name:'袁梦',
        face:'img/me.jpg'
      },{
        name:'豆豆',
        face:'img/ben.png'
      }],
      message:[{
        peopleId:1,
        content: '对啊!'
      }, {
        peopleId:1,
        content: '要做好久!!'
      }]
    }, {
      chatName:'移动技术部',
      messageNum:'3',
      date:'2015-11-11',
      time:'19:00',
      face:'img/ionic.png',
      people:[{
        name:'袁梦',
        face:'img/me.jpg'
      },{
        name:'张冉',
        face:'img/mike.png'
      }, {
        name:'豆豆',
        face:'img/ben.png'
      }, {
        name:'陈宇朝',
        face:'img/perry.png'
      }],
      message:[{
        peopleId:1,
        content: 'Hey, everybody!'
      },{
        peopleId:2,
        content: 'Hey!!'
      },{
        peopleId:3,
        content: 'ZZ~'
      }]
    }, {
      chatName:'销售管理组',
      messageNum:'4',
      date:'2015-11-11',
      time:'19:00',
      face:'img/attachment.png',
      people:[{
        name:'袁梦',
        face:'img/me.jpg'
      },{
        name:'张冉',
        face:'img/mike.png'
      },{
        name:'豆豆',
        face:'img/ben.png'
      },{
        name:'陈宇朝',
        face:'img/adam.jpg'
      },{
        name:'刘佳行',
        face: 'img/perry.png'
      }],
      message:[{
        peopleId:1,
        content: '好多要做啊'
      },{
        peopleId:2,
        content: '对啊!',
        face:'img/ben.png'
      },{
        peopleId:3,
        content: '加油吧大家'
      }, {
        peopleId:4,
        content: '收到!'
      }]
    }];
    return {
      getAll: function(){
        return chats;
      },
      getByChatName: function(chatName){
        for(var i = 0; i < chats.length; i++){
          if(chats[i].chatName == chatName)
            return chats[i];
        }
        return null;
      },
      moveToTop: function(chat){
        chats.splice(chats.indexOf(chat), 1);
        chats.unshift(chat);
      }
    }
  })

.factory('Customs',function(){
  var customs = [{
    name:'阿里巴巴科技公司',
    type:'潜在客户',
    stage:'挖掘',
    sale:'Andy',
    web:'www.tianmao.com',
    industry:'互联网',
    address:'杭州市滨江区长河路99号',
    income:'1亿',
    employeeNum:'100,100',
    contact:'马云',
    note:'超级大客户',
    distributed:true
  }, {
    name:'暴雪',
    type:'新客户',
    stage:'挖掘',
    sale:'Andy',
    web:'http://www.battlenet.com.cn',
    industry:'互联网',
    address:'美国加利福尼亚州尔湾',
    income:'1111亿',
    employeeNum:'1001111,100',
    contact:'Blizzard',
    note:'超级大客户',
    distributed:true
  }, {
    name:'网易',
    type:'潜在客户',
    stage:'挖掘',
    sale:'Andy',
    web:'www.163.com',
    industry:'互联网',
    address:'杭州市滨江',
    income:'11亿',
    employeeNum:'1100,100',
    contact:'丁磊',
    note:'超级大客户',
    distributed:false
  }, {
    name:'腾讯',
    type:'潜在客户',
    stage:'挖掘',
    sale:'Andy',
    web:'www.qq.com',
    industry:'互联网',
    address:'杭州市滨江区长河路99号',
    income:'1亿',
    employeeNum:'100,100',
    contact:'马化腾',
    note:'超级大客户',
    distributed:false
  }];
  return {
    getAll: function(){
      return customs;
    },
    getByName: function(name){
      for(var i = 0; i < customs.length; i++){
        if(customs[i].name == name)
          return customs[i];
      }
      return null;
    }
  }
})

.factory('Niches',function(){
  var niches = [{
    name:'北京园区建设项目 ',
    custom:'阿里巴巴科技公司',
    sale:'Andy',
    stage:'初步接洽(10%)',
    type:'新客户',
    state:'进行中',
    income:'28,000',
    budgetAmount:'20,100',
    currency:'CNY',
    endDate:'2015-11-11',
    purchasingProcess:'网上下单',
    chance:'网站',
    opponents:'XXX公司',
    note:'超级客户'
  }, {
    name:'深圳园区建设项目 ',
    custom:'阿里巴巴科技公司',
    sale:'Andy',
    stage:'需求确定(30%)',
    type:'新客户',
    state:'进行中',
    income:'28,000',
    budgetAmount:'20,100',
    currency:'CNY',
    endDate:'2015-11-11',
    purchasingProcess:'网上下单',
    chance:'网站',
    opponents:'XXX公司',
    note:'超级客户'
  }, {
    name:'杭州园区建设项目 ',
    custom:'网易',
    sale:'Andy',
    stage:'方案/报价(60%)',
    type:'新客户',
    state:'进行中',
    income:'28,000',
    budgetAmount:'20,100',
    currency:'CNY',
    endDate:'2015-11-11',
    purchasingProcess:'网上下单',
    chance:'网站',
    opponents:'XXX公司',
    note:'超级客户'
  }, {
    name:'努巴尼建设项目 ',
    custom:'暴雪',
    sale:'D.Va',
    stage:'商务谈判(80%)',
    type:'新客户',
    state:'进行中',
    income:'28,00000',
    budgetAmount:'20,100',
    currency:'CNY',
    endDate:'2015-11-11',
    purchasingProcess:'网上下单',
    chance:'网站',
    opponents:'XXX公司',
    note:'超级客户'
  }, {
    name:'多拉多建设项目 ',
    custom:'暴雪',
    sale:'半藏',
    stage:'赢单(100%)',
    type:'新客户',
    state:'进行中',
    income:'28,000',
    budgetAmount:'20,100',
    currency:'CNY',
    endDate:'2015-11-11',
    purchasingProcess:'网上下单',
    chance:'网站',
    opponents:'XXX公司',
    note:'超级客户'
  }, {
    name:'上海园区建设项目 ',
    custom:'腾讯',
    sale:'Andy',
    stage:'输单(0%)',
    type:'新客户',
    state:'进行中',
    income:'28,000',
    budgetAmount:'20,100',
    currency:'CNY',
    endDate:'2015-11-11',
    purchasingProcess:'网上下单',
    chance:'网站',
    opponents:'XXX公司',
    note:'超级客户'
  }];
  return {
    getAll: function(){
      return niches;
    },
    getByName: function(name){
      for(var i = 0; i < niches.length; i++){
        if(niches[i].name == name)
          return niches[i];
      }
      return null;
    }
  }
})

.factory('Attachments',function() {
  var attachments = [{
    name:'守望先锋 ',
    type:'新产品',
    sale:'网易',
    explanation:'沉迷学习,日渐消瘦',
    image:'img/attachment.png'
  }, {
    name:'西门子双开开关 ',
    type:'新产品',
    sale:'西门子',
    explanation:'西门子开关插座面板 远景系列 雅白色 带荧光二开双开弹孔开关',
    image:'img/attachment2.png'
  }, {
    name:'施耐德三位开关 ',
    type:'新产品',
    sale:'施耐德',
    explanation:'C86系列10A 250V单控大按板开关C230/1W 白色',
    image:'img/attachment3.png'
  }, {
    name:'小米手机 ',
    type:'新产品',
    sale:'小米',
    explanation:'陶瓷后盖 128G内存',
    image:'img/attachment4.png'
  }];
  return {
    getAll: function(){
      return attachments;
    },
    getByName: function(name){
      for(var i = 0; i < attachments.length; i++){
        if(attachments[i].name == name)
          return attachments[i];
      }
      return null;
    }
  }
})

.factory('Products',function() {
  var products = [{
    name:'守望先锋 ',
    productId:'23333333',
    unit:'OW',
    price:'328',
    currency:'CNY',
    image:'img/attachment.png',
    attribute:'PY',
    expiryDate:'2016-05-27',
    endDate:'2222-12-22',
    explanation:'有重度成瘾症状'
  }, {
    name:'西门子双开开关 ',
    productId:'46567687',
    unit:'EA',
    price:'328',
    currency:'CNY',
    image:'img/attachment2.png',
    attribute:'无',
    expiryDate:'2015-11-27',
    endDate:'2016-11-22',
    explanation:'西门子开关插座面板 远景系列 雅白色 带荧光二开双开弹孔开关'
  }, {
    name:'施耐德三位开关 ',
    productId:'46567687',
    unit:'EA',
    price:'328',
    currency:'CNY',
    image:'img/attachment3.png',
    attribute:'无',
    expiryDate:'2015-11-27',
    endDate:'2016-11-22',
    explanation:'C86系列10A 250V单控大按板开关C230/1W 白色'
  }, {
    name:'小米手机 ',
    productId:'46567687',
    unit:'EA',
    price:'2699',
    currency:'CNY',
    image:'img/attachment4.png',
    attribute:'无',
    expiryDate:'2015-11-27',
    endDate:'2016-11-22',
    explanation:'陶瓷后盖 128G内存'
  }];
  return {
    getAll: function(){
      return products;
    },
    getByName: function(name){
      for(var i = 0; i < products.length; i++){
        if(products[i].name == name)
          return products[i];
      }
      return null;
    }
  }
})

.factory('Quotes',function() {
  var quotes = [{
    name:'阿里巴巴报价单 ',
    coding:'23333333',
    custom:'阿里巴巴科技公司',
    currency:'CNY',
    tariff:'2015服务器新产品价目表',
    totalSum:'10,000'
  }, {
    name:'腾讯报价单 ',
    coding:'23333333',
    custom:'腾讯科技公司',
    currency:'CNY',
    tariff:'2016服务器新产品价目表',
    totalSum:'20,000'
  }, {
    name:'网易报价单 ',
    coding:'23333333',
    custom:'网易',
    currency:'CNY',
    tariff:'2017服务器新产品价目表',
    totalSum:'33,000'
  }];
  return {
    getAll: function(){
      return quotes;
    },
    getByName: function(name){
      for(var i = 0; i < quotes.length; i++){
        if(quotes[i].name == name)
          return quotes[i];
      }
      return null;
    }
  }
})

.factory('Orders',function() {
  var orders = [{
    name:'阿里巴巴订单 ',
    coding:'23333333',
    custom:'阿里巴巴科技公司',
    address:'杭州滨江区233号',
    currency:'CNY',
    totalSum:'10,000',
    deliveryDate:'2015-11-11',
    deliveryMethod:'DHL',
    explanation:'无'
  }, {
    name:'腾讯订单 ',
    coding:'23333333',
    custom:'腾讯公司',
    address:'深圳233号',
    currency:'CNY',
    totalSum:'10,0000',
    deliveryDate:'2015-11-11',
    deliveryMethod:'DHL',
    explanation:'无'
  }, {
    name:'守望先锋订单 ',
    coding:'666666',
    custom:'暴雪',
    address:'洛杉矶',
    currency:'CNY',
    totalSum:'10,000000',
    deliveryDate:'2015-11-11',
    deliveryMethod:'DHL',
    explanation:'PY?'
  }];
  return {
    getAll: function(){
      return orders;
    },
    getByName: function(name){
      for(var i = 0; i < orders.length; i++){
        if(orders[i].name == name)
          return orders[i];
      }
      return null;
    }
  }
})

.factory('Me',function() {
  var me = {
    name:'袁梦 ',
    face:'img/me.jpg',
    number:'1000',
    email:'MengYuan@hand-china.com',
    telephone:'14603415678',
    phone:'021-3573095',
    sex:'男',
    address:'上海 青浦',
    explanation:'Do Myself!',
    background:0,
    password:'159357'
  };
  return {
    get: function(){
      return me;
    }
  }
})

.factory('Contacts', function () {
  var contacts = [{
    name: '张冉',
    face:'img/mike.png',
    telephone:'136-1567-1234',
    phone:'021-98761234',
    email:'ranzhang@hand-china.com',
    note:'CEO'
  }, {
    name: '师宗',
    face:'img/ionic.png',
    telephone:'136-1227-1234',
    phone:'021-98761334',
    email:'zongshi@hand-china.com',
    note:'Boss'
  }, {
    name: '盘旭',
    face:'img/ionic.png',
    telephone:'136-1227-1234',
    phone:'021-98761334',
    email:'xupan@hand-china.com',
    note:'XX部门经理'
  }, {
    name: '刘佳航',
    face:'img/perry.png',
    telephone:'181-1567-1309',
    phone:'021-11234123',
    email:'jiahangliu@hand-china.com',
    note:'XX项目项目经理'
  }, {
    name: '楚葱',
    face:'img/attachment.png',
    telephone:'139-7407-1234',
    phone:'021-98071242',
    email:'congchu@hand-china.com',
    note:'XX项目项目组长'
  }, {
    name: '丁风',
    face:'img/dingfeng.jpg',
    telephone:'139-7554-1234',
    phone:'021-98071242',
    email:'fengding@hand-china.com',
    note:'直接领导'
  }, {
    name: '毛一环',
    face:'img/ben.png',
    telephone:'136-1211-1234',
    phone:'021-53432314',
    email:'yihuanmao@hand-china.com',
    note:'XXX项目项目经理'
  }, {
    name: '师洋楠',
    face:'img/max.png',
    telephone:'189-1567-1234',
    phone:'021-12442323',
    email:'yangnanshi@hand-china.com',
    note:'XXX项目项目组长'
  }, {
    name: '张斌斌',
    face:'img/perry.png',
    telephone:'150-7490-2314',
    phone:'021-53212134',
    email:'binbinzhang@hand-china.com',
    note:'XXX部门经理'
  }, {
    name: '陈宇朝',
    face:'img/adam.jpg',
    telephone:'151-2415-4361',
    phone:'021-84931252',
    email:'yuchaochen@hand-china.com',
    note:'Boss'
  }, {
    name: '袁梦',
    face:'img/me.jpg',
    telephone:'151-2203-2730',
    phone:'021-84972213',
    email:'mengyuan@hand-china.com',
    note:'coder'
  }, {
    name: '顺哥',
    face:'img/shunge.jpg',
    telephone:'155-2323-2730',
    phone:'021-84972213',
    email:'geshun@hand-china.com',
    note:'Dalao'
  }, {
    name: '黄洁',
    face:'img/huangjie.jpg',
    telephone:'151-3214-2730',
    phone:'021-84972213',
    email:'jiehuang@hand-china.com',
    note:'开发组长'
  }, {
    name: '刘永佳',
    face:'img/liuyongjia.jpg',
    telephone:'151-2203-4312',
    phone:'021-84972213',
    email:'yongjialiu@hand-china.com',
    note:'XXXXX部门经理'
  }, {
    name: '卢宇飞',
    face:'img/luyufei.jpg',
    telephone:'151-2232-2730',
    phone:'021-84971113',
    email:'yufeilu@hand-china.com',
    note:'XXXX部门经理'
  }, {
    name: '谢辰',
    face:'img/xiechen.jpg',
    telephone:'151-3213-2730',
    phone:'021-84971113',
    email:'chenxie@hand-china.com',
    note:'XXX顾问'
  }];
  return {
    getAll: function(){
      return contacts;
    },
    getByName:function(name){
      for(var i = 0; i < contacts.length; i++){
        if(contacts[i].name == name)
          return contacts[i];
      }
      return null;
    }
  }
})

.factory('Dynamics', function () {
    var dynamics = [{
      name:'张冉',
      face:'img/mike.png',
      content:'When I was young, I’d listen to the radio. Waiting for my favorite songs. When they played I’d sing along, It made me smile. Those were such happy times. And not so long ago. How I wondered where they’d gone. ',
      image:['img/ionic.png', 'img/me.jpg', 'img/max.png'],
      like:true,
      collected:true,
      comment:[{
        people:'盘旭',
        content:'..what?....!'
      }],
      edit:false
    },{
      name:'豆豆',
      face:'img/ionic.png',
      content:'沉迷学习不可自拔，日渐消瘦萎靡不振',
      image:['img/ionic.png','img/max.png'],
      like:true,
      collected:false,
      comment:[{
        people:'刘佳航',
        content:'啊,学习好有意思'
      }],
      edit:false
    },{
      name:'楚葱',
      face:'img/attachment.png',
      content:'我的头像是现在最好的学习工具。没有之一！ ',
      image:['img/attachment.png', 'img/adam.jpg', 'img/max.png'],
      like:false,
      collected:false,
      comment:[],
      edit:false
    }];
    return {
      getAll: function(){
        return dynamics;
      },
      getByName:function(name){
        for(var i = 0; i < dynamics.length; i++){
          if(dynamics[i].name == name)
            return dynamics[i];
        }
        return null;
      }
    }
  })

.factory('Expressions', function () {
  var expressions = [{
    src:'img/expression/[bs].png',
    name:'[bs]'
  }, {
    src:'img/expression/[db].png',
    name:'[db]'
  }, {
    src:'img/expression/[dk].png',
    name:'[dk]'
  }, {
    src:'img/expression/[dx].png',
    name:'[dx]'
  }, {
    src:'img/expression/[fd].png',
    name:'[fd]'
  }, {
    src:'img/expression/[fh].png',
    name:'[fh]'
  }, {
    src:'img/expression/[gz].png',
    name:'[gz]'
  }, {
    src:'img/expression/[hh].png',
    name:'[hh]'
  }, {
    src:'img/expression/[hx].png',
    name:'[hx]'
  }, {
    src:'img/expression/[jk].png',
    name:'[jk]'
  }, {
    src:'img/expression/[jy].png',
    name:'[jy]'
  }, {
    src:'img/expression/[kb].png',
    name:'[kb]'
  }, {
    src:'img/expression/[kj].png',
    name:'[kj]'
  }, {
    src:'img/expression/[kl].png',
    name:'[kl]'
  }, {
    src:'img/expression/[ku].png',
    name:'[ku]'
  }, {
    src:'img/expression/[lh].png',
    name:'[lh]'
  }, {
    src:'img/expression/[ng].png',
    name:'[ng]'
  }, {
    src:'img/expression/[pz].png',
    name:'[pz]'
  }, {
    src:'img/expression/[qq].png',
    name:'[qq]'
  }, {
    src:'img/expression/[se].png',
    name:'[se]'
  }, {
    src:'img/expression/[shuai].png',
    name:'[shuai]'
  }, {
    src:'img/expression/[tx].png',
    name:'[tx]'
  }, {
    src:'img/expression/[wq].png',
    name:'[wq]'
  }, {
    src:'img/expression/[wx].png',
    name:'[wx]'
  },{
    src:'img/expression/[yun].png',
    name:'[yun]'
  },{
    src:'img/expression/[yw].png',
    name:'[yw]'
  }, {
    src:'img/expression/[yx].png',
    name:'[yx]'
  }, {
    src:'img/expression/[zj].png',
    name:'[zj]'
  }, {
    src:'img/expression/[zk].png',
    name:'[zk]'
  }, {
    src:'img/expression/[zt].png',
    name:'[zt]'
  }];
  return {
    getAll: function(){
      return expressions;
    }
  }
})
;
