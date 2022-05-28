import { NgModule } from '@angular/core';
import { TextTemplateDirective } from "./directives/text-template.directive";
import { TextComponent } from "./components/text/text.component";
import { TemplatedTextDirective } from "./directives/templated-text.directive";

@NgModule({
  declarations: [
    TextTemplateDirective,
    TemplatedTextDirective,
    TextComponent
  ],
  imports: [],
  exports: []
})
export class NgxTemplatedTextModule { }
