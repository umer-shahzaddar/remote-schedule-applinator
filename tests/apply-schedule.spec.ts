import dotenv from 'dotenv';
dotenv.config();
import { expect, test } from '@playwright/test';

const baseUrl = 'https://employ.remote.com/sign-in/'
const emailInput = '//input[@id="email"]'
const passwordInput = '//input[@id="password"]'
const loginButton = '//*[@data-testid="signInButton"]'
const timeTrackingMenuItem = '//*[@data-nav-item-id="time-tracking"]'
const applyDefaultSchedule = '//button[@data-dd-action-name="Apply default schedule"]'
const confirmationMessage = '//*[text()="Work hours applied successfully"]'

test('Apply default schedule', async ({ page }) => {
    await page.goto(baseUrl);
    await page.locator(emailInput).fill(process.env.REMOTE_USER!)
    await page.locator(passwordInput).fill(process.env.REMOTE_PASSWORD!)
    await page.locator(loginButton).click()
    await page.locator(timeTrackingMenuItem).click()
    await page.locator(applyDefaultSchedule).click()
    await expect(page.locator(confirmationMessage)).toBeVisible();
});
