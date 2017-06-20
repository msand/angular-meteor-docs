const markdownUrlBase = '/.tortilla/manuals/';

export const V2_0_0 = {
  isLatest: false,
  urlName: '2.0.0',
  displayName: 'Socially Merge',
  dateString: '01.02.2017',
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
      name: 'Authentication',
      template: markdownUrlBase + 'templates/step7.tmpl'
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: markdownUrlBase + 'templates/step8.tmpl'
    },
    {
      url: '/privacy',
      name: 'Privacy & Security',
      template: markdownUrlBase + 'templates/step9.tmpl'
    },
    {
      url: '/filter-and-pagination',
      name: 'Filter & Pagination',
      template: markdownUrlBase + 'templates/step10.tmpl'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'templates/step11.tmpl'
    },
    {
      url: '/file-upload',
      name: 'File Upload & Images',
      template: markdownUrlBase + 'templates/step12.tmpl'
    },
    {
      url: '/native-mobile',
      name: 'Native Mobile',
      template: markdownUrlBase + 'templates/step13.tmpl'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step14.tmpl',
      hideCodeDiff: true
    }
  ]
};
