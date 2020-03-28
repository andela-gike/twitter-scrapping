import { AppPage } from './app.po';
import { browser, logging, ExpectedConditions, element, by} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Twitter');
  });

  it('should display nav tab', () => {
    page.navigateTo();
    expect(page.getBodyText()).toEqual([ 'Hashtag search', 'User search' ]);
  });

  it('should change active nav tab', () => {
    page.navigateTo();
    const navTab = page.getNavBar().get(1);
    navTab.click();
    expect(page.getCurrentSearchText()).toEqual('User search');
  });

  it('should display instruction message', () => {
    page.navigateTo();
    const instructionImage = page.getInstructionImage()
    const instructionMessage = page.getInstructionMessage()
    expect(instructionImage.isPresent()).toBe(true);
    expect(instructionMessage).toContain('Kindly type in the word')
  });

  it('should receive value in input field', () => {
    page.navigateTo();
    const navTab = page.getNavBar().get(1);
    navTab.click();
    const inputField = page.getInputField()
    inputField.sendKeys('react');
    expect(inputField.getAttribute('value')).toBe('react');
  });

  it('should display search message when input has value', async () => {
    page.navigateTo();
    const until = ExpectedConditions;
    const inputField = page.getInputField()
    await inputField.sendKeys('python');
    const searchNotify = page.getSearchIndicator();
    browser.ignoreSynchronization = true;
    browser.wait(until.presenceOf(page.getSearchIndicator()), 5000, 'not found')
    expect(searchNotify.getText()).toContain('Searching');
  });

  it('should display search message when input has value', async () => {
    page.navigateTo();
    const navTab = page.getNavBar().get(1);
    navTab.click();
    const until = ExpectedConditions;
    const inputField = page.getInputField()
    await inputField.sendKeys('Aaron');
    browser.ignoreSynchronization = true;
    browser.wait(until.presenceOf(page.getTableContainer()), 5000, 'not found')
    expect(page.getTableHeader()).toContain('Tweet');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
