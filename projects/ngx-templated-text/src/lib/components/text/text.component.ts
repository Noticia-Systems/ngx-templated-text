import { Component, Input } from '@angular/core';

/**
 * Component for displaying text required for dynamically rendering templated texts.
 */
@Component({
  selector: 'text',
  template: '{{text}}'
})
export class TextComponent {

  // #region Fields

  /**
   * Text to display within this component.
   */
  @Input() text: string | null = null;

  // #endregion

}
