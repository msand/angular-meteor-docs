const markdownUrlBase = '/manuals/';

export const V2_0_0 = {
  isLatest: true,
  urlName: '2.0.0',
  displayName: 'Socially Merge',
  dateString: '14.02.2017',
  steps: [
    {
      url: '/setup',
      name: 'Bootstrapping',
      template: markdownUrlBase + 'templates/step1.md.tmpl'
    },
    {
      url: '/chats-page',
      name: 'Chats page',
      template: markdownUrlBase + 'templates/step2.md.tmpl'
    },
    {
      url: '/rxjs',
      name: 'RxJS',
      template: markdownUrlBase + 'templates/step3.md.tmpl'
    },
    {
      url: '/meteor-server-side',
      name: 'Realtime Meteor Server',
      template: markdownUrlBase + 'templates/step4.md.tmpl'
    },
    {
      url: '/folder-structure',
      name: 'Folder Structure',
      template: markdownUrlBase + 'templates/step5.md.tmpl'
    },
    {
      url: '/messages-page',
      name: 'Messages Page',
      template: markdownUrlBase + 'templates/step6.md.tmpl'
    },
    {
      url: '/authentication',
      name: 'Authentication',
      template: markdownUrlBase + 'templates/step7.md.tmpl'
    },
    {
      url: '/chats-mutations',
      name: 'Chats Creation & Removal',
      template: markdownUrlBase + 'templates/step8.md.tmpl'
    },
    {
      url: '/privacy',
      name: 'Privacy & Security',
      template: markdownUrlBase + 'templates/step9.md.tmpl'
    },
    {
      url: '/filter-and-pagination',
      name: 'Filter & Pagination',
      template: markdownUrlBase + 'templates/step10.md.tmpl'
    },
    {
      url: '/google-maps',
      name: 'Google Maps',
      template: markdownUrlBase + 'templates/step11.md.tmpl'
    },
    {
      url: '/file-upload',
      name: 'File Upload & Images',
      template: markdownUrlBase + 'templates/step12.md.tmpl'
    },
    {
      url: '/native-mobile',
      name: 'Native Mobile',
      template: markdownUrlBase + 'templates/step13.md.tmpl'
    },
    {
      url: '/summary',
      name: 'Summary',
      template: markdownUrlBase + 'templates/step14.md.tmpl',
      hideCodeDiff: true
    }
  ]
};
