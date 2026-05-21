import { expect } from '@playwright/test';
import { selectDateMoreThanToday, generateRandomComment } from '../helper/randomizer.js';
require('dotenv').config();

export class CuraHealth {
  constructor(page) {
    this.page = page;
    this.WEB_URL = process.env.WEB_URL;
    this.btnMakeAppointment = '//a[@id="btn-make-appointment"]';
    this.txtUsername = '//input[@id="txt-username"]';
    this.txtPassword = '//input[@id="txt-password"]';
    this.loginButton = '//button[@id="btn-login"]';
    this.errorMessage = '//p[@class="lead text-danger"]';
    this.selectListFacility = '//select[@id="combo_facility"]';
    this.checkApplyHostpitalAdmission = '//input[@id="chk_hospotal_readmission"]';
    this.checkboxHealthProgram = '//input[@value="';
    this.visitDate = '//input[@id="txt_visit_date"]';
    this.txtDay = '//td[@class="day" and text()="';
    this.txtareComment = '//textarea[@id="txt_comment"]';
    this.btnAppointment = '//button[@id="btn-book-appointment"]';
    this.confirmFacility = '//p[@id="facility"]';
    this.confirmHospitalReadmission = '//p[@id="hospital_readmission"]';
    this.confirmHealthCareProgram = '//p[@id="program"]';
    this.confirmVisitDate = '//p[@id="visit_date"]';
    this.confirmComment = '//p[@id="comment"]';

  }

   async gotoURL(){
       const browserVersion = await this.page.context().browser().version();
       console.log(`browserVersion: ${browserVersion}`);
       const openCuraHealthUrl = this.WEB_URL;
       await this.page.goto(openCuraHealthUrl,{
        timeout: 15000,
        waitUntil: 'domcontentloaded',
       });
      
    }

    async clickMakeAppointment(){
        await this.page.locator(this.btnMakeAppointment).click();
    }

    async inputUsername(username){
        await this.page.locator(this.txtUsername).fill(username);
       
    }

    async inputPassword(password){
        await this.page.locator(this.txtPassword).fill(password);
       
    }

    async clickLogin(){
        await this.page.locator(this.loginButton).click();
    }

   async selectFacility() {
    const facilityList = [
        "Tokyo CURA Healthcare Center",
        "Hongkong CURA Healthcare Center",
        "Seoul CURA Healthcare Center"
    ];
    const randomIndex = Math.floor(Math.random() * facilityList.length);
    const randomFacility = facilityList[randomIndex];
    await this.page
        .locator(this.selectListFacility)
        .selectOption(randomFacility);
    return randomFacility;
}

    async clickApplyHostReadmission(){
        await this.page.locator(this.checkApplyHostpitalAdmission).click();
    }

    async clickCheckboxHealthProgram(){
      const healthProgramList = [
      "Medicare",
      "Medicaid",
      "None"
      ]
      const randomIndex = Math.floor(Math.random() * healthProgramList.length);
      const randomHealthProgram = healthProgramList[randomIndex];
        await this.page.locator(this.checkboxHealthProgram + randomHealthProgram + `"]`).click();
        return randomHealthProgram;
    }

    async inputVisitDate(){
      const visitDate = selectDateMoreThanToday();
      const day = visitDate.split('/')[0];
      const clickDay = this.txtDay + day + `"]`;
      await this.page.locator(this.visitDate).fill(visitDate);
      await this.page.locator(clickDay).click();
      return visitDate;
    }

    async inputComment(){
      const comment = generateRandomComment();
      await this.page.locator(this.txtareComment).fill(comment);
      return comment;
    }

    async clickAppointment(){
      await this.page.locator(this.btnAppointment).click();
    }

    async verifyVisitDateRequired() {

    await this.page.locator(this.btnAppointment).click();

    const validationMessage = await this.page
        .locator(this.visitDate)
        .evaluate((el) => el.validationMessage);

    expect(validationMessage)
        .toContain('fill out this field');
    }

    async verifyAppointmentSuccess(facilityList, healthProgram, visitDate, comment){
      await expect(this.page.locator(this.confirmFacility)).toHaveText(facilityList);
      await expect(this.page.locator(this.confirmHospitalReadmission)).toHaveText("Yes");
      await expect(this.page.locator(this.confirmHealthCareProgram)).toHaveText(healthProgram);
      await expect(this.page.locator(this.confirmVisitDate)).toHaveText(visitDate);
    }


  
}
module.exports = {CuraHealth}
