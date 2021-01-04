import { LitElement, css, html, customElement, property, TemplateResult } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';
import '../components/search';
import { BookItem, ChapterItem, CharacterItem, ItemUnion, ResponseUnion } from '../api';

interface SearchEvent {
  success: boolean;
  mode?: "book" | "character" | "chapter";
  response?: ResponseUnion;
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
    this.requestUpdate()
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
    const mode = this.response?.mode;
    let cb: (doc: ItemUnion) => TemplateResult;

    if (mode === "book") {
      cb = (doc) => {
        const info = doc as BookItem
        return html`
          <fast-card id=${info._id}>
            <h2>${info.name}</h2>
          </fast-card>
        `
      }
    } else if (mode === "chapter") {
      cb = (doc) => {
        const info = doc as ChapterItem
        return html`
          <fast-card id=${info._id}>
            <h2>${info.chapterName}</h2>
          </fast-card>
        `
      }
    } else if (mode === "character") {
      cb = (doc) => {
        const info = doc as CharacterItem
        return html`
          <fast-card id=${info._id}>
            <h2>${info.name}</h2>
          </fast-card>
        `
      }
    } else {
      // error case html
      return html`
        <fast-card id="error">
          <h2>Oops something happened</h2>
          <p>Either the api calls limit has been exceeded or that the service is down.</p>
        </fast-card>
      `
    }

    const result = this.response?.response?.docs as Array<ItemUnion>
    return result.map(cb);
  }
}