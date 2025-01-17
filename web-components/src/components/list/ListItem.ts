/**
 * Copyright (c) Cisco Systems, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { FocusMixin } from "@/mixins";
import reset from "@/wc_scss/reset.scss";
import { customElement, html, LitElement, property } from "lit-element";
import styles from "./scss/module.scss";

@customElement("md-list-item")
export class ListItem extends FocusMixin(LitElement) {
  @property({ type: String, reflect: true }) role: "listitem" | "option" = "listitem";
  @property({ type: Number, reflect: true }) tabIndex = -1;

  private _disabled = false;
  @property({ type: Boolean, reflect: true })
  get disabled() {
    return this._disabled;
  }
  set disabled(value: boolean) {
    const oldValue = this._disabled;
    this._disabled = value;
    this.setAttribute("aria-disabled", `${value}`);
    if (value) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
    this.requestUpdate("disabled", oldValue);
  }

  private _selected = false;
  @property({ type: Boolean, attribute: false })
  get selected() {
    return this._selected;
  }
  set selected(value: boolean) {
    const oldValue = this._selected;
    this._selected = value;
    this.setAttribute("aria-selected", `${value}`);
    this.requestUpdate("selected", oldValue);
  }

  static get styles() {
    return [reset, styles];
  }

  render() {
    return html`
      <li class="md-list-item" part="list-item">
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "md-list-item": ListItem;
  }
}
