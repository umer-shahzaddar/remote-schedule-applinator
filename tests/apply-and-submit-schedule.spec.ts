import dotenv from 'dotenv';
dotenv.config();
import { expect, test } from '@playwright/test';

const baseUrl = 'https://employ.remote.com/sign-in/'
const emailInput = '//input[@id="email"]'
const passwordInput = '//input[@id="password"]'
const loginButton = '//*[@data-testid="signInButton"]'
const timeTrackingMenuItem = '//*[@data-nav-item-id="time-tracking"]'
const applyDefaultScheduleButton = '//button[@data-dd-action-name="Apply default schedule"]'
const confirmationMessageAlert = '//*[text()="Work hours applied successfully"]'
const submitTimesheetButton = '//button[@data-dd-action-name="Submit timesheet"]'

test('Apply default schedule and submit', async ({ page }) => {
    await page.goto(baseUrl);
    await page.locator(emailInput).fill(process.env.REMOTE_USER!)
    await page.locator(passwordInput).fill(process.env.REMOTE_PASSWORD!)
    await page.locator(loginButton).click()
    await page.locator(timeTrackingMenuItem).click()
    await page.locator(applyDefaultScheduleButton).click()
    await expect(page.locator(confirmationMessageAlert)).toBeVisible();
    await page.locator(submitTimesheetButton).click()
});
