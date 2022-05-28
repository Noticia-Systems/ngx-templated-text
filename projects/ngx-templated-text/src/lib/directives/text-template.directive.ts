import { Directive, Input, TemplateRef } from '@angular/core';
import { TemplatedTextDirective } from "./templated-text.directive";

@Directive({
  selector: '[textTemplate]'
})
export class TextTemplateDirective {

  // #region Properties

  @Input('textTemplate') set placeholder(placeholder: string | null) {
    this.templatedTextDirective.enqueue({
      templateRef: this.templateRef,
      placeholder: placeholder
    });
  }

  // #endregion

  // #region Constructors

  /**
   * Initializes a new instance of the {@see TextTemplateDirective}.
   * @param templateRef Template to render for the placeholders.
   * @param templatedTextDirective Parent directive for passing the required data.
   */
  constructor(
    private templateRef: TemplateRef<any>,
    public templatedTextDirective: TemplatedTextDirective
  ) {
  }

  // #endregion

}
