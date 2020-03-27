import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .toolbar span')).getText() as Promise<string>;
  }

  getNavBar(): ElementArrayFinder {
    return element.all(by.css('app-root .content .tab-container div'));
  }
  getBodyText(): Promise<string> {
    return this.getNavBar().getText() as Promise<string>;
  }

  getCurrentSearchText(): Promise<string> {
    return element(
      by.css('app-root .search-body-content .selected-search p')).getText() as Promise<string>;
  }

  getInstructionImage(): ElementFinder {
    return element(by.css('.instruction-logo'));
  }

  getInstructionMessage(): Promise<string> {
    return element(by.css('.message-container h2')).getText() as Promise<string>;
  }

  getSearchIndicator(): ElementFinder {
    return element(by.tagName('.loading-indicator h2'));
  }

  getInputField(): ElementFinder {
    return element(by.css('.search-field input'));
  }

  getTableContainer(): ElementFinder {
    return element(by.tagName('app-display-table'));
  }
}
