import { CookieClickerPage } from './app.po';

describe('cookie-clicker App', () => {
  let page: CookieClickerPage;

  beforeEach(() => {
    page = new CookieClickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
