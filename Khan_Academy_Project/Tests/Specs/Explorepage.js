const clickondissmissbtn=require('../Pages/Home');
const clickExplorebutton=require('../Pages/ExplorePage');
const { driver, browser } = require('@wdio/globals');
const lifeSk=require('../Page2/LifeSkillsPage');
const Finance=require('../Page2/FinancialLiteracyPage');
describe('Testing the Life Skill ', () => {
    it('clickonDissmissbtn', async ()=> {
        await driver.pause(5000);
        clickondissmissbtn.dismissbtn();
    });
   
    it('Click on Explore button', async() => {
        await driver.pause(3000);
        clickExplorebutton.click_explorebtn();
    });
     it('Click on Life Skills', async() => {
     lifeSk.clicklifeSkills();
  });
  it('Go to Financial LiteracyPage', async() => {
      Finance.clickFinancialliteracy();
      Finance.clickwlcmFinance();
  });
  it('Play FinanceVideo', async() => {
    Finance.clickwlcmFinance();
    await driver.pause(16000);
    await $("//*[@text='Home']").click();
 const ele= await $("//*[@text='Intro to Financial Literacy']");
     expect(ele).toBeExisting();
});
});