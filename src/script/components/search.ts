import { css, customElement, html, LitElement, property, PropertyValues, query } from "lit-element"
import '@material/mwc-button'
import '@material/mwc-menu'
import '@material/mwc-list/mwc-check-list-item'

@customElement('app-search')
export class AppSearch extends LitElement {

  @property({type: String}) searchString: string = "";
  @property({type: String}) menuOption: string = "Books";
  @property({type: String}) apiKey: string = "";

  @query("#menu-button") menuButton: HTMLElement | undefined;
  @query("#menu") menu: HTMLElement | undefined;

  static get styles() {
    return css`
    #search-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #search-bar > * {
      padding-right: 8px
    }
    `
  }

  firstUpdated(changedProperties: PropertyValues) {
    (this.menu as any).anchor = this.menuButton;

    return super.firstUpdated(changedProperties)
  }

  clickButton() {
    (this.menu as any).open = true
  }

  render() {
    return html`
      <section id="search-bar">
        <mwc-button id="menu-button" raised label="${this.menuOption}" @click=${this.clickButton}></mwc-button>
        <mwc-menu id="menu" fixed raised activatable>
          <mwc-list-item></mwc-list-item>

          <li divider role="separator"></li>
          <mwc-list-item group="search">Books</mwc-list-item>
          <mwc-list-item group="search">Chapters</mwc-list-item>
          <mwc-list-item group="search">Characters</mwc-list-item>
        </mwc-menu>
        <fast-text-field></fast-text-field>
        <fast-button>Search</fast-button>
      </section>
    `
  }

}