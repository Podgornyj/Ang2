import { TraningAngProjectPage } from './app.po';

describe('traning-ang-project App', () => {
  let page: TraningAngProjectPage;

  beforeEach(() => {
    page = new TraningAngProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
