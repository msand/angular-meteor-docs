import {TutorialDefinition, ParsedPatchDefinition} from 'angular-meteor-tutorials-infrastructure';
import {improveThisCodeResolver} from "../improve-code-resolver";
import {Http} from "@angular/http";
import { V2_0_0 } from './2.0.0';
import { V1_0_0 } from './1.0.0';
const markdownUrlBase = '/manuals/';

export const ANGULAR2_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: 'whatsapp2-ionic-tutorial',
  name: 'WhatsApp Clone with Meteor and Ionic 2 CLI',
  gitHub: 'Urigo/Ionic2CLI-Meteor-WhatsApp',
  baseRoute: 'ionic',
  improveCodeUrlResolve: (tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string, revision: string, http: Http) => {
    return improveThisCodeResolver(markdownUrlBase, tutorial, patchDetails, filename, stepNumber, revision, http);
  },
  versions: {
    // Git revision => version definition
    'new-commits': V2_0_0,
    'master': V1_0_0
  }
};
