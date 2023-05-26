class deleteBookmarks{
    get deletebookmark(){
        return $("//*[@text='Edit']");
    }
    get deleteopt(){
        return $("//*[@text='Delete']");
    }
   async deletebook(){
      await  this.deletebookmark.click();
    }
    async deleteoption(){
        await this.deleteopt.click();
    }
}
module.exports=new deleteBookmarks();