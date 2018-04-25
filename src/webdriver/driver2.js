const selenium = require('selenium-webdriver');
const By = require('selenium-webdriver').By
const Dimension = require('selenium-webdriver').Dimension
const keys = require("../config/keys");
Promise.USE_PROMISE_MANAGER = false;


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

    async login () {
        await this.driver.get("https://crm.irepair.gr/auth/login");
        await this.driver.findElement(By.xpath('//*[@id="identity"]'))                       .sendKeys(keys.userName);
        await this.driver.findElement(By.xpath('//*[@id="password"]'))                       .sendKeys(keys.passWord);
        await this.driver.wait(selenium.until.elementLocated(By.className('btn'), 1000)).click();
        await this.driver.wait(selenium.until.elementLocated(By.className('close'), 1000)).click();
        // await this.driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294055');
        
    }

    // async navigates () {
    //     // console.log('hey');
    //     // this.driver.navigate().to('https://crm.irepair.gr/tickets/ticket/update/gl-294055');
    //     try {
    //         await this.driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294059');

    //     }catch (e) {
    //         console.log(e);
    //     }
        
    // }
}
class navigation extends Crm {


    async navigates (ticket) {
        // console.log(this.driver);
        console.log(ticket);
        // let current = await this.driver.getCurrentUrl();
        // console.log(current);
        await this.driver.getCurrentUrl();
        await this.driver.get('https://crm.irepair.gr/tickets/ticket/update/gl-294055');
    }
}


// const starter = new Crm();
// starter.login();
nav = new navigation();
nav.login();
nav.navigates("342345000");






