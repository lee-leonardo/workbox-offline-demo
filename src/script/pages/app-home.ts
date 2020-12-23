import { LitElement, css, html, customElement, property } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';
import '../components/search';
import { toaResponse } from '../api';

interface SearchEvent {
  success: boolean;
  mode?: "book" | "character" | "chapter";
  response?: toaResponse;
}

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties in lit-element
  // check out this link https://lit-element.polymer-project.org/guide/properties#declare-with-decorators
  @property({ type: Object }) response: undefined | SearchEvent;

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fast-card {
        margin-bottom: 12px;
      }

      #welcomeCard, .infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media(min-width: 1200px) {
        #welcomeCard, .infoCard {
          width: 40%;
        }
      }

      @media(screen-spanning: single-fold-vertical) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      })
    }
  }

  handleSearch(event: CustomEvent<SearchEvent>) {
    this.response = event.detail
  }

  render() {
    return html`
      <div @search-complete=${this.handleSearch}>
        <app-search></app-search>
      
        <div id="welcomeBar">
          ${(this.response ? this.renderResultsList() : this.renderWelcomeCard())}
        </div>
      
        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }

  renderWelcomeCard() {
    return html`
      <fast-card id="welcomeCard">

        <h2>The One Api Working Demo</h2>

        <p>This demo utilizes the one api demo, which has a <a href="https://github.com/gitfrosh/lotr-api">github page</a> as well as a <a href="https://the-one-api.dev/">documentation here.</a></p>

      </fast-card>
    `
  }

  renderResultsList() {
    var a = this.response?.mode;

    //TODO abstrated template code returned here
    return html``
  }
}