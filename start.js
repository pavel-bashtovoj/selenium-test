const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('opera').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000000);
  } finally {
    await driver.quit();
  }
})();