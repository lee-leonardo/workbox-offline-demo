import { css, customElement, html, LitElement, property, PropertyValues, query } from "lit-element"
import '@material/mwc-button'
import '@material/mwc-menu'
import '@material/mwc-list/mwc-check-list-item'

import { apiEndpoints, apiMenuItems, ResponseUnion } from "../api"

@customElement('app-search')
export class AppSearch extends LitElement {

  @property({type: String}) searchString: string = "";
  @property({type: Number}) selectedMenuOptionIndex: number = 0;
  @property({type: String}) apiKey: string | undefined;

  @query("#menu-button") menuButton: HTMLButtonElement | undefined;
  @query("#menu") menu: HTMLSelectElement | undefined;
  @query("#apiText") apiTextField: HTMLInputElement | undefined;
  @query("#searchText") searchTextField: HTMLInputElement | undefined;
  @query("#searchButton") searchButton: HTMLButtonElement | undefined;

  apiItems = apiMenuItems;
  searchDisabled = false;

  static get styles() {
    return css`
    #search-bar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 12px;
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

  menuChange(event: CustomEvent) {
    this.selectedMenuOptionIndex = event.detail.index;
  }

  checkSearch(event: CustomEvent) {
    const requiresKey = this.selectedMenuOptionIndex > 0;
    this.apiKey = this.apiTextField?.value ?? this.apiKey

    const checkHasKey = (this.apiKey === "");

    this.searchButton!.disabled = requiresKey ? checkHasKey : false;
    this.requestUpdate();
  }

  async search() {
    let event: CustomEvent;

    try {
      const endpoint = apiEndpoints[this.selectedMenuOptionIndex];
      const headers = new Headers();

      if (this.apiKey) {
        headers.set("Authorization", `Bearer ${this.apiKey}`)
      }

      const apiResponse = await fetch(`https://the-one-api.dev/v2/${endpoint}`, {
        headers,
      });
      const response = await apiResponse.json() as Partial<ResponseUnion>;

      event = new CustomEvent("search-complete", {
        bubbles: true,
        composed: true,
        detail: {
          mode: endpoint,
          response,
          success: true,
        }
      })
    }
    catch (error) {
      console.log(error);
      event = new CustomEvent("search-complete", {
        bubbles: true,
        composed: true,
        detail: {
          success: false,
        }
      })
    }

    this.dispatchEvent(event);
  }

  render() {
    return html`
      <section id="search-bar" @change=${this.checkSearch} @selected=${this.checkSearch}>
        <mwc-button
          id="menu-button"
          label="${this.apiItems[this.selectedMenuOptionIndex]}"
          raised
          @click=${this.clickButton}
          >
        </mwc-button>
        <mwc-menu id="menu" fixed raised activatable @selected=${this.menuChange}>
          ${this.apiItems.map((name) => {
            return html`
              <mwc-list-item group="search">${name}</mwc-list-item>
            `
          })}
        </mwc-menu>
        ${this.selectedMenuOptionIndex > 0 ? html`
            <fast-text-field
              id="apiText"
              @change=${this.checkSearch}
              value=${this.apiKey ?? ""}
              placeholder="API Key"

            ></fast-text-field>
          ` : undefined
        }
        <fast-text-field
          id="searchText"
          placeholder="Search..."
        ></fast-text-field>
        <fast-button
          id="searchButton"
          disabled=${this.searchDisabled}
          @click="${this.search}">Search</fast-button>
      </section>
    `
  }

}