const { driver } = require("@wdio/globals");

class FinancialLiteracy{
    get Financialliteracy(){
        return $("//*[@text='Financial Literacy']");
    }
 
    get wlcmToFinance(){
        return  $("//*[@text='Welcome to Financial Literacy']");
    }
    async clickFinancialliteracy(){
        await this.Financialliteracy.click();
      
    }
    async clickwlcmFinance(){
        await this.wlcmToFinance.click();
    }
}
module.exports=new FinancialLiteracy();