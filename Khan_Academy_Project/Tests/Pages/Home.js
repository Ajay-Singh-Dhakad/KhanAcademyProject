 class khan_academy{
 get screendissmissbtn(){
   return $("//*[@resource-id='whatsNewScreenDismissButton']")
}

async dismissbtn(){
    await this.screendissmissbtn.click();
}
 
}
module.exports=new khan_academy();