import { TextTemplateDirective } from './text-template.directive';
import { TemplatedTextDirective } from "./templated-text.directive";
import { Component, Input, ViewChild } from "@angular/core";
import { MockBuilder, MockRender, ngMocks } from "ng-mocks";

@Component({
  selector: 'test',
  template: `
    <div *templatedText="null">
      <span *textTemplate="placeholder"></span>
    </div>
  `
})
class TestComponent {
  @ViewChild(TemplatedTextDirective) templatedTextDirective: TemplatedTextDirective | null = null;
  @Input() placeholder: string | null = null;
}

describe('TextTemplateDirective', () => {

  // #region Setup

  beforeEach(() => {
    ngMocks.autoSpy('jasmine');

    return MockBuilder(TestComponent)
      .keep(TextTemplateDirective)
      .mock(TemplatedTextDirective, {
        render: true
      });
  });

  // #endregion

  // #region Methods

  it('should enqueue change when placeholder changed', () => {
    const fixture = MockRender(TestComponent);
    const component = fixture.point.componentInstance;
    const directive = fixture.point.componentInstance.templatedTextDirective;

    if (directive !== null) {
      component.placeholder = 'test';

      expect(directive.enqueue).toHaveBeenCalled();
    }
  });

  it('should throw error when not placed in container with *templatedText', () => {
    expect(() => MockRender(`<span *textTemplate="'test'"></span>`))
      .toThrow(new Error("Elements holding the *textTemplate attribute need to be in a container holding the *templatedText attribute."));
  });

  // #endregion

});
