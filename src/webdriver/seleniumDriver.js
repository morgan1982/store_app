const selenium = require('selenium-webdriver');
const By = require('selenium-webdriver').By
const Dimension = require('selenium-webdriver').Dimension

const keys = require("../config/keys");

Promise.USE_PROMISE_MANAGER = false;


const chromeCapabilities = selenium.Capabilities.chrome();

const chrome_options = {
    'args': ['--window-size=800,1000', '--window-position=1100,0']
}
chromeCapabilities.set('chromeOptions', chrome_options);

const driver = new selenium.Builder()
.withCapabilities(chromeCapabilities)
.build();


(async () => {
    await driver.get("https://crm.irepair.gr/auth/login");
    await driver.findElement(By.xpath('//*[@id="identity"]')).sendKeys(keys.userName);
    await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(keys.passWord);
    await driver.wait(selenium.until.elementLocated(By.className('btn'), 1000)).click();
    await driver.wait(selenium.until.elementLocated(By.className('close'), 1000)).click();
    
    
})();

// driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294055');


(async () => {
    const ticket = 294055;
    console.log("hey");
    await driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294055');
    // await driver.get(`https://crm.irepair.gr/tickets/ticket/update/gl-${ticket}`);

})();






const automator = {

    starter: () => {

        driver.get("https://crm.irepair.gr/auth/login");
        driver.wait(selenium.until.elementLocated(By.xpath('//*[@id="identity"]')));
        driver.findElement(By.xpath('//*[@id="identity"]'))
                            .then((elem) => elem.sendKeys(keys.userName))
        driver.findElement(By.xpath('//*[@id="password"]'))
                            .then((elem) => elem.sendKeys(keys.passWord))


    }
}

// automator.starter();






