import { ChecksWeather } from './app.po';

describe('checks-weather App', () => {
  let page: ChecksWeather;

  beforeEach(() => {
    page = new ChecksWeather();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
