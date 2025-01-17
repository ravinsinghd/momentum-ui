import "@/components/button/Button";
import "@/components/modal/Modal";
import "@/components/tabs/Tab";
import "@/components/tabs/TabPanel";
import {  comboBoxOptions } from "@/[sandbox]/sandbox.mock";
import "@/components/tabs/Tabs";
import { customElement, html, LitElement, property } from "lit-element";

@customElement("modal-template-sandbox")
export class ModalTemplateSandbox extends LitElement {
  @property({ type: Boolean }) isModalOpen = false;
  @property({ type: Boolean }) isComplexModalOpen = false;
  @property({ type: Boolean }) isDialogOpen = false;
  @property({ type: Boolean }) isComplexTabsModal = false;

  private openModal() {
    this.isModalOpen = true;
  }

  private openComplexModal() {
    this.isComplexModalOpen = true;
  }

  private closeComplexModal() {
    this.isComplexModalOpen = false;
  }

  private closeModal() {
    this.isModalOpen = false;
  }

  private openDialog() {
    this.isDialogOpen = true;
  }

  private closeDialog() {
    this.isDialogOpen = false;
  }

  private openComplexTabsModal() {
    this.isComplexTabsModal = true;
  }

  private closeComplexTabsModal() {
    this.isComplexTabsModal = false;
  }

  render() {
    return html`
      <md-button @click=${this.openModal}>Open Modal</md-button>
      <md-button @click=${this.openDialog}>Open Dialog</md-button>
      <md-button @click=${this.openComplexModal}>Open Complex Modal</md-button>
      <md-button @click=${this.openComplexTabsModal}>Open Complex Tabs Modal</md-button>
      <md-modal
        htmlId="modal-1"
        ?show=${this.isModalOpen}
        headerLabel="Test Header Text"
        headerMessage="Test Message Text In Header"
        size="small"
        hideFooter
        hideHeader
        backdropClickExit
        showCloseButton
        noExitOnEsc
        @close-modal="${this.closeModal}"
      >
        <div slot="header">
          <span>Test Slot Header</span>
        </div>
        
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance.
        </p>
        <md-combobox disabled .options=${comboBoxOptions} placeholder="Placeholder" .value=${[comboBoxOptions[5]]}></md-combobox>
        <p>
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
          and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
        <md-combobox .options=${comboBoxOptions} placeholder="Placeholder" .value=${[comboBoxOptions[5]]}></md-combobox>
        <p>
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
          and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H. Rackham.
        </p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance.
        </p>

        <md-button slot="footer" type="reset">Reset</md-button>
        <md-button slot="footer" @click="${this.closeModal}" type="submit">Submit</md-button>
      </md-modal>

      <md-modal
        htmlId="modal-2"
        ?show=${this.isDialogOpen}
        headerLabel="Test Dialog Header"
        size="dialog"
        closeBtnName="Ok"
        showCloseButton
        @close-modal="${this.closeDialog}"
      >
        <input type="text" placeholder="Type Text" />
        <p>
          Curabitur nec leo sit amet sapien eleifend accumsan at eu magna. Suspendisse potenti. Aenean lobortis aliquet
          dui, id suscipit quam consectetur quis.
        </p>
      </md-modal>

      <md-modal ?show=${this.isComplexModalOpen} closeBtnName="Submit This" @close-modal="${this.closeComplexModal}">
        <md-tabs>
          <md-tab slot="tab">
            <span>Contact History</span>
            <md-icon name="recents_16"></md-icon>
          </md-tab>
          <md-tab-panel slot="panel">
            <span>Content for "Contact History"</span>
            <md-radiogroup checked="0">
              <md-radio slot="radio" value="Option 1">Option 1</md-radio>
              <md-radio slot="radio" value="Option 2">Option 2</md-radio>
              <md-radio slot="radio" value="Option 3">Option 3</md-radio>
              <md-radio slot="radio" value="Option 4">Option 4</md-radio>
            </md-radiogroup>
            <button type="button">Contact History</button>
          </md-tab-panel>
          <md-tab slot="tab">
            <span>Cisco WxM</span>
            <md-icon name="apps_16"></md-icon>
          </md-tab>
          <md-tab-panel slot="panel">
            <span>Content for "WxM"</span>
            <button type="button">Cisco WxM</button>
          </md-tab-panel>
        </md-tabs>
      </md-modal>

      <md-modal
        ?show=${this.isComplexTabsModal}
        size="small"
        hideFooter
        hideHeader
        @close-modal="${this.closeComplexTabsModal}"
      >
        <div slot="header">
          <h3 class="sl-form-label">Station Login</h3>
        </div>
        <md-tabs justified>
          <md-tab slot="tab" label="Dial Number">
            <span>Dial Number</span>
          </md-tab>
          <md-tab-panel slot="panel">
            <div class="phone-fromat">
              <md-radiogroup group-label="phone-fromat" alignment="horizontal" checked="0">
                <md-radio slot="radio" value="US" aria-label="US Format">US Format</md-radio>
                <md-radio slot="radio" value="Other" ariaLabel="Other">Other</md-radio>
              </md-radiogroup>
            </div>

            <md-input type="tel" id="dn" placeholder="Dial Number" shape="pill" autofocus></md-input>
          </md-tab-panel>
          <md-tab slot="tab" label="Extension">
            <span>Extension</span>
          </md-tab>
          <md-tab-panel slot="panel">
            <div class="extension-format">
              <md-input aria-label="Team X" type="tel" id="ext" placeholder="Team X" shape="pill"></md-input>
            </div>
            <md-combobox placeholder="Choose Team" .options=${comboBoxOptions}></md-combobox>
          </md-tab-panel>
        </md-tabs>
        <div class="sl-footer" slot="footer">
          <md-button class="footer-btn" aria-label="Cancel" @click="${this.closeComplexTabsModal}">
            Cancel
          </md-button>
          <md-button class="footer-btn" variant="primary" aria-label="Submit" @click="${this.closeComplexTabsModal}">
            Submit
          </md-button>
        </div>
      </md-modal>
    `;
  }
}

export const modalTemplate = html`
  <modal-template-sandbox></modal-template-sandbox>
`;
