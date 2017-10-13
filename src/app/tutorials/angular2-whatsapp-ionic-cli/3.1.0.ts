const markdownUrlBase = '/.tortilla/manuals/';

export const V3_1_0 = {
  isLatest: true,
  urlName: '3.1.0',
  displayName: 'Angular 4.4.3 + Meteor 1.6',
  dateString: '2017-10-12',
  steps: [
    {
      url: '/setup',
      name: 'Bootstrapping',
      template: markdownUrlBase + 'templates/step1.tmpl',
      youtubeVideoId: 'Y3Kikk5rPQk'
    },
    {
      url: '/chats-page',
      name: 'Chats page',
      template: markdownUrlBase + 'templates/step2.tmpl',
      youtubeVideoId: 'U_PhcyXbMb8'
    },
    {
      url: '/rxjs',
      name: 'RxJS',
      template: markdownUrlBase + 'templates/step3.tmpl'
    },
    {
      url: '/meteor-server-side',
      name: 'Realtime Meteor Server',
      template: markdownUrlBase + 'templates/step4.tmpl'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step5.tmpl'
    },
    {
      url: '/messages-page',
      name: 'Messages Page',
      template: markdownUrlBase + 'templates/step6.tmpl'
    },
    {
      url: '/authentication',
      name: 'Users & Authentication',
      template: markdownUrlBase + 'templates/step7.tmpl'
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: markdownUrlBase + 'templates/step8.tmpl'
    },
    {
      url: '/privacy',
      name: 'Privacy & Subscriptions',
      template: markdownUrlBase + 'templates/step9.tmpl'
    },
    {
      url: '/filter-and-pagination',
      name: 'Filter & Pagination',
      template: markdownUrlBase + 'templates/step10.tmpl'
    },
    {
      url: '/android-testing',
      name: 'Android testing',
      template: markdownUrlBase + 'templates/step11.tmpl'
    },
    {
      url: '/google-maps',
      name: 'Google Maps & Geolocation',
      template: markdownUrlBase + 'templates/step12.tmpl'
    },
    {
      url: '/file-upload',
      name: 'File Upload & Images',
      template: markdownUrlBase + 'templates/step13.tmpl'
    },
    {
      url: '/native-mobile',
      name: 'Native Mobile',
      template: markdownUrlBase + 'templates/step14.tmpl'
    },
    {
      url: '/addressbook',
      name: 'Addressbook integration',
      template: markdownUrlBase + 'templates/step15.tmpl'
    },
    {
      url: '/push-notifications',
      name: 'FCM Push Notifications',
      template: markdownUrlBase + 'templates/step16.tmpl'
    },
    {
      url: '/facebook',
      name: 'Facebook authentication',
      template: markdownUrlBase + 'templates/step17.tmpl'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step18.tmpl',
      hideCodeDiff: true
    }
  ]
};
