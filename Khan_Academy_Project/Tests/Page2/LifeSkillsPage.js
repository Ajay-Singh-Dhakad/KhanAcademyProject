class lifeSkill{
    get lifeSkillopt(){
        return $("//*[@text='Life skills']");
    }
    async clicklifeSkills(){
       await this.lifeSkillopt.click();
    }
}
module.exports=new lifeSkill();