const { By, Key, Builder, until } = require("selenium-webdriver");

async function pract3() {
  let driver;

  try {
    driver = new Builder().forBrowser("chrome").build();

    await driver.get("https://ratings.fide.com/top.phtml?list=men/");
    await driver.wait(until.elementLocated(By.css(".tur")), 10000);

    const names = await driver.findElements(By.css(".tur"));
    
    for (let n of names) {
      if (await n.getText() === "Grigoryyan, Karen H.") {
        console.log(await n.getText());
      }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

pract3();
