// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'starter.services', 'ionic-datepicker'])

.run(function($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  $ionicPlatform.registerBackButtonAction(function (e) {
    //判断处于哪个页面时双击退出
    if ($location.path() == '/tab/home'||$location.path() == '/tab/crm'||$location.path() == '/tab/me'||
      $location.path() == '/tab/synergy'||$location.path() == '/tab/work'||$location.path() == '/tab/lock') {
      if ($rootScope.backButtonPressedOnceToExit) {
        ionic.Platform.exitApp();
      } else {
        $rootScope.backButtonPressedOnceToExit = true;
        $rootScope.$broadcast('SHOW_RETURN');
        setTimeout(function () {
          $rootScope.backButtonPressedOnceToExit = false;
        }, 2000);
      }
    }
    else if ($ionicHistory.backView()) {
      $ionicHistory.goBack();
    }
    // else {
    //   $rootScope.backButtonPressedOnceToExit = true;
    //   setTimeout(function () {
    //     $rootScope.backButtonPressedOnceToExit = false;
    //   }, 2000);
    // }
    e.preventDefault();
    return false;
  }, 101);
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, ionicDatePickerProvider) {
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  var dataPickerObj = {
    inputDate:new Date(),
    setLabel:'Set',
    todayLabel:'Today',
    closeLabel:'Close',
    mondayFirst:false,
    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    templateType: 'popup',
    from: new Date(2012, 8, 1),
    to: new Date(2018, 8, 1),
    showTodayButton: true,
    dateFormat: 'yyyy-MMMM-dd',
    closeOnSelect: false
  };
  ionicDatePickerProvider.configDatePicker(dataPickerObj);
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller:'TabCtrl'
  })

  // Each tab has its own nav history stack:

    .state('tab.activity-detail', {
      url: '/crm/activity-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/activity-detail.html',
          controller: 'ActivityDetailCtrl'
        }
      },
      params: {
        'ActivityId':''
      }
    })

    .state('tab.activity-state', {
      url: '/crm/activity-state',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/activity-state.html',
          controller: 'ActivityStateCtrl'
        }
      },
      params: {
        'ActivityState':''
      }
    })

    .state('tab.activity-detail-home', {
      url: '/home/activity-detail',
      views: {
        'tab-home': {
          templateUrl: 'templates/CRM/Activity/activity-detail.html',
          controller: 'ActivityDetailCtrl'
        }
      },
      params: {
        'ActivityId':''
      }
    })

    .state('tab.activity-record', {
      url: '/crm/activity-record',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/activity-record.html',
          controller: 'ActivityRecordCtrl'
        }
      }
    })

    .state('tab.activity-message', {
      url: '/crm/activity-message',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/activity-message.html',
          controller: 'ActivityMessageCtrl'
        }
      },
      params: {
        'ActivityId':''
      }
    })

    .state('tab.attachment-list',{
      url: '/crm/attachment-list',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/attachment-list.html',
          controller: 'AttachmentListCtrl'
        }
      }
    })

    .state('tab.attachment-detail',{
      url: '/crm/attachment-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/attachment-detail.html',
          controller: 'AttachmentDetailCtrl'
        }
      },
      params: {
        'AttachmentName':''
      }
    })

    .state('tab.address-list',{
      url: '/me/address-list',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/address-list.html',
          controller: 'AddressListCtrl'
        }
      }
    })

    .state('tab.address-detail',{
      url: '/me/address-detail',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/address-detail.html',
          controller: 'AddressDetailCtrl'
        }
      },
      params:{
        'Name':''
      }
    })

    .state('tab.crm', {
      url: '/crm',
      views: {
        'tab-crm': {
          templateUrl: 'templates/tab-crm.html',
          controller: 'CrmCtrl'
        }
      }
    })

    .state('tab.contacts', {
      url: '/crm/contacts',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/contacts.html',
          controller: 'ContactsCtrl'
        }
      }
    })

    .state('tab.contacts-home', {
      url: '/home/contacts',
      views: {
        'tab-home': {
          templateUrl: 'templates/CRM/contacts.html',
          controller: 'ContactsCtrl'
        }
      }
    })

    .state('tab.contact-detail', {
      url: '/crm/contact-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Contacts/contact-detail.html',
          controller: 'ContactDetailCtrl'
        }
      }
    })

    .state('tab.custom-distribution', {
      url: '/crm/custom-distribution',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/custom-distribution.html',
          controller: 'CustomDistributionCtrl'
        }
      }
    })

    .state('tab.custom-list', {
      url: '/crm/custom-list',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Contacts/custom-list.html',
          controller: 'CustomListCtrl'
        }
      }
    })

    .state('tab.custom-record', {
      url: '/crm/custom-record',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/custom-record.html',
          controller: 'CustomRecordCtrl'
        }
      }
    })

    .state('tab.custom-detail', {
      url: '/crm/custom-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Custom/custom-detail.html',
          controller: 'CustomDetailCtrl'
        }
      },
      params:{
        'CustomName':''
      }
    })

    .state('tab.chat-setting', {
      url: '/synergy/chat-setting',
      views: {
        'tab-synergy': {
          templateUrl: 'templates/synergy/chat-setting.html',
          controller: 'ChatSettingCtrl'
        }
      },
      params:{
        'ChatName':''
      }
    })

    .state('tab.collection', {
      url: '/me/collection',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/collection.html',
          controller: 'CollectionCtrl'
        }
      }
    })

    .state('tab.change-background', {
      url: '/synergy/change-background',
      views: {
        'tab-synergy': {
          templateUrl: 'templates/Synergy/change-background.html',
          controller: 'ChangeBackgroundCtrl'
        }
      },
      params:{
        'CurrentBackground':''
      }
    })

    .state('tab.change-background-home', {
      url: '/home/change-background',
      views: {
        'tab-home': {
          templateUrl: 'templates/Synergy/change-background.html',
          controller: 'ChangeBackgroundCtrl'
        }
      },
      params:{
        'CurrentBackground':''
      }
    })

    .state('tab.change-background-me', {
      url: '/me/change-background',
      views: {
        'tab-me': {
          templateUrl: 'templates/Synergy/change-background.html',
          controller: 'ChangeBackgroundCtrl'
        }
      },
      params:{
        'CurrentBackground':''
      }
    })

    .state('tab.dashboard-aggregate', {
      url: '/home/dashboard-aggregate',
      views: {
        'tab-dashboard-aggregate': {
          templateUrl: 'templates/Home/dashboard-aggregate.html',
          controller: 'DashboardAggregateCtrl'
        }
      }
    })

    .state('tab.dashboard', {
      url: '/crm/dashboard',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })

    .state('tab.distribution-custom', {
      url: '/crm/distribution-custom',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Custom/distribution-custom.html',
          controller: 'DistributionCustomCtrl'
        }
      },
      params:{
        'Distributed':''
      }
    })

    .state('tab.expense-claim', {
      url: '/work/expense-claim',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/expense-claim.html',
          controller: 'ExpenseClaimCtrl'
        }
      }
    })

    .state('tab.expense-claim-home', {
      url: '/home/expense-claim',
      views: {
        'tab-home': {
          templateUrl: 'templates/Work/expense-claim.html',
          controller: 'ExpenseClaimCtrl'
        }
      }
    })

    .state('tab.expense-claim-detail', {
      url: '/work/expense-claim-detail',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/expense-claim-detail.html',
          controller: 'ExpenseClaimDetailCtrl'
        }
      },
      params: {
        'ExpenseClaimHead':''
      }
    })

    .state('tab.expense-claim-detail-home', {
      url: '/home/expense-claim-detail',
      views: {
        'tab-home': {
          templateUrl: 'templates/Work/expense-claim-detail.html',
          controller: 'ExpenseClaimDetailCtrl'
        }
      },
      params: {
        'ExpenseClaimHead':''
      }
    })

    .state('tab.expense-shorthand', {
      url: '/work/expense-shorthand',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/expense-shorthand.html',
          controller: 'ExpenseShorthandCtrl'
        }
      }
    })

    .state('tab.expense-query', {
      url: '/work/expense-query',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/expense-query.html',
          controller: 'ExpenseQueryCtrl'
        }
      }
    })

    .state('tab.expense-claim-show', {
      url: '/work/expense-claim-show',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/expense-claim-show.html',
          controller: 'ExpenseClaimShowCtrl'
        }
      }
    })

    .state('tab.expense-chart', {
      url: '/work/expense-chart',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/expense-chart.html',
          controller: 'ExpenseChartCtrl'
        }
      }
    })

    .state('tab.goal-achievement', {
      url: '/crm/dashboard/goal-achievement',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/goal-achievement.html',
          controller: 'GoalAchievementCtrl'
        }
      }
    })

    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('tab.key-niche', {
      url: '/crm/dashboard/key-niche',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/key-niche.html',
          controller: 'KeyNicheCtrl'
        }
      }
    })

    .state('tab.message', {
      url: '/synergy/message',
      views: {
        'tab-synergy': {
          templateUrl: 'templates/Synergy/message.html',
          controller: 'MessageCtrl'
        }
      },
      params:{
        'Select':''
      }
    })

    .state('tab.message-home', {
      url: '/home/message',
      views: {
        'tab-home': {
          templateUrl: 'templates/Synergy/message.html',
          controller: 'MessageCtrl'
        }
      },
      params:{
        'Select':''
      }
    })

    .state('tab.message-detail', {
      url: '/synergy/message-detail',
      views: {
        'tab-synergy': {
          templateUrl: 'templates/Synergy/message-detail.html',
          controller: 'MessageDetailCtrl'
        }
      },
      params: {
        'ChatName':''
      }
    })

    .state('tab.message-detail-home', {
      url: '/home/message-detail',
      views: {
        'tab-home': {
          templateUrl: 'templates/Synergy/message-detail.html',
          controller: 'MessageDetailCtrl'
        }
      },
      params: {
        'ChatName':''
      }
    })

    .state('tab.my-information', {
      url: '/me/my-information',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/my-information.html',
          controller: 'MyInformationCtrl'
        }
      }
    })

    .state('tab.me', {
      url: '/me',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-me.html',
          controller: 'MeCtrl'
        }
      }
    })

    .state('tab.map', {
      url: '/work/map',
      views: {
        'tab-work': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
    })

    .state('tab.lock', {
      url: '/lock',
      views: {
        'tab-home': {
          templateUrl: 'templates/lock.html',
          controller: 'LockCtrl'
        }
      }
    })

    .state('tab.new-custom', {
      url: '/crm/new-custom',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Custom/new-custom.html',
          controller: 'NewCustomCtrl'
        }
      }
    })

    .state('tab.new-contact', {
      url: '/crm/new-contact',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Contacts/new-contact.html',
          controller: 'NewContactCtrl'
        }
      }
    })

    .state('tab.new-activity',{
      url: '/crm/new-activity',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/new-activity.html',
          controller: 'NewActivityCtrl'
        }
      }
    })

    .state('tab.new-activity-work',{
      url: '/work/new-activity',
      views: {
        'tab-work': {
          templateUrl: 'templates/CRM/Activity/new-activity.html',
          controller: 'NewActivityCtrl'
        }
      }
    })

    .state('tab.new-niche',{
      url: '/crm/new-niche',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Niche/new-niche.html',
          controller: 'NewNicheCtrl'
        }
      }
    })

    .state('tab.new-attachment',{
      url: '/crm/new-attachment',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Activity/new-attachment.html',
          controller: 'NewAttachmentCtrl'
        }
      }
    })

    .state('tab.new-expense',{
      url: '/work/new-expense',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/new-expense.html',
          controller: 'NewExpenseCtrl'
        }
      }
    })

    .state('tab.new-expense-detail',{
      url: '/work/new-expense-detail',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/new-expense-detail.html',
          controller: 'NewExpenseDetailCtrl'
        }
      }
    })

    .state('tab.new-expense-claim',{
      url: '/work/new-expense-claim',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/new-expense-claim.html',
          controller: 'NewExpenseClaimCtrl'
        }
      }
    })

    .state('tab.niche-list', {
      url: '/crm/niche-list',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/niche-list.html',
          controller: 'NicheListCtrl'
        }
      }
    })

    .state('tab.niche-detail', {
      url: '/crm/niche-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Niche/niche-detail.html',
          controller: 'NicheDetailCtrl'
        }
      },
      params: {
        'NicheName':''
      }
    })

    .state('tab.niche-stage', {
      url: '/crm/niche-stage',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Niche/niche-stage.html',
          controller: 'NicheStageCtrl'
        }
      },
      params: {
        'NicheStage':''
      }
    })

    .state('tab.order-list', {
      url: '/crm/order-list',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/order-list.html',
          controller: 'OrderListCtrl'
        }
      }
    })

    .state('tab.order-detail', {
      url: '/crm/order-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Order/order-detail.html',
          controller: 'OrderDetailCtrl'
        }
      },
      params:{
        'OrderName':''
      }
    })

    .state('tab.performance-ranking', {
      url: '/crm/dashboard/performance-ranking',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/performance-ranking.html',
          controller: 'PerformanceRankingCtrl'
        }
      }
    })

    .state('tab.product-list', {
      url: '/crm/product-list',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/product-list.html',
          controller: 'ProductListCtrl'
        }
      }
    })

    .state('tab.product-detail', {
      url: '/crm/product-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Product/product-detail.html',
          controller: 'ProductDetailCtrl'
        }
      },
      params:{
        'ProductName':''
      }
    })

    .state('tab.password-setting', {
      url: '/me/password-setting',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/password-setting.html',
          controller: 'PasswordSettingCtrl'
        }
      }
    })

    .state('tab.quote-list', {
      url: '/crm/quote-list',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/quote-list.html',
          controller: 'QuoteListCtrl'
        }
      }
    })

    .state('tab.quote-detail', {
      url: '/crm/quote-detail',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Quote/quote-detail.html',
          controller: 'QuoteDetailCtrl'
        }
      },
      params:{
        'QuoteName':''
      }
    })

    .state('tab.search', {
      url: '/home/search',
      views: {
        'tab-home': {
          templateUrl: 'templates/Home/search.html',
          controller: 'SearchCtrl'
        }
      }
    })

    .state('tab.search-crm', {
      url: '/crm/search',
      views: {
        'tab-crm': {
          templateUrl: 'templates/Home/search.html',
          controller: 'SearchCtrl'
        }
      }
    })

    .state('tab.search-result', {
      url: '/home/search-result',
      views: {
        'tab-home': {
          templateUrl: 'templates/Home/search-result.html',
          controller: 'SearchResultCtrl'
        }
      },
      params: {
        'Search':''
      }
    })

    .state('tab.search-result-crm', {
      url: '/crm/search-result',
      views: {
        'tab-crm': {
          templateUrl: 'templates/Home/search-result.html',
          controller: 'SearchResultCtrl'
        }
      },
      params: {
        'Search':''
      }
    })

    .state('tab.sale-funnel', {
      url: '/crm/dashboard/sale-funnel',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/sale-funnel.html',
          controller: 'SaleFunnelCtrl'
        }
      }
    })

    .state('tab.scan', {
      url: '/crm/scan',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/scan.html',
          controller: 'ScanCtrl'
        }
      }
    })

    .state('tab.scan-home', {
      url: '/home/scan',
      views: {
        'tab-home': {
          templateUrl: 'templates/CRM/scan.html',
          controller: 'ScanCtrl'
        }
      }
    })

    .state('tab.submit-expense-claim', {
      url: '/work/submit-expense-claim',
      views: {
        'tab-work': {
          templateUrl: 'templates/Work/submit-expense-claim.html',
          controller: 'SubmitExpenseClaimCtrl'
        }
      }
    })

    .state('tab.synergy', {
      url: '/synergy',
      views: {
        'tab-synergy': {
          templateUrl: 'templates/tab-synergy.html',
          controller: 'SynergyCtrl'
        }
      }
    })

    .state('tab.send-email',{
      url: '/me/send-email',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/send-email.html',
          controller: 'SendEmailCtrl'
        }
      }
    })

    .state('tab.send-message',{
      url: '/me/send-message',
      views: {
        'tab-me': {
          templateUrl: 'templates/Me/send-message.html',
          controller: 'SendMessageCtrl'
        }
      },
      params:{
        'Name':''
      }
    })

    .state('tab.top-niche', {
      url: '/crm/dashboard/top-niche',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/top-niche.html',
          controller: 'TopNicheCtrl'
        }
      }
    })

    .state('tab.top-custom', {
      url: '/crm/dashboard/top-custom',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/top-custom.html',
          controller: 'TopCustomCtrl'
        }
      }
    })

    .state('tab.work', {
      url: '/work',
      views: {
        'tab-work': {
          templateUrl: 'templates/tab-work.html',
          controller: 'WorkCtrl'
        }
      }
    })

    .state('tab.work-circle', {
    url: '/synergy/work-circle',
    views: {
     'tab-synergy': {
        templateUrl: 'templates/Synergy/work-circle.html',
        controller: 'WorkCircleCtrl'
     }
    }
  })

    .state('tab.work-circle-me', {
    url: '/me/work-circle',
    views: {
     'tab-me': {
        templateUrl: 'templates/Synergy/work-circle.html',
        controller: 'WorkCircleCtrl'
     }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/lock');

});
