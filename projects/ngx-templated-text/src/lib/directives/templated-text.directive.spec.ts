import { TemplatedTextDirective } from './templated-text.directive';
import { MockBuilder, MockRender, ngMocks } from "ng-mocks";
import { TextTemplateDirective } from "./text-template.directive";

describe('TemplateTranslateDirective', () => {

  // #region Setup

  beforeEach(() => {
    ngMocks.autoSpy('jasmine');

    return MockBuilder(TemplatedTextDirective)
      .keep(TextTemplateDirective);
  });

  // #endregion

  // #region Methods

  it('should render the template when initializing', () => {
    const fixture = MockRender(`
      <ng-container *templatedText="null">
        test
      </ng-container>
    `);

    let html = ngMocks.formatHtml(fixture);

    expect(html).toEqual('test');
  });

  it('should render the raw text when no placeholders present', () => {
    const fixture = MockRender(`
      <ng-container *templatedText="'test'"></ng-container>
    `);

    let html = ngMocks.formatHtml(fixture);

    expect(html).toEqual('<text>test</text>');
  });

  it('should render the templated text when placeholders after beginning present', () => {
    const fixture = MockRender(`
      <ng-container *templatedText="'Click {first} for {second} to happen.'">
        <a *textTemplate="'first'" href="#">here</a>
        <a *textTemplate="'second'" href="#">magic</a>
      </ng-container>
    `);

   fixture.detectChanges();

    let html = ngMocks.formatHtml(fixture);

    expect(html).toEqual('<text>Click </text><a href="#">here</a><text> for </text><a href="#">magic</a><text> to happen.</text>');
  });

  it('should render the templated text when placeholders at beginning present', () => {
    const fixture = MockRender(`
      <ng-container *templatedText="'{first} is {second} everywhere.'">
        <a *textTemplate="'first'" href="#">Magic</a>
        <a *textTemplate="'second'" href="#">found</a>
      </ng-container>
    `);

    fixture.detectChanges();

    let html = ngMocks.formatHtml(fixture);

    expect(html).toEqual('<a href="#">Magic</a><text> is </text><a href="#">found</a><text> everywhere.</text>');
  });

  it('should render the templated text when placeholders at ending present', () => {
    const fixture = MockRender(`
      <ng-container *templatedText="'Magic is found {first}'">
        <a *textTemplate="'first'" href="#">everywhere.</a>
      </ng-container>
    `);

    fixture.detectChanges();

    let html = ngMocks.formatHtml(fixture);

    expect(html).toEqual('<text>Magic is found </text><a href="#">everywhere.</a>');
  });

  // #endregion

});
