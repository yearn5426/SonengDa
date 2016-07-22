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
        'ActivityIndex':''
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
        'ActivityIndex':''
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
      url: '/home/expense-claim',
      views: {
        'tab-home': {
          templateUrl: 'templates/expense-claim.html',
          controller: 'ExpenseClaimCtrl'
        }
      }
    })

    .state('tab.expense-claim-detail', {
      url: '/home/expense-claim-detail',
      views: {
        'tab-home': {
          templateUrl: 'templates/expense-claim-detail.html',
          controller: 'ExpenseClaimDetailCtrl'
        }
      },
      params: {
        'ExpenseClaimHead':''
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
      url: '/home/message',
      views: {
        'tab-home': {
          templateUrl: 'templates/message.html',
          controller: 'MessageCtrl'
        }
      }
    })

    .state('tab.message-detail', {
      url: '/home/message-detail',
      views: {
        'tab-home': {
          templateUrl: 'templates/message-detail.html',
          controller: 'MessageDetailCtrl'
        }
      },
      params: {
        'People':''
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

    .state('tab.new-niche',{
      url: '/crm/new-niche',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Niche/new-niche.html',
          controller: 'NewNicheCtrl'
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

    .state('tab.performance-ranking', {
      url: '/crm/dashboard/performance-ranking',
      views: {
        'tab-crm': {
          templateUrl: 'templates/CRM/Dashboard/performance-ranking.html',
          controller: 'PerformanceRankingCtrl'
        }
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

    .state('tab.team', {
      url: '/team',
      views: {
        'tab-team': {
          templateUrl: 'templates/tab-team.html',
          controller: 'TeamCtrl'
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
    url: '/work-circle',
    views: {
     'tab-work-circle': {
        templateUrl: 'templates/work-circle.html',
        controller: 'WorkCircleCtrl'
     }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
