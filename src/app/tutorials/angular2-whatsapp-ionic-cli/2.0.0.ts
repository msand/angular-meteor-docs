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
      template: markdownUrlBase + 'templates/step2.md',
      youtubeVideoId: 'U_PhcyXbMb8'
    },
    {
      url: '/rxjs',
      name: 'RxJS',
      template: markdownUrlBase + 'templates/step3.md'
    },
    {
      url: '/meteor-server-side',
      name: 'Realtime Meteor Server',
      template: markdownUrlBase + 'templates/step4.md'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step5.md'
    },
    {
      url: '/messages-page',
      name: 'Messages Page',
      template: markdownUrlBase + 'templates/step6.md'
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: markdownUrlBase + 'templates/step7.md'
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: markdownUrlBase + 'templates/step8.md'
    },
    {
      url: '/privacy',
      name: 'Privacy & Security',
      template: markdownUrlBase + 'templates/step9.md'
    },
    {
      url: '/filter-and-pagination',
      name: 'Filter & Pagination',
      template: markdownUrlBase + 'templates/step10.md'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'templates/step11.md'
    },
    {
      url: '/file-upload',
      name: 'File Upload & Images',
      template: markdownUrlBase + 'templates/step12.md'
    },
    {
      url: '/native-mobile',
      name: 'Native Mobile',
      template: markdownUrlBase + 'templates/step13.md'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step14.md',
      hideCodeDiff: true
    }
  ]
};
