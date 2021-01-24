import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-base-demo',
  templateUrl: './base-demo.component.html',
  styleUrls: ['./base-demo.component.css']
})
export class BaseDemoComponent {

  constructor() { }

  @Input()
  pageTitle: string = '';

  @Input()
  mdIntro: string = '';

  @Input()
  mdHTML: string = '';

  @Input()
  mdTS: string = '';

  @Input()
  template: TemplateRef<any> = null;

}
