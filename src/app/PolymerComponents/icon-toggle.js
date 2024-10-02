
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-input/iron-input.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html`
  
      <!-- shadow DOM goes here -->
      <p>This is <b>[[ user ]]</b></p>

      <iron-input bind-value="{{ user }}">
        <input is="iron-input" placeholder="Your name">
      </iron-input>
    `;
  }
  static get properties() {
    return {
      user: {
        type: String,
        value: 'Jack',
      },
    };
  }

}

customElements.define('icon-toggle', IconToggle);