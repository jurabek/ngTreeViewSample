import { TreeAppPage } from './app.po';

describe('tree-app App', () => {
  let page: TreeAppPage;

  beforeEach(() => {
    page = new TreeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
