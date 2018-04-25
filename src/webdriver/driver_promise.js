const selenium = require('selenium-webdriver');
const By = require('selenium-webdriver').By
const Dimension = require('selenium-webdriver').Dimension
const keys = require("../config/keys");


class Crm {

    constructor() {
        const chromeCapabilities = selenium.Capabilities.chrome();

        const chrome_options = {
            'args': ['--window-size=800,1000', '--window-position=1100,0']
        }
        chromeCapabilities.set('chromeOptions', chrome_options);
        
        this.driver = new selenium.Builder()
                        .withCapabilities(chromeCapabilities)
                        .build();
    }


    login (callback) {
        this.driver.get("https://crm.irepair.gr/auth/login");
        this.driver.findElement(By.xpath('//*[@id="identity"]')).sendKeys(keys.userName);
        this.driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(keys.passWord);
        this.driver.wait(selenium.until.elementLocated(By.className('btn'), 1000)).click();
        this.driver.wait(selenium.until.elementLocated(By.className('close'), 1000));
        
        callback();
    }

    navigates (ticket) {
        // console.log(this.driver);
        console.log(ticket);
        // let current = await this.driver.getCurrentUrl();
        // console.log(current);
        // this.driver.getCurrentUrl();
        // this.driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294055');

    }
}

class Navigation extends Crm {


    navigates (ticket) {
        // console.log(this.driver);
        console.log(ticket);
        // let current = await this.driver.getCurrentUrl();
        // console.log(current);
        // this.driver.getCurrentUrl();
        this.driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294055');
    }
}

// const nav = new Navigation();

// nav.login();
// nav.navigates("342345000");
// async () => {
//     await nav.login();
//     // await nav.navigates();
// }

// nav.navigates();
// nav.login().then(() => nav.navigates());
// nav.login(nav.navigates);
const auto = new Crm();

auto.login(() => {
    console.log("the callback");
    console.log(this.driver);
});