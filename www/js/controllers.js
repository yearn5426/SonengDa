angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Activities) {
  $scope.date = 1;
  $scope.activities = Activities.get(1);
  $scope.noActivities = false;
  $scope.selected = [false, true, false, false, false, false, false,
    false, false, false, false, false, false, false];
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
  }
})



.controller('ExpenseClaimCtrl', function($scope, ExpenseClaim, $ionicHistory, $stateParams, $timeout) {
  $scope.isExamine = false;

  $scope.allClaim = ExpenseClaim.getAll();
  $scope.nowClaim = [];
  $scope.doneExamine = false;
  $scope.expenseClaim = ExpenseClaim.getByHead($stateParams.head);

  $scope.refresh = function(){
    for(var i = 0; i < $scope.allClaim.length; i++){
      if($scope.allClaim[i].examine == $scope.isExamine)
        $scope.nowClaim.push($scope.allClaim[i]);
    }
  };

  $scope.refresh();

  $scope.back = function(){
    $ionicHistory.goBack();
  };

  $scope.changeIsExamine = function(){
    $scope.isExamine = !$scope.isExamine;
    $scope.nowClaim = [];
    $scope.refresh();
  };


  $scope.doExamine = function(isApproval){
    for (var i = 0; i < $scope.allClaim.length; i++){
      if ($scope.allClaim[i].head == $stateParams.head){
        $scope.allClaim[i].examine = true;
        $scope.allClaim[i].approval = true;
      }
    }
    $scope.changeIsExamine();
    window.location.href = '#/tab/home/expense-claim';
    // $scope.refresh()
    // $scope.isExamine = !$scope.isExamine;
    // $timeout($scope.refresh(),500);

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

.controller('WorkCircleCtrl', function($scope) {

})

.controller('ActivityDetailCtrl', function($scope, $ionicHistory) {
  $scope.back = function(){
    $ionicHistory.goBack();
  };
})

.controller('MessageCtrl', function($scope, Chats, $ionicHistory) {
  $scope.chats = Chats.getAll();
  $scope.back = function(){
    $ionicHistory.goBack();
  };
})

.controller('MessageDetailCtrl', function($scope, Chats, $stateParams, $ionicHistory) {
  $scope.chat = Chats.getByPeople($stateParams.people);
  $scope.back = function(){
    $ionicHistory.goBack();
  };
})
.controller('DashboardCtrl', function($scope, $ionicHistory) {
  $scope.back = function(){
    $ionicHistory.goBack();
  }
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
            position: 'inside'
          }
        },
        data:[400000, 500000, 500000, 800000, 1000000, 2180000, 2400000, 2500000, 2800000]
      }
    ]
  };
  chart.setOption(option);
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
            position: 'inside'
          }
        },
        data:[1180000, 1500000, 2800000, 4000000, 5800000]
      }
    ]
  };
  chart.setOption(option);
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

.controller('CrmCtrl', function($scope) {
})

.controller('WorkCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
.controller('TeamCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
.controller('MeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
});
