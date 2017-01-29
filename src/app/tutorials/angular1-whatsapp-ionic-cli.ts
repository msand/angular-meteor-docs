import {TutorialDefinition, ParsedPatchDefinition} from 'angular-meteor-tutorials-infrastructure';
import {improveThisCodeResolver} from "./improve-code-resolver";
const markdownUrlBase = '/manuals/';

export const ANGULAR1_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: 'ionic-tutorial',
  name: 'WhatsApp Clone with Meteor and Ionic CLI',
  gitHub: 'Urigo/IonicCLI-Meteor-WhatsApp',
  baseRoute: 'ionic',
  improveCodeUrlResolve: (tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string, revision: string, http: any) => {
    return improveThisCodeResolver(markdownUrlBase, tutorial, patchDetails, filename, stepNumber, revision, http);
  },
  versions: {
    'master': {
      isLatest: true,
      urlName: '1.0.0',
      displayName: '1.0.0',
      steps: [
        {
          url: '/bootstrapping',
          name: 'Bootstrapping',
          template: markdownUrlBase + 'templates/step0.md'
        },
        {
          url: '/bundling',
          name: 'Bundling',
          template: markdownUrlBase + 'templates/step1.md'
        },
        {
          url: '/layout',
          name: 'Layout, coding style & structure',
          template: markdownUrlBase + 'templates/step2.md'
        },
        {
          url: '/realtime-meteor-server',
          name: 'Realtime Meteor server',
          template: markdownUrlBase + 'templates/step3.md'
        },
        {
          url: '/meteor-server-methods',
          name: 'Chat view and send messages',
          template: markdownUrlBase + 'templates/step4.md'
        },
        {
          url: '/authentication',
          name: 'Authentication',
          template: markdownUrlBase + 'templates/step5.md'
        },
        {
          url: '/modify-chats',
          name: 'Create and remove chats',
          template: markdownUrlBase + 'templates/step6.md'
        },
        {
          url: '/privacy',
          name: 'Privacy',
          template: markdownUrlBase + 'templates/step7.md'
        },
        {
          url: '/summary',
          name: 'Summary',
          template: markdownUrlBase + 'templates/step8.md'
        }
      ]
    }
  }
};
