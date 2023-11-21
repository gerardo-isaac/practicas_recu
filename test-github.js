const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_login() {
  // Crear una instancia del controlador de Selenium para Chrome
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Abrir la página de GitHub
    await driver.get("https://github.com");

    // Hacer clic en el enlace "Sign in"
    await driver.findElement(By.partialLinkText("Sign in")).click();

    // Ingresar nombre de usuario y contraseña y enviar el formulario
    await driver.findElement(By.name("login")).sendKeys("gerardo-isaac");
    await driver.findElement(By.name("password")).sendKeys("gerardoisaac1178", Key.RETURN);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Cerrar el navegador después de la ejecución
    await driver.quit();
  }
}

test_login();
