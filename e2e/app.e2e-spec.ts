import { SampleWeather } from './app.po';

describe('sample-weather App', () => {
  let page: SampleWeather;

  beforeEach(() => {
    page = new SampleWeather();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
