import {Component, Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {PageTitleService, StepsUtils, TutorialDefinition, TutorialStep, ActivatedTutorial} from "angular-meteor-tutorials-infrastructure";
import {ANGULAR2_METEOR_SOCIALLY} from "../../tutorials/angular2-meteor-socially";
import {ANGULAR1_METEOR_SOCIALLY} from "../../tutorials/angular-meteor-socially";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable} from "rxjs";

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

  getTutorialMarkdownLink() {
    if (this.tutorial && this.step) {
      return "https://github.com/" + this.tutorial.gitHub + "/edit" + this.step.template;
    }
    else {
      return '';
    }
  }

  getYoutubeLink() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.step.youtubeVideoId + '?&origin=http://angular-meteor.com');
  }

  getOptions() {
    if (this.tutorial && (this.tutorial.id === ANGULAR2_METEOR_SOCIALLY.id || this.tutorial.id === ANGULAR1_METEOR_SOCIALLY.id)) {
      let index = this.steps.findIndex((s) => {
        return s.template == this.step.template;
      });

      return [
        {
          name: "Angular 1",
          link: this.utils.createAbsoluteLink("angular1" + ANGULAR1_METEOR_SOCIALLY.versions['1.0.0'].steps[index].url, this.parentRoute),
          active: this.tutorial.id === ANGULAR1_METEOR_SOCIALLY.id
        },
        {
          name: "Angular 2",
          link: this.utils.createAbsoluteLink("angular2" + ANGULAR2_METEOR_SOCIALLY.versions['1.0.0'].steps[index].url, this.parentRoute),
          active: this.tutorial.id === ANGULAR2_METEOR_SOCIALLY.id
        }
      ]
    }

    return [];
  }
}
