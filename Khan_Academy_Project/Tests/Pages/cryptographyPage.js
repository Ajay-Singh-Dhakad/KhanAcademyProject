class cryptography{
    get cryptographyOptn(){
        return $("//*[@text='Cryptography']");
    }
    get AncientCryptography(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Ancient cryptography\"))');
    }
    get AncientCryptographybtn(){
        return  $("//*[@content-desc='Add Bookmark']");
    }
    get cryptographyChallenge101(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Cryptography challenge 101\"))');
    }
    get cryptographyChallengebtn(){
       return $("(//*[@content-desc='Add Bookmark'])[2]");
    }
    get ModularArthimatic(){
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text(\"Modular arithmetic\"))');
    }
    get ModularCryptographybtn(){
        return  $("//*[@content-desc='Add Bookmark']");
    }

    async cryptographyOption (){
        await this.cryptographyOptn.click();
    }
    async AncientcryptographyOption (){
        await this.AncientCryptography();
    }
    async AddAncientcryptographyOption (){
        await this.AncientCryptographybtn.click();
    }
    async cryptographyChallengeOption (){
        await this.cryptographyChallenge101();
      
    }
    async AddcryptographyChallenge101(){
     await this.cryptographyChallengebtn.click();
    }
    async ModularcryptographyOption (){
        await this.ModularArthimatic();
    }
    async AddModularcryptography(){
        await this.ModularCryptographybtn.click();
       }
}

module.exports= new cryptography();