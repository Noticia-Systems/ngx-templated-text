[![Node.js Package](https://github.com/Noticia-Systems/ngx-templated-text/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Noticia-Systems/ngx-templated-text/actions/workflows/npm-publish.yml) [![Node.js CI](https://github.com/Noticia-Systems/ngx-templated-text/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/Noticia-Systems/ngx-templated-text/actions/workflows/node.js.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

ngx-templated-text allows for simple replacement of placeholders in a text with given templates.

## Installation

``npm install @noticia-systems/ngx-templated-text``

## Usage

```angular2html
<ng-container *templatedText="'Click {here} or {maybe-here} for magic to happen.'">
  <a *textTemplate="'here'" href="#">here</a>
  <a *textTemplate="'maybe-here'" href="#">maybe here</a>
</ng-container>
```
This will render the text passed to `*templatedText` with the anchor templates.

For technical reasons the generated output will be: 
```angular2html
<text>Click </text><a href="#">here</a><text> or </text><a href="#">maybe here</a><text>for magic to happen.</text>
```
, but it will mostly behave just like:

```angular2html
Click <a href="#">here</a> or <a href="#">maybe here</a> for magic to happen.
```

This workflow is especially useful when using translation packages like `ngx-translate`.

A practical example would be to display a checkbox and its associated label within a form for accepting the terms and privacy policy. For better UX an anchor to the terms and privacy policy would be desirable.  

Instead of having to add html code to the translation file, we can now prepare templates we can maintain from within the components. We could implement the following workflow using `ngx-translate`:

#### en.json
```json
{
  "terms": "terms",
  "privacy-policy": "privacy policy",
  "accept-terms-and-privacy-policy": "I accept the {terms} and {privacy-policy}." 
}
```

#### app.component.html
```angular2html
<form>
  <div>
    <input type="checkbox"></input>
    
    <label>
      <ng-container *templatedText="'accept-terms-and-privacy-policy' | translate">
        <a *textTemplate="'terms'" href="#">{{'terms' | translate}}</a>
        <a *textTemplate="'privacy-policy'" href="#">{{'privacy-policy' | translate}}</a>
      </ng-container>
      
      *
    </label>
  </div>
</form>
```
(Asterisk denoting that this field is required.)
