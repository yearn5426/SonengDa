// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
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
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.expense-claim', {
    url: '/home/expense-claim',
    views: {
      'tab-home': {
        templateUrl: 'templates/expense-claim.html',
        controller: 'ExpenseClaimCtrl'
      }
    }
  })

  .state('tab.expense-claim-detail', {
    url: '/home/expense-claim/:head',
    views: {
      'tab-home': {
        templateUrl: 'templates/expense-claim-detail.html',
        controller: 'ExpenseClaimCtrl'
      }
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

  .state('tab.work-circle', {
    url: '/work-circle',
    views: {
     'tab-work-circle': {
        templateUrl: 'templates/work-circle.html',
        controller: 'WorkCircleCtrl'
     }
    }
  })

  .state('tab.activity-detail', {
      url: '/home/activity-detail/:date/:activityId',
      views: {
        'tab-home': {
          templateUrl: 'templates/activity-detail.html',
          controller: 'ActivityDetailCtrl'
        }
      }
    })

  .state('tab.message', {
      url: '/home/message',
      views: {
        'tab-home': {
          templateUrl: 'templates/message.html',
          controller: 'MessageCtrl'
        }
      }
    })

  .state('tab.message-detail', {
      url: '/home/message/:people',
      views: {
        'tab-home': {
          templateUrl: 'templates/message-detail.html',
          controller: 'MessageDetailCtrl'
        }
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

  .state('tab.dashboard', {
      url: '/crm/dashboard',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })

  .state('tab.sale-funnel', {
      url: '/crm/dashboard/sale-funnel',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/Dashboard/sale-funnel.html',
          controller: 'SaleFunnelCtrl'
        }
      }
    })

  .state('tab.performance-ranking', {
      url: '/crm/dashboard/performance-ranking',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/Dashboard/performance-ranking.html',
          controller: 'PerformanceRankingCtrl'
        }
      }
    })

  .state('tab.goal-achievement', {
      url: '/crm/dashboard/goal-achievement',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/Dashboard/goal-achievement.html',
          controller: 'GoalAchievementCtrl'
        }
      }
    })

  .state('tab.top-niche', {
      url: '/crm/dashboard/top-niche',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/Dashboard/top-niche.html',
          controller: 'TopNicheCtrl'
        }
      }
    })

  .state('tab.top-custom', {
      url: '/crm/dashboard/top-custom',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/Dashboard/top-custom.html',
          controller: 'TopCustomCtrl'
        }
      }
    })

  .state('tab.key-niche', {
      url: '/crm/dashboard/key-niche',
      views: {
        'tab-crm': {
          templateUrl: 'templates/crm/Dashboard/key-niche.html',
          controller: 'KeyNicheCtrl'
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

  .state('tab.team', {
      url: '/team',
      views: {
        'tab-team': {
          templateUrl: 'templates/tab-team.html',
          controller: 'TeamCtrl'
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
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
