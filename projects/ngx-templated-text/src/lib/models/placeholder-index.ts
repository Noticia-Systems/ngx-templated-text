/**
 * Association between the placeholders in the templated texts and the indices for replacing the placeholders with the given templates.
 */
export interface PlaceholderIndex {

  // #region Fields

  /**
   * Placeholder for a given template.
   */
  placeholder: string;

  /**
   * Index for creating the embedded view within the prepared view (and replacing the placeholder {@link TextComponent}).
   */
  index: number;

  // #endregion

}
