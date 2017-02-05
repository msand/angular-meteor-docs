import {Component, Injectable, ElementRef, Renderer} from '@angular/core';
import * as mainCss from "../assets/style/main.scss";
import {PageTitleService} from "angular-meteor-tutorials-infrastructure";
import {Router} from "@angular/router";
import { ANGULAR2_WHATSAPP_IONIC_CLI } from './tutorials/angular2-whatsapp-ionic-cli/index';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
@Injectable()
export class AppComponent {
  constructor(private router: Router, eRef: ElementRef, renderer: Renderer, seo: PageTitleService) {
    let parent = eRef.nativeElement.parent;
    let styleElement = renderer.createElement(parent, "style");
    renderer.setElementProperty(styleElement, "type", "text/css");
    renderer.setText(styleElement, mainCss);

    seo.setTitle("Angular-Meteor - realtime full stack JavaScript development");
    seo.setBasePath(global['basePath'] || '/');
  }

  getDropdownTutorial() {
    return ANGULAR2_WHATSAPP_IONIC_CLI;
  }

  isSupportPage() {
    return this.router.url.indexOf('support') > -1;
  }

  getExtraLinks() {
    return [
      {
        link: 'tutorials/whatsapp2-tutorial',
        bold: true,
        name: 'WhatsApp clone with Angular & Meteor'
      },
      {
        link: 'tutorials/migration/angular2/introduction',
        bold: true,
        name: 'Blaze to Angular 2 Migration tutorial'
      },
      {
        link: 'tutorials/socially/angular2/bootstrap',
        bold: true,
        name: 'Old Socially Tutorials'
      },
      {
        link: 'training',
        bold: true,
        name: 'Custom Training'
      }
    ];
  }
}
