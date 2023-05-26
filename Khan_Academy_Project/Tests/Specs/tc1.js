const { driver } = require("@wdio/globals");
const clickondissmissbtn=require('../Pages/Home');
const clickExplorebutton=require('../Pages/ExplorePage');
const clickcomputerscience=require('../Pages/computerSciencePage');
const cryptography=require('../Pages/cryptographyPage');
const InfoTh=require('../Pages/InformationTheoryPage');
const clickonEdit=require('../Pages/DeleteBookmarks');
const lifeSk=require('../Page2/LifeSkillsPage');
const Finance=require('../Page2/FinancialLiteracyPage');
describe('Automating the Khan Academy', () => {
   
    it('clickonDissmissbtn', async ()=> {
        await driver.pause(5000);
        clickondissmissbtn.dismissbtn();
    });
   
    it('Click on Explore button', async() => {
        await driver.pause(3000);
        clickExplorebutton.click_explorebtn();
    });
    it('Click on Computing', async() => {
        await driver.pause(3000);
         clickExplorebutton.clickOncomputing();
     });
     it('Click on ComputerScienceOption', async() => {
           await driver.pause(3000);
        clickcomputerscience.computerscienceOption();
     });
     it('Go to cryptography page', async() => {
        await driver.pause(3000);
        cryptography.cryptographyOption();
       
     });	

     it('Add Ancient Cryptography', async() => {
       await driver.pause(3000);
       cryptography.AncientcryptographyOption();
       cryptography.AddAncientcryptographyOption();
       await driver.pause(3000);
       await driver.dismissAlert();
     });	

     it('Add cryptographyChallenge101', async() => {
      cryptography.cryptographyChallengeOption();
      //cryptography.AddcryptographyChallenge101();
      await $("(//*[@content-desc='Add Bookmark'])[2]").click();
     });	

     it('Add Modular Arithmatic Cryptography', async() => {
      //cryptography.ModularcryptographyOption();
     // cryptography.AddModularcryptography();
      await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Modular arithmetic\"))');
      await $("//*[@content-desc='Add Bookmark']").click();
     // await driver.pause(3000);
      await driver.back();
      await driver.back();
     });	
     it('Navigate back to ComputerSciencePage',async()=>{
        await driver.pause(3000);
        clickcomputerscience.computerscienceOption();
     })
     it('Navigate to InformationTheoryPage', async() => {
          InfoTh.Goinfotheory();
        await driver.pause(3000);
     });
     it('Add Modern Information Theory to bookmark', async() => {
        //InfoTh.ModernInfo();
         //InfoTh.clickbtn();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,2)');
        await $("(//*[@content-desc='Add Bookmark'])[1]").click();
     });
     it('Go To Bookmarks Page',async () => {
        await driver.touchAction({action: 'tap', x: 890, y:2043});
        const ele=await $$('android.widget.TextView');	
       const arr1=[
          'Bookmarks',
          'Edit',
          'Download settings',
          'Information theory',
          "Modern information theory",
          "538 MB",
          'Cryptography',
          'Modular arithmetic',
          'Cryptography',
          'Cryptography challenge 101',
          'Cryptography',
          'Ancient cryptography',
          '141 MB',
          'Home',
          'Explore',
          'Bookmarks'
        ];
        const arr=[];
        for(const el of ele){
            arr.push(await el.getText());
        }
        expect(arr1).toEqual(arr);
     });
     it('Click on Edit', async() => {
      
        clickonEdit.deletebook();
        await driver.pause(1000);
        const bookmarkss=await $$("//android.view.ViewGroup[@content-desc='Select bookmark']");
        for(const el of bookmarkss){
        await el.click();
        }
        clickonEdit.deleteoption();
        driver.back();
        
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
       await driver.pause(8000);
       const ele= await $("//*[@text='Intro to Financial Literacy']");
       expect(ele).toBeExisting();
       await driver.closeApp();
    });

    































    // it.only('ajajjaja', async() => {
    //     await driver.pause(5000);
    //     await $("//*[@resource-id='whatsNewScreenDismissButton']").click();
    //     await $('~Explore').click();
    //     await $("//*[@resource-id='Computing']").click();
    //     await  $("//*[@text='Computer science']").click();
    //     await $("//*[@text='Cryptography']").click();
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Ancient cryptography\"))');
    //     await $("//*[@content-desc='Add Bookmark']").click();
    //     await driver.dismissAlert();
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Cryptography challenge 101\"))');
    //     await $("(//*[@content-desc='Add Bookmark'])[2]").click();
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Modular arithmetic\"))');
    //     await $("//*[@content-desc='Add Bookmark']").click();
    //     await driver.pause(3000);

    //     driver.back();
    //     driver.back();
    //     await driver.pause(3000);
    //     await $("//*[@text='Computer science']").click();
    //     await $("//*[@text='Information theory']").click();
    //     driver.pause(3000);
    //    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Modern information theory\"))');	
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,2)');
    //     await $("(//*[@content-desc='Add Bookmark'])[1]").click();
    //       await driver.touchAction({action: 'tap', x: 890, y:2043});
    //    driver.pause(5000);
    // });
   
       
        
    //     const ele=await $$('.android.widget.TextView');
    //     const arr=[];
    //     for(const el of ele){
    //         arr.push(await el.getText());
    //         console.log(await el.getText());	
    //     }
    //     await driver.pause(6000);
    // const crpto=arr[0];
    // if(crpto==="Ancient cryptography"){
    //     await $ ("//*[@content-desc='Add Bookmark']").click();	
    //     await driver.pause(5000);
       
    // }
        
       
       
        
        //await locators.locator();
    // locators.diss();
  
    
});