class Information{
    get InfoTheory(){
        return $("//*[@text='Information theory']");
    }
    get ModernInfoTheory(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,2)');
    }
    get Infobtn(){
        return $("(//*[@content-desc='Add Bookmark'])[1]");
    }
    

   async Goinfotheory(){
        await this.InfoTheory.click();
    }
    async ModernInfo(){
        await this.ModernInfoTheory();
       
    }
    async clickbtn(){
        await this.Infobtn.click();
    }
    
}
module.exports=new Information();