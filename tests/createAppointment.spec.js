import { test } from '@playwright/test';
import { CuraHealth } from '../page-object/pageobject.js';
import { userLoginData } from '../helper/datauser.js';

let curaHealth;

test.describe.configure({
  mode: 'parallel',
});

test.beforeEach(async ({ page }, testInfo) => {
  console.log('Running test:', testInfo.title);
  console.log(`Worker : ${testInfo.parallelIndex}`);
  curaHealth = new CuraHealth(page);
});

test("Verify user cannot make appointment without visit date (tags: @appointment @verify_visit_date_required)", async ( ) => {
  await curaHealth.gotoURL();
  await curaHealth.clickMakeAppointment();
  await curaHealth.inputUsername(userLoginData.username);
  await curaHealth.inputPassword(userLoginData.password);
  await curaHealth.clickLogin();
  await curaHealth.clickAppointment();
  await curaHealth.verifyVisitDateRequired();
});

test("Verify user can make appointment (tags: @appointment @make_appointment)", async ( ) => {
  await curaHealth.gotoURL();
  await curaHealth.clickMakeAppointment();
  await curaHealth.inputUsername(userLoginData.username);
  await curaHealth.inputPassword(userLoginData.password);
  await curaHealth.clickLogin();
  const facilityList = await curaHealth.selectFacility();
  await curaHealth.clickApplyHostReadmission();
  const healthProgram = await curaHealth.clickCheckboxHealthProgram();
  const visitDate = await curaHealth.inputVisitDate();
  const comment = await curaHealth.inputComment();
  await curaHealth.clickAppointment();
  await curaHealth.verifyAppointmentSuccess(facilityList, healthProgram, visitDate, comment);

});



