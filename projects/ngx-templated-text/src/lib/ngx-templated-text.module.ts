import { NgModule } from '@angular/core';
import { TextTemplateDirective } from "./directives/text-template.directive";
import { TextComponent } from "./components/text/text.component";
import { TemplatedTextDirective } from "./directives/templated-text.directive";

/**
 * Module containing the required directives for replacing placeholders in texts with given templates.
 */
@NgModule({
  declarations: [
    TextTemplateDirective,
    TemplatedTextDirective,
    TextComponent
  ],
  imports: [],
  exports: [
    TextTemplateDirective,
    TemplatedTextDirective
  ]
})
export class NgxTemplatedTextModule { }
