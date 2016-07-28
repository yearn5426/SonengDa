angular.module('starter.controllers', [])

  .controller('ActivityDetailCtrl', function($scope, $ionicHistory, Activities, $stateParams, $rootScope, $state){
    $scope.back = function(){
      $ionicHistory.goBack();
    };


    $scope.activity = Activities.getById($stateParams.ActivityId);

    $scope.goNicheList = function(){
      $state.go('tab.niche-list');
    };
    $scope.goContacts = function(){
      $state.go('tab.contacts');
    };
    $scope.goCustomList = function(){
      $state.go('tab.custom-list');
    };

    $scope.goActivityState = function () {
      var state = $scope.activity.state;
      $state.go('tab.activity-state',{
        'ActivityState':state
      })
    };

    $scope.goAttachmentList = function(){
      $state.go('tab.attachment-list');
    };

    $rootScope.$on('CHANGE_STATE',function(e, param){
      switch (param.stateId){
        case 0:
          $scope.activity.state = '已计划';
          break;
        case 1:
          $scope.activity.state = '进行中';
          break;
        case 2:
          $scope.activity.state = '已结束';
          break;
        case 3:
          $scope.activity.state = '中止';
          break;
        default:
          break;
      }
    });
  })

  .controller('ActivityStateCtrl', function($scope, $ionicHistory, $stateParams, $rootScope){
    $scope.state = [false, false, false, false];

    $scope.state[$stateParams.ActivityState=='已计划'?0:$stateParams.ActivityState=='进行中'?1:$stateParams.ActivityState=='已结束'?2:3] = true;

    $scope.select = function(stateId) {
      for(var i = 0; i < 4; i++)
        $scope.state[i] = false;
      $scope.state[stateId] = true;
    };

    $scope.save = function(){
      var stateId;
      for(var i = 0; i < 4; i++){
        if($scope.state[i] == true)
          stateId = i;
      }
      var param = {
        stateId:stateId
      };
      $rootScope.$broadcast("CHANGE_STATE",param);
      $ionicHistory.goBack();
    };

    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('ActivityRecordCtrl', function($scope, $ionicHistory, $state, Activities) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.activities = Activities.getAll();

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    $scope.goNewActivity = function(){
      $state.go('tab.new-activity');
    };

    $scope.goActivityDetail = function(activityId){
      $state.go('tab.activity-detail',{
        'ActivityId':activityId
      });
    };

    $scope.goActivityMessage = function(activityId){
      $state.go('tab.activity-message',{
        'ActivityId':activityId
      })
    };
  })

  .controller('ActivityMessageCtrl', function($scope, $ionicHistory, $stateParams, Activities) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.editable = false;

    $scope.edit = function(){
      $scope.editable = !$scope.editable;
    };

    $scope.save = function(){
      $scope.editable = !$scope.editable;
    };

    $scope.activity = Activities.getById($stateParams.ActivityId);

  })

  .controller('AttachmentListCtrl', function($scope, $ionicHistory, $state, Attachments) {
    $scope.attachments = Attachments.getAll();

    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.goAttachmentDetail = function(name){
      $state.go('tab.attachment-detail',{
        'AttachmentName':name
      });
    };
    $scope.goNewAttachment = function () {
      $state.go('tab.new-attachment');
    };
  })

  .controller('AttachmentDetailCtrl', function($scope, $ionicHistory, $stateParams, Attachments) {
    $scope.attachment = Attachments.getByName($stateParams.AttachmentName);

    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('AddressListCtrl', function($scope, $state, Contacts, $ionicHistory, $ionicScrollDelegate,  $timeout) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.contacts = Contacts.getAll().sort(function(a, b){
      return pinyin.getCamelChars(a.name)>pinyin.getCamelChars(b.name)? 1: -1;
    });

    $scope.character;

    $scope.charPosition = new Array(26);
    for(var i = 0; i < 26; i++){
      $scope.charPosition[i] = {
        num:0,
        position:0
      }
    }

    for(i = 0; i < $scope.contacts.length; i++){
      $scope.charPosition[pinyin.getCamelChars($scope.contacts[i].name)[0].charCodeAt() - 'A'.charCodeAt()].num += 1;
    }
    $scope.charPosition[0].position = 0;
    for(i = 1; i < 26; i++){
      $scope.charPosition[i].position += $scope.charPosition[i-1].position;
      if($scope.charPosition[i-1].num != 0){
        $scope.charPosition[i].position += 20;
        $scope.charPosition[i].position += $scope.charPosition[i-1].num * 80;
      }
    }

    $scope.goAddressDetail = function(name){
      $state.go('tab.address-detail',{
        'Name':name
      });
    };
    $scope.toChar = function (name) {
      return pinyin.getCamelChars(name)[0];
    };
    $scope.showSplit = function(name){
      var char = pinyin.getCamelChars(name)[0];
      if(!$scope.character){
        $scope.character = char;
        return true;
      } else if($scope.character == char){
        return false;
      } else if($scope.character != char){
        $scope.character = char;
        return true;
      }
    };

    var distance;
    var backSpan = document.getElementsByClassName('nav-back')[0];
    $scope.scrollGo = function(select){
      if(select == 0){
        backSpan.setAttribute('style','transition:all 1s;transform:translateY(0);animation:1s zoom-out;');
        $ionicScrollDelegate.scrollTop();
      } else if(select == 1){
        backSpan.setAttribute('style','transition:all 1s;transform:translateY(89.1vh);animation:1s zoom-out;');
        $ionicScrollDelegate.scrollBottom();
      } else {
        var exist = false;
        for(var i = 0; i < $scope.contacts.length; i++){
          if(select == pinyin.getCamelChars($scope.contacts[i].name)[0])
            exist = true;
        }
        if(exist){
          window.location.hash = '#/tab/me/address-list#' + select;
          $ionicScrollDelegate.anchorScroll();
          distance = select.charCodeAt() - 'A'.charCodeAt() + 1;
          backSpan.setAttribute('style','transition:all 1s;transform:translateY('+ distance*3.3 +'vh);animation:1s zoom-out;');
          $timeout(function () {
            backSpan.setAttribute('style','transform:translateY('+ distance*3.3 +'vh);');
          },1000);
        }
      }
    };
    $scope.onDrag = function(){
      for(var i = 0; i < 26; i++){
        if($ionicScrollDelegate.getScrollPosition().top >= $scope.charPosition[i].position - 40
          && $ionicScrollDelegate.getScrollPosition().top <= $scope.charPosition[i].position + 40
          && $scope.charPosition[i].num != 0){
          if(distance - 1 != i){
            distance = i +1;
            backSpan.setAttribute('style','transition:all 1s;transform:translateY('+ distance*3.3 +'vh);animation:1s zoom-out;');
            $timeout(function () {
              backSpan.setAttribute('style','transform:translateY('+ distance*3.3 +'vh);');
            },1000);
          }
        }
      }
    }
  })

  .controller('AddressDetailCtrl', function($scope, $state, Contacts, $stateParams, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.contact = Contacts.getByName($stateParams.Name);

    // var pinyin = require('pinyin');
    //
    // $scope.contacts.sort(function(a, b){
    //   return pinyin(a.name, {
    //       style:pinyin.STYLE_FIRST_LETTER
    //     }) -  pinyin(b.name, {
    //       style:pinyin.STYLE_FIRST_LETTER
    //     });
    // });
    $scope.goSendMessage = function(){
      $state.go('tab.send-message',{
        'Name':$stateParams.Name
      })
    };
    $scope.phone = function (phoneNumber) {
      window.location.href = 'tel:' + phoneNumber;
    };
  })

  .controller('CrmCtrl', function($scope, $state) {
    $scope.goDashboard = function(){
      $state.go('tab.dashboard');
    };

    $scope.goContacts = function(){
      $state.go('tab.contacts');
    };
    $scope.goScan = function(){
      $state.go('tab.scan')
    };
    $scope.goActivityRecord = function(){
      $state.go('tab.activity-record');
    };
    $scope.goCustomRecord = function(){
      $state.go('tab.custom-record');
    };
    $scope.goCustomDistribution = function () {
      $state.go('tab.custom-distribution');
    };

    $scope.goNicheList = function () {
      $state.go('tab.niche-list');
    };

    $scope.goProductList = function () {
      $state.go('tab.product-list');
    };

    $scope.goQuoteList = function(){
      $state.go('tab.quote-list');
    };

    $scope.goOrderList = function(){
      $state.go('tab.order-list');
    };
  })

  .controller('ContactsCtrl', function($scope, $state, $ionicHistory) {
    $scope.goContactDetail = function(){
      $state.go('tab.contact-detail');
    };

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.goSearch = function(){
      $state.go('tab.search-crm');
    };

    $scope.goNewContact = function(){
      $state.go('tab.new-contact');
    };

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };
  })

  .controller('ContactDetailCtrl', function($scope, $state, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.goNicheList = function(){
      $state.go('tab.niche-list');
    };
    $scope.goActivityRecord = function(){
      $state.go('tab.activity-record');
    };
    $scope.goCustomList = function(){
      $state.go('tab.custom-list');
    };
    $scope.goNewContact = function(){
      $state.go('tab.new-contact');
    };
  })

  .controller('CustomDetailCtrl', function($scope, $ionicHistory, $state, Customs, $stateParams) {
    $scope.custom = Customs.getByName($stateParams.CustomName);

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.goNewCustom = function () {
      $state.go('tab.new-custom');
    }
  })

  .controller('CustomDistributionCtrl', function($scope, $ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.goDistributionCustom = function(distributed){
      $state.go('tab.distribution-custom',{
        'Distributed':distributed
      })
    };

  })

  .controller('CustomListCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('CustomRecordCtrl', function($scope, $ionicHistory, $state, Customs) {
    $scope.customs = Customs.getAll();

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };
    // $scope.onHover = [false, false];
    //
    // $scope.click = function(selected){
    //   $scope.onHover[selected] = true;
    // }
    $scope.goCustomDetail = function(name){
      $state.go('tab.custom-detail',{
        'CustomName':name
      });
    };

    $scope.goNewCustom = function () {
      $state.go('tab.new-custom');
    };
  })

  .controller('ChatSettingCtrl', function($scope, $ionicHistory, $stateParams, Chats) {
    $scope.addOrBuild = '';
    $scope.settings = {
      top:false ,
      notDisturb: false,
      showNickname:true
    };
    $scope.chat = Chats.getByChatName($stateParams.ChatName);
    if($scope.chat.people.length > 2)
      $scope.addOrBuild = '添加成员';
    else
      $scope.addOrBuild = '创建群聊';

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.delete = function(){
      Chats.getAll().pop($scope.chat);
      $ionicHistory.goBack(-2);
    }
  })

  .controller('CollectionCtrl', function($scope, $ionicHistory, Dynamics) {
    $scope.dynamics = Dynamics.getAll();
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.delete = function(dynamic){
      dynamic.collected = false;
    };
  })

  .controller('DashboardCtrl', function($scope, $ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.goSaleFunnel = function(){
      $state.go('tab.sale-funnel');
    };
    $scope.goPerformanceRanking = function(){
      $state.go('tab.performance-ranking');
    };
    $scope.goGoalAchievement = function(){
      $state.go('tab.goal-achievement');
    };
    $scope.goTopNiche = function(){
      $state.go('tab.top-niche');
    };
    $scope.goTopCustom = function(){
      $state.go('tab.top-custom');
    };
    $scope.goKeyNiche = function(){
      $state.go('tab.key-niche');
    };
  })

  .controller('DashboardAggregateCtrl', function($scope) {
    $scope.timesSelected = [false, true, false];

    $scope.data =[[28, 25, 36, 30, 31, 28, 25, 30, 21, 22, 25, 29],
      [20, 25, 31, 34, 35, 33, 29, 26, 30, 28, 25, 22],
      [31, 33, 36, 28, 33, 29, 25, 22, 20, 25, 27, 30]];

    //绘制销售额趋势柱状图
    $scope.drawTrendChart = function(dataId){
      var trendChart = echarts.init(document.getElementsByClassName('echarts-trend')[0]);
      var trendOption = {
        color:['rgb(7,156,246)'],
        title: {
          text: '销售额趋势',
          left:'center'
        },
        tooltip: {},
        xAxis: {
          data: ["1","2","3","4","5","6","7","8","9","10","11","12"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: $scope.data[dataId]
        }]
      };
      trendChart.setOption(trendOption);
    };
    $scope.drawTrendChart(1);

    //绘制销售漏斗
    $scope.drawFunnelChart = function(){
      var funnelChart = echarts.init(document.getElementsByClassName('echarts-funnel')[0]);
      var funnelOption = {
        title: {
          text: '销售漏斗',
          left:'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        calculable: true,
        series: [
          {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 30,
            max: 100,
            minSize: '30%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
              normal: {
                show: true,
                position: 'inside'
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: [
              {value: 50},
              {value: 70},
              {value: 90}
            ]
          }
        ]
      };
      funnelChart.setOption(funnelOption);
    };
    $scope.drawFunnelChart();

    $scope.selectTimes = function(selected){
      $scope.drawTrendChart(selected);
      if($scope.timesSelected[selected] == false){
        for(var i = 0; i < 3; i++)
          $scope.timesSelected[i] = false;
        $scope.timesSelected[selected] = true;
      }
    }
  })

  .controller('DistributionCustomCtrl', function($scope, $ionicHistory, $state, Customs, $stateParams) {
    $scope.distributed = $stateParams.Distributed;

    if($scope.distributed)
      $scope.title = 'Distributed Custom';
    else
      $scope.title = 'Undistributed Custom';
    $scope.customs = Customs.getAll();

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    $scope.goCustomDetail = function(name){
      $state.go('tab.custom-detail',{
        'CustomName':name
      });
    };


    $scope.goNewCustom = function () {
      $state.go('tab.new-custom');
    };

  })

  .controller('ExpenseClaimCtrl', function($scope, ExpenseClaim, $ionicHistory, $state, $rootScope) {
    $scope.refresh = function(){
      $scope.nowClaim = [];
      for(var i = 0; i < $scope.allClaim.length; i++){
        if($scope.allClaim[i].examine == $scope.isExamine)
          $scope.nowClaim.push($scope.allClaim[i]);
      }
    };

    $scope.isExamine = false;
    $scope.allClaim = ExpenseClaim.getAll();
    $scope.nowClaim = [];

    $scope.refresh();

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.changeIsExamine = function(selceted){
      if ($scope.isExamine == !selceted){
        $scope.isExamine = !$scope.isExamine;
      }
      $scope.refresh();
    };


    $scope.goDetail = function(expenseClaimHead){
      $state.go('tab.expense-claim-detail',{
        'ExpenseClaimHead':expenseClaimHead
      });
    };

    $rootScope.$on("DONE_EXAMINE", function(e, param){
      for(var i = 0; i < $scope.allClaim.length; i++){
        if($scope.allClaim[i].head == param.head){
          $scope.allClaim[i].examine = true;
          $scope.allClaim[i].approval = param.approval;
        }
      }
      $scope.isExamine = !$scope.isExamine;
      $scope.refresh();
    });
  })

  .controller('ExpenseClaimDetailCtrl', function($scope, ExpenseClaim, $ionicHistory, $stateParams, $rootScope) {
    $scope.expenseClaim = ExpenseClaim.getByHead($stateParams.ExpenseClaimHead);

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.doExamine = function(isApproval){
      var param = {
        head:$stateParams.ExpenseClaimHead,
        approval:isApproval
      };
      $rootScope.$broadcast("DONE_EXAMINE",param);
      $ionicHistory.goBack();
    };
  })

  .controller('ExpenseShorthandCtrl', function($scope, $ionicHistory, $state, $rootScope, ionicDatePicker) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.goMap = function () {
      $state.go('tab.map');
    };
    $scope.data = {
      address:'',
      date:''
    };
    $rootScope.$on('SAVE_POSITION', function(e, param){
      $scope.data.address = param.position;
    });

    var calendar = {
      callback: function (val) {  //Mandatory
        var date = new Date(val);
        $scope.data.date = date.getFullYear() + '-' + date.getMonth() + '-'+ date.getDate();
      },
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(calendar);
    };
  })

  .controller('ExpenseQueryCtrl', function($scope, $ionicHistory, $state) {
    $scope.back = function(){
      $state.go('tab.work');
    };

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    $scope.goExpenseClaimShow = function(){
      $state.go('tab.expense-claim-show')
    };
    $scope.goNewExpense = function () {
      $state.go('tab.new-expense');
    };
  })

  .controller('ExpenseChartCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    // $scope.build = function () {
    //   $state.go('tab.submit-expense-claim');
    // };
    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    var departmentExpenseChart = echarts.init(document.getElementsByClassName('department-expense')[0]);
    var departmentExpenseOption = {
      legend: {
        x : 'center',
        y : 'bottom',
        data:['华东区','华北区','华中区','华南区']
      },
      calculable : true,
      series : [
        {
          name:'面积模式',
          type:'pie',
          radius : [30, 100],
          roseType : 'area',
          data:[
            {value:10, name:'华东区'},
            {value:5, name:'华北区'},
            {value:15, name:'华中区'},
            {value:25, name:'华南区'}
          ]
        }
      ]
    };
    departmentExpenseChart.setOption(departmentExpenseOption);

    var expenseTypeChart = echarts.init(document.getElementsByClassName('expense-type')[0]);
    var expenseTypeOption = {
      legend: {
        x : 'center',
        y : 'bottom',
        data:['差旅费','日常管理','行政采购','杂项']
      },
      calculable : true,
      series : [
        {
          name:'面积模式',
          type:'pie',
          radius : [30, 100],
          roseType : 'area',
          data:[
            {value:10, name:'差旅费'},
            {value:12, name:'日常管理'},
            {value:15, name:'行政采购'},
            {value:30, name:'杂项'}
          ]
        }
      ]
    };
    expenseTypeChart.setOption(expenseTypeOption);
  })

  .controller('ExpenseClaimShowCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('GoalAchievementCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    var chart = echarts.init(document.getElementsByClassName('chart')[0]);
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type : 'value',
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
      ],
      yAxis : [
        {
          type : 'category',
          data : ['郭小明','杨丽','师洋','毛一环','陈开','张冉'],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              top:15,
              fontSize: 15
            }
          }
        }
      ],
      series : [
        {
          name:'件数',
          type:'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data:[1, 1, 1, 1, 2, 3]
        }
      ]
    };
    chart.setOption(option);
  })

  .controller('HomeCtrl', function($scope, Activities, $state, Chats, $rootScope, ExpenseClaim, $timeout) {

    $scope.date = 1;
    $scope.activities = Activities.get(1);
    $scope.noActivities = false;
    $scope.selected = [false, true, false, false, false, false, false,
      false, false, false, false, false, false, false];
    $scope.search ='';
    $scope.chats = Chats.getAll();
    $scope.messageNum = 0;
    $scope.claimNum = 0;
    $scope.expenseClaim = ExpenseClaim.getAll();

    for(var i = 0; i < $scope.chats.length; i++){
      $scope.messageNum += parseInt($scope.chats[i].messageNum);
    }

    for(i = 0; i < $scope.expenseClaim.length; i++){
      if($scope.expenseClaim[i].examine == false)
        $scope.claimNum++;
    }

    $scope.chooseDate= function(date){
      $scope.activities = Activities.get(date);
      $scope.noActivities = !Activities.get(date);
      for(var i = 0; i < 14; i++){
        $scope.selected[i] = false;
      }
      if (date == 31)
        $scope.selected[0] = true;
      else
        $scope.selected[date] = true;
    };

    $scope.goExpenseClaim = function(){
      $state.go('tab.expense-claim-home');
    };

    $scope.goMessage = function(){
      $state.go('tab.message-home');
    };

    $scope.goActivityDetail = function(activityId){
      $state.go('tab.activity-detail-home',{
        'ActivityId':activityId
      });
    };

    $scope.goSearchResult = function(){
      $state.go('tab.search-result');
    };

    $scope.goContacts = function(){
      $state.go('tab.contacts-home');
    };

    $scope.goScan = function(){
      $state.go('tab.scan-home')
    };

    $rootScope.$on('CHANGE_MESSAGE_NUM', function(){
      $scope.messageNum = 0;
      for(var i = 0; i < $scope.chats.length; i++){
        $scope.messageNum += parseInt($scope.chats[i].messageNum);
      }
    })

    $rootScope.$on('DONE_EXAMINE', function(){
      $timeout(function(){
        $scope.claimNum = 0;
        for( var i = 0; i < $scope.expenseClaim.length; i++){
          if($scope.expenseClaim[i].examine == false)
            $scope.claimNum++;
        }
      },1000);
    })
  })

  .controller('KeyNicheCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    var chart = echarts.init(document.getElementsByClassName('chart')[0]);
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type : 'value',
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
      ],

      legend: {
        data:['利润', '赢率']
      },
      yAxis : [
        {
          type : 'category',
          data : ['暴雪','阿里巴巴科技公司'],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              top:15,
              fontSize: 12
            }
          }
        }
      ],
      series : [{
        name:'利润',
        type:'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data:[150, 280]
      }, {
        name:'赢率',
        type:'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data:[60, 30]
      }
      ]
    };
    chart.setOption(option);
  })

  .controller('MeCtrl', function($scope, $state, Me) {
    $scope.me = Me.get();
    $scope.goMyInformation = function(){
      $state.go('tab.my-information');
    };
    $scope.goPasswordSetting = function(){
      $state.go('tab.password-setting');
    };
    $scope.goCollection = function(){
      $state.go('tab.collection');
    };
    $scope.goAddressList = function () {
      $state.go('tab.address-list');
    };
    $scope.goSendEmail = function () {
      $state.go('tab.send-email');
    }
  })

  .controller('MapCtrl', function($scope, $state, $ionicHistory, $rootScope) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.position = {
      there:''
    };

    var map = new AMap.Map('container', {
      zoom:10,
      center:[116.39,39.9]
    });
    var marker = new AMap.Marker({
      position: [116.480983, 39.989628],
      map:map
    });

    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){

      var toolBar = new AMap.ToolBar({
        autoPosition:true
      });
      map.addControl(toolBar);
    });

    AMap.service('AMap.Geocoder',function(){//回调函数
      //实例化Geocoder
      geocoder = new AMap.Geocoder({
        city: "010"//城市，默认：“全国”
      });
    });
    map.on('click', function(e){
      var lnglatXY=[e.lnglat.getLng(), e.lnglat.getLat()];//地图上所标点的坐标
      geocoder.getAddress(lnglatXY, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          $scope.position.there = result.regeocode.formattedAddress;
          marker.setPosition(lnglatXY);
          $scope.$apply();
        }else{
          console.log('获取地址失败');
        }
      });
    });
    $scope.savePosition = function(){
      var param = {
        position: $scope.position.there
      };
      $rootScope.$broadcast("SAVE_POSITION",param);
      $ionicHistory.goBack();
    }
  })

  .controller('MessageCtrl', function($scope, Chats, $ionicHistory, $state, $stateParams, $rootScope) {
    $scope.select = $stateParams.Select;
    $scope.personOrGroup = function(peopleNum){
      if($scope.select == 0){
        return true;
      } else if($scope.select == 1 && peopleNum == 2){
        return true;
      } else if($scope.select == 2 && peopleNum > 2){
        return true;
      } else
        return false;
    };
    $scope.chats = Chats.getAll();
    $scope.back = function(){
      $ionicHistory.goBack();
      $rootScope.$broadcast('CHANGE_MESSAGE_NUM');
    };
    $scope.goMessageDetail = function(chatName){
      $state.go('tab.message-detail',{
        'ChatName':chatName
      })
    };
    $scope.goSearch = function(){
      $state.go('tab.search');
    };
  })

  .controller('MessageDetailCtrl', function($scope, Chats, $stateParams, $ionicHistory, $state, Expressions, $ionicScrollDelegate) {
    $scope.chat = Chats.getByChatName($stateParams.ChatName);
    $scope.expressions = Expressions.getAll();
    $scope.showExpression = false;
    $scope.back = function(){
      $ionicHistory.goBack();
      $scope.chat.messageNum = 0;
    };
    $scope.msg = {
      msg:''
    };

    var pattern= /\.bs|\.db|\.dk|\.dx|\.fd|\.fh|\.gz|\.hh|\.hx|\.jk|\.jy|\.kb|\.kj|\.kl|\.ku|\.lh|\.ng|\.pz|\.qq|\.se|\.shuai|\.tx|\.wq|\.wx|\.yun|\.yw|\.yx|\.zj|\.zk|\.zt/g;
    var regExp  = new RegExp(pattern);
    $scope.goChatSetting = function(){
      $state.go('tab.chat-setting', {
        'ChatName':$stateParams.ChatName
      });
    };
    $scope.send = function(){
      var newmsg = $scope.msg.msg.replace(regExp,"<img class='content-expression' src='img/expression/$&.png'>");
      var ionList = document.getElementsByClassName('message-list')[0];
      var list = ionList.childNodes[0];
      var ionItem = document.createElement('ion-item');
      ionItem.setAttribute('class', 'item');
      var div = document.createElement('div');
      div.setAttribute('class', 'send');
      var img = document.createElement('img');
      img.setAttribute('src', 'img/me.jpg');
      var span = document.createElement('span');
      span.innerHTML = newmsg;
      div.appendChild(img);
      div.appendChild(span);
      ionItem.appendChild(div);
      list.appendChild(ionItem);
      $scope.msg.msg = '';
      $scope.showExpression = false;
      $ionicScrollDelegate.scrollBottom();
    };
    $scope.addExpression = function(name) {
      $scope.msg.msg += name;
    };
    $scope.openExpression = function(){
      $scope.showExpression = !$scope.showExpression;
    }
  })

  .controller('MyInformationCtrl', function($scope, Chats, $ionicHistory, Me) {
    $scope.me = Me.get();

    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.showTool = false;

    $scope.show = function () {
      $scope.showTool=!$scope.showTool?true:true;
    };
    $scope.close = function () {
      $scope.showTool=$scope.showTool?false:false;
    };
  })

  .controller('NewNicheCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('NewContactCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('NewActivityCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('NewCustomCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('NewAttachmentCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.showTool = false;

    $scope.show = function () {
        $scope.showTool=!$scope.showTool?true:true;
    };
    $scope.close = function () {
      $scope.showTool=$scope.showTool?false:false;
    };
  })

  .controller('NewExpenseCtrl', function($scope, $ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.goNewExpenseDetail = function(){
      $state.go('tab.new-expense-detail');
    };
  })

  .controller('NewExpenseDetailCtrl', function($scope, $ionicHistory, $state, $rootScope, ionicDatePicker) {
    $scope.data={
      address:'',
      startDate:'',
      endDate:''
    };
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.save = function () {
      $state.go('tab.new-expense-claim');
    };
    $scope.again = function () {
      $state.go('tab.new-expense-detail');
    };
    $rootScope.$on('SAVE_POSITION', function(e, param){
      $scope.address.address = param.position;
    });
    $scope.goMap = function () {
      $state.go('tab.map');
    };

    var startCalendar = {
      callback: function (val) {  //Mandatory
        var date = new Date(val);
        $scope.data.startDate = date.getFullYear() + '-' + date.getMonth() + '-'+ date.getDate();
      },
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openStartCalendar = function(){
      ionicDatePicker.openDatePicker(startCalendar);
    };
    var endCalendar = {
      callback: function (val) {  //Mandatory
        var date = new Date(val);
        $scope.data.endDate = date.getFullYear() + '-' + date.getMonth() + '-'+ date.getDate();
      },
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openEndCalendar = function(){
      ionicDatePicker.openDatePicker(endCalendar);
    };
  })

  .controller('NewExpenseClaimCtrl', function($scope, $ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.build = function () {
      $state.go('tab.submit-expense-claim');
    };
  })

  .controller('NicheListCtrl', function($scope, $ionicHistory, $state, Niches) {
    $scope.niches = Niches.getAll();

    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    $scope.goNicheDetail = function(name){
      $state.go('tab.niche-detail',{
        'NicheName':name
      })
    };
    $scope.goNewNiche = function () {
      $state.go('tab.new-niche');
    };
  })

  .controller('NicheDetailCtrl', function($scope, $ionicHistory, Niches, $stateParams, $state, $rootScope) {
    $scope.niche = Niches.getByName($stateParams.NicheName);
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.goNicheStage = function(){
      $state.go('tab.niche-stage',{
        'NicheStage':$scope.niche.stage
      })
    };

    $rootScope.$on('CHANGE_STAGE',function(e, param){
      switch (param.stageId){
        case 0:
          $scope.niche.stage = '初步接洽(10%)';
          break;
        case 1:
          $scope.niche.stage = '需求确定(30%)';
          break;
        case 2:
          $scope.niche.stage = '方案/报价(60%)';
          break;
        case 3:
          $scope.niche.stage = '商务谈判(80%)';
          break;
        case 4:
          $scope.niche.stage = '赢单(100%)';
          break;
        case 5:
          $scope.niche.stage = '输单(0%)';
          break;
        default:
          break;
      }
    });
    $scope.goNewNiche = function () {
      $state.go('tab.new-niche');
    };

  })

  .controller('NicheStageCtrl', function($scope, $ionicHistory, $stateParams, $rootScope){
    $scope.stage = [false, false, false, false, false, false];

    switch($stateParams.NicheStage){
      case '初步接洽(10%)':
        $scope.stage[0] = true;
        break;
      case '需求确定(30%)':
        $scope.stage[1] = true;
        break;
      case '方案/报价(60%)':
        $scope.stage[2] = true;
        break;
      case '商务谈判(80%)':
        $scope.stage[3] = true;
        break;
      case '赢单(100%)':
        $scope.stage[4] = true;
        break;
      case '输单(0%)':
        $scope.stage[5] = true;
        break;
      default:
        break;
    }

    $scope.select = function(stateId) {
      for(var i = 0; i < 6; i++)
        $scope.stage[i] = false;
      $scope.stage[stateId] = true;
    };

    $scope.save = function(){
      var stageId;
      for(var i = 0; i < 6; i++){
        if($scope.stage[i] == true)
          stageId = i;
      }
      var param = {
        stageId:stageId
      };
      $rootScope.$broadcast("CHANGE_STAGE",param);
      $ionicHistory.goBack();
    };

    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('OrderListCtrl', function($scope, $ionicHistory, $state, Orders) {
    $scope.orders = Orders.getAll();

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    $scope.goOrderDetail = function(name){
      $state.go('tab.order-detail',{
        'OrderName':name
      });
    };
  })

  .controller('OrderDetailCtrl', function($scope, $ionicHistory, $state, Orders, $stateParams) {
    $scope.order = Orders.getByName($stateParams.OrderName);

    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('PerformanceRankingCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    var chart = echarts.init(document.getElementsByClassName('chart')[0]);
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type : 'value',
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
      ],
      yAxis : [
        {
          type : 'category',
          data : ['郭小明','韩寒','郭涛','雷锋','杨丽','师洋','毛一环','陈开','张冉'],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              top:15,
              fontSize: 15
            }
          }
        }
      ],
      series : [
        {
          name:'业绩',
          type:'bar',
          label: {
            normal: {
              show: true,
              position: ['70%',5],
              textStyle: {
                color:'#000'
              }
            }
          },
          data:[400000, 500000, 500000, 800000, 1000000, 2180000, 2400000, 2500000, 2800000]
        }
      ]
    };
    chart.setOption(option);
  })

  .controller('ProductListCtrl', function($scope, $ionicHistory, Products, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.products = Products.getAll();

    $scope.goProductDetail = function (name) {
      $state.go('tab.product-detail',{
        'ProductName':name
      })
    }
  })

  .controller('ProductDetailCtrl', function($scope, $ionicHistory, Products, $stateParams) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.product = Products.getByName($stateParams.ProductName);
  })

  .controller('PasswordSettingCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('QuoteListCtrl', function($scope, $ionicHistory, $state, Quotes) {
    $scope.quotes = Quotes.getAll();

    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.showTool = [false, false];

    $scope.show = function(index){
      if($scope.showTool[index]){
        $scope.showTool[index] = false;
      } else {
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
        if(!$scope.showTool[index]){
          $scope.showTool[index] = true;
        }
      }
    };

    $scope.close = function() {
      if($scope.showTool[0] || $scope.showTool[1]){
        $scope.showTool[0] = false;
        $scope.showTool[1] = false;
      }
    };

    $scope.goQuoteDetail = function(name){
      $state.go('tab.quote-detail',{
        'QuoteName':name
      });
    };
  })

  .controller('QuoteDetailCtrl', function($scope, $ionicHistory, $state, Quotes, $stateParams) {
    $scope.quote = Quotes.getByName($stateParams.QuoteName);

    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('SearchCtrl', function($scope,$ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.goSearchResult = function(){
      $state.go('tab.search-result-crm');
    };
  })

  .controller('SearchResultCtrl', function($scope,$ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.goMessageDetail = function(people){
      $state.go('tab.message-detail',{
        'People':people
      })
    };

    $scope.goActivityDetail = function(){
      $state.go('tab.activity-detail');
    };
  })

  .controller('ScanCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('SaleFunnelCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    var chart = echarts.init(document.getElementsByClassName('chart')[0]);
    var option = {

      title: {
        text: '开启的商机',
        textStyle: {
          fontWeight: 'normal',
          top:15,
          fontSize: 15
        }
      },
      calculable: true,
      legend: {
        bottom:5,
        textStyle: {
          fontWeight: 'normal',
          top:15,
          fontSize: 15
        },
        data: ['2-开发阶段','3-方案建议','4-方案证明','5-签订合同']
      },
      series: [
        {
          name:'漏斗图',
          type:'funnel',
          left: '13%',
          top: 60,
          bottom: 60,
          width: '60%',
          min: 20,
          max: 100,
          minSize: '10%',
          maxSize: '100%',
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1
            }
          },
          data: [
            {value: 40, name:'5-签订合同'},
            {value: 60, name:'4-方案证明'},
            {value: 80, name:'3-方案建议'},
            {value: 100, name:'2-开发阶段'}
          ]
        }
      ]
    };
    chart.setOption(option);
  })

  .controller('SubmitExpenseClaimCtrl', function($scope, $ionicHistory, $state) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    $scope.submit = function () {
      $state.go('tab.expense-query');
    };

  })

  .controller('SynergyCtrl', function($scope, $state, Chats, $rootScope) {
    $scope.goWorkCircle = function(){
      $state.go('tab.work-circle');
    };
    $scope.goChat = function(select){
      $state.go('tab.message', {
        'Select':select
      });
    };
    $scope.chats = Chats.getAll();
    $scope.privateMessageNum = 0;
    $scope.groupMessageNum = 0;

    for(var i = 0; i < $scope.chats.length; i++){
      if($scope.chats[i].people.length > 2)
        $scope.groupMessageNum += parseInt($scope.chats[i].messageNum);
      else
        $scope.privateMessageNum += parseInt($scope.chats[i].messageNum)
    }
    $rootScope.$on('CHANGE_MESSAGE_NUM', function(){
      $scope.privateMessageNum = 0;
      $scope.groupMessageNum = 0;
      for(var i = 0; i < $scope.chats.length; i++){
        if($scope.chats[i].people.length > 2)
          $scope.groupMessageNum += parseInt($scope.chats[i].messageNum);
        else
          $scope.privateMessageNum += parseInt($scope.chats[i].messageNum)
      }
    })
  })

  .controller('SendEmailCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
  })

  .controller('SendMessageCtrl', function($scope, $ionicHistory, $stateParams) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.name = $stateParams.Name;
  })

  .controller('TabCtrl', function($scope, $state) {
  $scope.$on('$ionicView.beforeEnter', function(){
    var currentViewName = $state.current.name;
    if(currentViewName != 'tab.home' && currentViewName != 'tab.crm' && currentViewName != 'tab.work' && currentViewName != 'tab.synergy' && currentViewName != 'tab.me'){
      $scope.hideTabs = true;
    }
  });
  $scope.$on('$ionicView.afterEnter', function () {
    var currentViewName = $state.current.name;
    if(currentViewName == 'tab.home' || currentViewName == 'tab.crm' || currentViewName == 'tab.work' || currentViewName == 'tab.synergy' || currentViewName == 'tab.me'){
      $scope.hideTabs = false;
    }
  });
})

  .controller('TopNicheCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    var chart = echarts.init(document.getElementsByClassName('chart')[0]);
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type : 'value',
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
      ],
      yAxis : [
        {
          type : 'category',
          data : ['北京分公司建设项目','上海分公司建设项目','深圳总公司建设项目','源氏培训项目','集团总部电力设施切换','守望先锋开发项目','上建集团零星采购','北京园区翻新项目','杭州园区翻新项目'],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              top:15,
              fontSize: 10
            }
          }
        }
      ],
      series : [
        {
          name:'金额',
          type:'bar',
          label: {
            normal: {
              show: true,
              position: ['70%',5],
              textStyle: {
                color:'#000'
              }
            }
          },
          data:[75000, 750000, 750000, 800000, 1180000, 1500000, 2800000, 4000000, 5800000]
        }
      ]
    };
    chart.setOption(option);
  })

  .controller('TopCustomCtrl', function($scope, $ionicHistory) {
    $scope.back = function(){
      $ionicHistory.goBack();
    };

    var chart = echarts.init(document.getElementsByClassName('chart')[0]);
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type : 'value',
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            show:false
          },
          splitLine:{
            show:false
          }
        }
      ],
      yAxis : [
        {
          type : 'category',
          data : ['华润万家','上海建工','深圳万科','暴雪','阿里巴巴科技公司'],
          axisLine:{
            show:false
          },
          axisTick:{
            show:false
          },
          splitLine:{
            show:false
          },
          axisLabel: {
            textStyle: {
              fontWeight: 'normal',
              top:15,
              fontSize: 12
            }
          }
        }
      ],
      series : [
        {
          name:'金额',
          type:'bar',
          label: {
            normal: {
              show: true,
              position: ['70%',5],
              textStyle: {
                color:'#000'
              }
            }
          },
          data:[1180000, 1500000, 2800000, 4000000, 5800000]
        }
      ]
    };
    chart.setOption(option);
  })

  .controller('WorkCtrl', function($scope, $state) {
    $scope.goExpenseShort = function () {
      $state.go('tab.expense-shorthand')
    };
    $scope.goNewExpense = function () {
      $state.go('tab.new-expense')
    };
    $scope.goExpenseQuery = function () {
      $state.go('tab.expense-query');
    };
    $scope.goNewExpense = function () {
      $state.go('tab.new-expense');
    };
    $scope.goExpenseClaim = function(){
      $state.go('tab.expense-claim');
    };
    $scope.goExpenseChart = function(){
      $state.go('tab.expense-chart');
    };
  })

  .controller('WorkCircleCtrl', function($scope, $ionicHistory, Dynamics, $ionicScrollDelegate) {
    $scope.dynamics = Dynamics.getAll();
    $scope.back = function(){
      $ionicHistory.goBack();
    };
    $scope.collect = function(dynamic){
      dynamic.collected = !dynamic.collected;
    };
    $scope.edit = function(dynamic){
      dynamic.edit = !dynamic.edit;
    };
    $scope.like = function(dynamic){
      dynamic.like = !dynamic.like;
    };
    $scope.comment = {
      comment:''
    };
    $scope.send = function(dynamic){
      var comment = {
        people:'我',
        content: $scope.comment.comment
      };
      dynamic.comment.push(comment);
      $scope.comment.comment = '';
    };

    $scope.scale = 1.005;
    $scope.filterNum = 1;
    $scope.opacity = 1;
    var flag = 0;
    $scope.onDragDown = function(){
      flag++;
      var dynamicContainer = document.getElementsByClassName('dynamic-container')[0];
      var backgroundImage = document.getElementsByClassName('background-img')[0];
      var me = document.getElementById('me');
      if(flag % 5 == 0){
        if(flag % 40 == 0){
          if($scope.filterNum > 0.25){
            $scope.filterNum -= 0.25;
          }
        }
        if($scope.opacity >= 0)
          $scope.opacity -= 0.1;
      }
      me.setAttribute('style','opacity:'+$scope.opacity);
      dynamicContainer.setAttribute('style', 'transform:translateY('+($scope.scale - 1 )*35+'vw)');
      backgroundImage.setAttribute('style','transform:scale('+$scope.scale+','+$scope.scale+');-webkit-filter:blur('+$scope.filterNum+'px)');
      if($scope.scale<1.5){
        $scope.scale += 0.005;
      }
    };
    $scope.onRelease = function(){
      flag = 0;
      var backgroundImage = document.getElementsByClassName('background-img')[0];
      var dynamicContainer = document.getElementsByClassName('dynamic-container')[0];
      var me = document.getElementById('me');
      backgroundImage.setAttribute('style','');
      dynamicContainer.setAttribute('style', '');
      me.setAttribute('style','');
      $scope.filterNum = 1;
      $scope.scale = 1.005;
      $scope.opacity = 1;
    };
  })

;
