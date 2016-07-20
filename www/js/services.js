angular.module('starter.services', [])



.factory('Activities', function() {
  //存储活动数据
  var activities = [{
    date: 1,
    concreteActivities: [{
      activityId:'1',
      time: '08:00 - 10:00',
      content: '拜访张总',
      completed: true
    },{
      activityId:'2',
      time: '11:00 - 12:00',
      content: '新产品展览',
      completed: true
    },{
      activityId:'3',
      time: '15:00 - 16:00',
      content: '总结大会',
      completed: false
    }]
  },{
    date: 3,
    concreteActivities: [{
      activityId:'1',
      time: '08:00 - 10:00',
      content: 'Coding',
      completed: true
    },{
      activityId:'2',
      time: '11:00 - 12:00',
      content: '吃饭',
      completed: true
    },{
      activityId:'3',
      time: '15:00 - 16:00',
      content: 'Coding',
      completed: false
    }]
  },{
    date: 5,
    concreteActivities: [{
      activityId:'1',
      time: '08:00 - 10:00',
      content: '起床?',
      completed: true
    },{
      activityId:'2',
      time: '11:00 - 12:00',
      content: '出去玩?',
      completed: true
    },{
      activityId:'3',
      time: '15:00 - 16:00',
      content: '吃东西',
      completed: false
    }]
  },{
    date: 12,
    concreteActivities: [{
      activityId:'1',
      time: '08:00 - 10:00',
      content: '出去玩',
      completed: true
    },{
      activityId:'2',
      time: '11:00 - 12:00',
      content: '吃大餐',
      completed: true
    },{
      activityId:'3',
      time: '15:00 - 16:00',
      content: '玩',
      completed: false
    }]
  }];
  return {
    get: function(date){
      for (var i = 0; i < activities.length; i++){
        if (activities[i].date == date){
          return activities[i].concreteActivities;
        }
      }
      return null;
    },
    all: function(){
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
    var chats = [{
      people:'张冉',
      messageNum:'1',
      date:'2015-11-11',
      time:'16:00',
      face:'img/mike.png',
      message:[
        'Hey'
      ]
    }, {
      people:'陈东',
      messageNum:'2',
      date:'2015-11-12',
      time:'17:00',
      face:'img/max.png',
      message:[
        'Hey',
        '玩得开心'
      ]
    }, {
      people:'讨论组',
      messageNum:'3',
      date:'2015-11-12',
      time:'18:00',
      face:'img/perry.png',
      message:[
        '我的天',
        '还有讨论组',
        '这个我不写了,太麻烦了,太麻烦了,太麻烦了'
      ]
    }, {
      people:'销售管理组',
      messageNum:'4',
      date:'2015-11-11',
      time:'19:00',
      face:'img/ben.png',
      message:[
        '好多要做啊',
        '怎么这么多页面',
        '谁能告诉我',
        '好多啊!!!!'
      ]
    }];
    return {
      getAll: function(){
        return chats;
      },
      getByPeople: function(people){
        for(var i = 0; i < chats.length; i++){
          if(chats[i].people == people)
            return chats[i];
        }
        return null;
      }
    }
  })
;