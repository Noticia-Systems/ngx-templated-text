import { TemplateRef } from "@angular/core";

/**
 * Model containing required information to render the translation template.
 */
export interface TextTemplate {

  // #region Fields

  /**
   * Template to render for the given placeholder.
   */
  templateRef: TemplateRef<any>;

  /**
   * Placeholder used within the text, that will be replaced by the template.
   */
  placeholder: string | null;

  // #endregion

}
