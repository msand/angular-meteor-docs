import {TutorialDefinition, ParsedPatchDefinition} from 'angular-meteor-tutorials-infrastructure';
import {improveThisCodeResolver} from "../improve-code-resolver";
import {Http} from "@angular/http";
import { V3_1_0 } from './3.1.0';
import { V3_0_0 } from './3.0.0';
import { V1_0_0 } from './1.0.0';
import { V2_0_0 } from './2.0.0';
const markdownUrlBase = '/.tortilla/manuals/';

export const ANGULAR2_WHATSAPP_IONIC_CLI: TutorialDefinition = {
  id: 'whatsapp2-ionic-tutorial',
  name: 'WhatsApp Clone with Meteor and Ionic 2 CLI',
  gitHub: 'Urigo/Ionic2CLI-Meteor-WhatsApp',
  baseRoute: 'ionic',
  improveCodeUrlResolve: (tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string, revision: string, http: Http) => {
    if (revision === 'master' || revision === 'master@1.0.0' || revision === 'master@0.0.7') {
      return improveThisCodeResolver(markdownUrlBase, tutorial, patchDetails, filename, stepNumber, revision, http);
    }

    return improveThisCodeResolver('/manuals/', tutorial, patchDetails, filename, stepNumber, revision, http);
  },
  versions: {
    // Git revision => version definition object
    'master': V3_1_0,
    'master@1.0.0': V3_0_0,
    'legacy': V1_0_0,
    'master@0.0.7': V2_0_0,
  }
};
