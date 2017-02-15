import {TutorialDefinition, ParsedPatchDefinition} from 'angular-meteor-tutorials-infrastructure';
import {improveThisCodeResolver} from "../improve-code-resolver";
import {Http} from "@angular/http";
import { V2_0_0 } from './2.0.0';
import { V1_0_0 } from './1.0.0';
const markdownUrlBase = '/manuals/';

export const ANGULAR2_WHATSAPP_METEOR_CLI: TutorialDefinition = {
  id: 'whatsapp2-meteor-tutorial',
  name: 'WhatsApp Clone with Ionic 2 and Meteor CLI',
  gitHub: 'Urigo/Ionic2-MeteorCLI-WhatsApp',
  baseRoute: 'meteor',
  improveCodeUrlResolve: (tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string, revision: string, http: Http) => {
    return improveThisCodeResolver(markdownUrlBase, tutorial, patchDetails, filename, stepNumber, revision, http);
  },
  versions: {
    // Git revision => version definition object
    'master': V2_0_0,
    'legacy': V1_0_0
  }
};
