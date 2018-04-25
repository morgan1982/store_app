const {Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

const keys = require('../config/keys');


var chromeCapabilities = webdriver.Capabilities.chrome();


var chromeOptions = {
    'args': ['--test-type', '--window-size=800,1000', '--window-position=1100,10']
};

chromeCapabilities.set('chromeOptions', chromeOptions);

const driver = new Builder()
                .forBrowser('chrome')
                .withCapabilities(chromeCapabilities)
                .build();



class Automator {


    async navigator () {
        await driver.get('http://www.google.com');
        console.log('google done');
                
        
    }

    async crmLogin () {
        driver.get('https://crm.irepair.gr/auth/login');
        await driver.findElement(By.xpath('//*[@id="identity"]')).sendKeys(keys.userName);
        await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys(keys.password);
        await driver.findElement(By.xpath('//*[@id="login-box"]/form/div[2]/button')).click();

        
        console.log('crmlogin done');
    }

    async ticketNav (ticket) {

        await driver.get(`https://crm.irepair.gr/tickets/ticket/update/GL-${ticket}`);

        await driver.findElement(By.xpath('/html/body/div[2]/aside[2]/section[2]/div/div[2]/div[3]/form/div[1]/div[1]/span/span[1]/span')).sendKeys(Key.ENTER);

        //*[@id="select2-prechecklist_done_by-container"]
        // pre check form
        const pre = await this.input_selector();
        this.inputDetails(pre);

        await driver.findElement(By.xpath('/html/body/div[2]/aside[2]/section[2]/div/div[2]/div[3]/form/div[1]/div[2]/span/span[1]/span')).sendKeys(Key.ENTER);

        const post = await this.input_selector();
        this.inputDetails(post);

        // driver.sleep(1000);
        // asign tech 

        await driver.findElement(By.xpath('/html/body/div[2]/aside[2]/section[2]/div/div[2]/div[3]/form/div[1]/div[3]/span/span[1]/span'))
        .sendKeys(Key.ENTER);
        const asign_to_tech = await this.input_selector();
        
        await this.inputDetails(asign_to_tech);

        await this.set_status("With Technician");




        console.log('ticket nav done');
    }



    async set_status (status_key) {
        
        await driver(By.xpath('/html/body/div[2]/aside[2]/section[2]/div/div[2]/div[3]/form/div[1]/div[4]/span/span[1]/span')).sendKeys(Key.ENTER);
        console.log(status_key);
        // await driver.wait(until.elementLocated(By.xpath('/html/body/span/span/span[1]/input'))).sendKeys(status_key);
    }

    // selects the input box
    input_selector () {

        return driver.wait(until.elementLocated(By.xpath('/html/body/span/span/span[1]/input')), 3000);
    }

    // fills the details
    async inputDetails (val) {
        
        await val.sendKeys("Tassos");
        await val.sendKeys(Key.ENTER);
    }
 }

autom = new Automator();


// with callback
// autom.crmLogin(() => {
//     driver.get('https://crm.irepair.gr/tickets/ticket/update/GL-295210')
// });
autom.crmLogin().then(() => autom.ticketNav("295210"))

