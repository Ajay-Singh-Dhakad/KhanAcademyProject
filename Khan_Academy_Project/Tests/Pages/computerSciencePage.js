class computerscience{
    get computerscienceoptn(){
        return $("//*[@text='Computer science']");
    }

    async computerscienceOption (){
        await this.computerscienceoptn.click();
    }
}

module.exports= new computerscience();