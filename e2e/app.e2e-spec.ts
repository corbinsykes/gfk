import { GkipsumPage } from './app.po';

describe('gkipsum App', () => {
  let page: GkipsumPage;

  beforeEach(() => {
    page = new GkipsumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
