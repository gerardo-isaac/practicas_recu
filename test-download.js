const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_download() {
  const chrome = require("selenium-webdriver/chrome");

  const chromeOptions = new chrome.Options();
  chromeOptions.setUserPreferences({ "download.default_directory": "c:\Users\gerar\Downloads" });

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();

  await driver.get("https://omayo.blogspot.com/p/page7.html");
  await driver.findElement(By.linkText("ZIP file")).click();
}

test_download();
