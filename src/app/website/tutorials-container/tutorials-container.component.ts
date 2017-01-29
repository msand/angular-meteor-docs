import {Component, Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PageTitleService, StepsUtils, TutorialDefinition, TutorialStep, ActivatedTutorial} from "angular-meteor-tutorials-infrastructure";
import {ANGULAR2_METEOR_SOCIALLY} from "../../tutorials/angular2-meteor-socially";
import {ANGULAR1_METEOR_SOCIALLY} from "../../tutorials/angular-meteor-socially";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable} from "rxjs";
import * as _ from 'lodash';

@Component({
  selector: "tutorial",
  templateUrl: "./tutorials-container.component.html"
})
@Injectable()
export class TutorialsContainer {
  private tutorial: TutorialDefinition;
  private step: TutorialStep;
  private steps: TutorialStep[];

  constructor(private utils: StepsUtils, current: ActivatedTutorial, title: PageTitleService, private sanitizer: DomSanitizer, private parentRoute: ActivatedRoute) {
    Observable.zip(current.tutorial, current.step, current.steps, (tutorial, step, steps) => {
      return {
        tutorial,
        step,
        steps
      }
    }).subscribe((data: any) => {
      this.step = <TutorialStep>data.step;
      this.steps = <TutorialStep[]>data.steps;
      this.tutorial = <TutorialDefinition>data.tutorial;

      title.setTitle(`Tutorial | ${this.tutorial.name} | ${this.step.name}`);
    })
  }

  getVersionsTimeline(versionsObject) {
    const versions = this.getVersions(versionsObject);
    const timeline = [];

    if (versions) {
      for(let i = 0; i < versions.length; i++) {
        if (i > 0) {
          timeline.push({
            diffLink: 'http://github.com'
          });
        }

        timeline.push(versions[i]);
      }
    }

    return timeline;
  }

  getVersions(versionsObject) {
    return Object.keys(versionsObject).map((gitRevision) => {
      return versionsObject[gitRevision];
    }).sort((a, b) => {
      return a.isLatest ? 1 : -1;
    });
  }

  versionClass(version) {
    return _.isEqual(this.steps, version.steps) ? 'current-version': '';
  }

  getTutorialMarkdownLink() {
    if (this.tutorial && this.step) {
      return "https://github.com/" + this.tutorial.gitHub + "/edit" + this.step.template;
    }
    else {
      return '';
    }
  }

  getVersionLink(version) {
    if (version && !version.diffLink) {
      return this.utils.createAbsoluteLink(this.tutorial.baseRoute + (version.isLatest ? '' : '/' + version.urlName) + version.steps[0].url, this.parentRoute)
    }
  }

  getYoutubeLink() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.step.youtubeVideoId + '?&origin=http://angular-meteor.com');
  }

  getCurrentVersion() {
    return this.getVersions(this.tutorial.versions).find(version => {
      return _.isEqual(this.steps, version.steps);
    });
  }

  getOptions() {
    if (this.tutorial && (this.tutorial.id === ANGULAR2_METEOR_SOCIALLY.id || this.tutorial.id === ANGULAR1_METEOR_SOCIALLY.id)) {
      let index = this.steps.findIndex((s) => {
        return s.template == this.step.template;
      });

      return [
        {
          name: "Angular 1",
          link: this.utils.createAbsoluteLink("angular1" + ANGULAR1_METEOR_SOCIALLY.versions['master'].steps[index].url, this.parentRoute),
          active: this.tutorial.id === ANGULAR1_METEOR_SOCIALLY.id
        },
        {
          name: "Angular 2",
          link: this.utils.createAbsoluteLink("angular2" + ANGULAR2_METEOR_SOCIALLY.versions['master'].steps[index].url, this.parentRoute),
          active: this.tutorial.id === ANGULAR2_METEOR_SOCIALLY.id
        }
      ]
    }

    return [];
  }
}
