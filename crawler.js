async function getInfo(website_link) {

    const webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();


    await driver.get(website_link);

    try {
        const seller_name = await driver.wait(until.elementLocated(By.className('str-metadata__seller-link'))).getText();
        const seller_star = await driver.wait(until.elementLocated(By.id('feedback-score-tooltip'))).getText();
        const items = await driver.wait(until.elementLocated(By.className('srp-controls__count-heading'))).getText();
        const directory = await driver.wait(until.elementLocated(By.className('srp-refine__category__list'))).getText();

        // findElements(By)
        console.log("Name: ", seller_name);
        console.log("Total stars: ", seller_star);
        console.log("Total items: ", items);
        console.log("Directory: ", directory);
    } catch (error) {
        console.log(`Error Occurred: ${JSON.stringify(error)}`);
    }

    return 0;
}

const website_link = "https://www.ebay.com.au/str/quasarpackaging";

const data = getInfo(website_link);