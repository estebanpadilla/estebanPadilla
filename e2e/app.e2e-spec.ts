import { EstebanpadillaPage } from './app.po';

describe('estebanpadilla App', function() {
  let page: EstebanpadillaPage;

  beforeEach(() => {
    page = new EstebanpadillaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
