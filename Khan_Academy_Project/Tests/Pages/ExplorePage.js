class Explore{
    get explorebtn(){
       return $('~Explore');
    }
    get Computingbtn(){
        return $("//*[@resource-id='Computing']");
    }

   async click_explorebtn(){
   await this.explorebtn.click();
    }
    async clickOncomputing(){
        await this.Computingbtn.click();
    }
}
module.exports=new Explore();