import {TutorialDefinition, ParsedPatchDefinition} from 'angular-meteor-tutorials-infrastructure';
import {Observable} from "rxjs";

let cache: {[key: string]: Observable<any>} = {};

export let improveThisCodeResolver = (markdownUrlBase: string, tutorial: TutorialDefinition, patchDetails: ParsedPatchDefinition, filename: string, stepNumber: string, revision: string, http: any) => {
  const parentStep = stepNumber.split(".")[0];
  const filePath = 'https://github.com/' + tutorial.gitHub + '/edit' + '/' + revision + markdownUrlBase + 'views/step' + parentStep + '.md';
  const generatedMd = 'https://raw.githubusercontent.com/' + tutorial.gitHub + '/' + revision + markdownUrlBase + 'views/step' + parentStep + '.md';

  let obs: Observable<any>;

  if (cache[generatedMd]) {
    obs = cache[generatedMd];
  }
  else {
    obs = cache[generatedMd] = http.get(generatedMd).map(res => res.text()).cache(1);
  }

  return obs.map(generatedMarkdown => {
    let lineAppend = '';

    try {
      const rgx = new RegExp("\\[\\{]: <helper> \\(diffStep " + stepNumber + "\\).*?[\\s\\S]*?(.*?" + filename.replace(".", "\\.") + ".*?)[\\s\\S]*?\\]", "gi");
      const match = rgx.exec(generatedMarkdown);

      lineAppend = "#L" + (generatedMarkdown.substr(0, match.index).split("\n").length + 6);
    }
    catch (e) {
      lineAppend = '';
    }

    return {
      url: filePath + lineAppend
    }
  });
};
