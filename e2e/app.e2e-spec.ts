import { DiceGamePage } from './app.po';

describe('dice-game App', function() {
  let page: DiceGamePage;

  beforeEach(() => {
    page = new DiceGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
