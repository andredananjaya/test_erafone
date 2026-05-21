import { test } from '@playwright/test';
import { CuraHealth } from '../page-object/pageobject.js';
import { userLoginData, invalidLoginData } from '../helper/datauser.js';

let curaHealth;

test.describe.configure({
  mode: 'parallel',
});

test.beforeEach(async ({ page }, testInfo) => {
  console.log('Running test:', testInfo.title);
  console.log(`Worker : ${testInfo.parallelIndex}`);
  curaHealth = new CuraHealth(page);
});

test("Login with invalid data(tags: @login @verify_login_failed)", async ( ) => {
  await curaHealth.gotoURL();
  await curaHealth.clickMakeAppointment();
  await curaHealth.inputUsername(invalidLoginData.username);
  await curaHealth.inputPassword(invalidLoginData.password);
  await curaHealth.clickLogin();
  await curaHealth.verifyLoginFailed();
});

test("Make Appointment - Success (tags: @login @verify_login_success)", async ( ) => {
  await curaHealth.gotoURL();
  await curaHealth.clickMakeAppointment();
  await curaHealth.inputUsername(userLoginData.username);
  await curaHealth.inputPassword(userLoginData.password);
  await curaHealth.clickLogin();
  await curaHealth.verifyLoginSuccess();
});



