import { test, expect, type Page } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/myBooking");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("admin");
  await page.getByPlaceholder("Email").press("Alt+@");
  await page.getByPlaceholder("Email").press("Alt+@");
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").press("Meta+2");
  await page.getByPlaceholder("Email").click({
    modifiers: ["Alt"],
  });
  await page.getByPlaceholder("Email").press("Alt+@");
  await page.getByPlaceholder("Email").press("Control+2");
  await page.getByPlaceholder("Email").click();
  await page.locator("div").nth(2).click();
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("admin@gmail.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByPlaceholder("Password").press("Enter");
  await page.locator("svg").first().click();
  await page.getByRole("link", { name: "Settings" }).click();
  await page.locator("svg").first().click();
  await page.getByRole("link", { name: "Add User" }).click();
  await page.getByText("Create UserNot AdminAdminNot AdminCreate").click();
  await page.getByPlaceholder("Email").click();
  await page.getByText("Not AdminAdminNot AdminCreate").click();
  await page.locator(".sc-hLBbgP > a:nth-child(2)").click();
  await page
    .locator("#root div")
    .filter({
      hasText:
        "MyBookingsSettingsAll UsersAdd UserLoggoutMy booked laundrytimes 0/3",
    })
    .locator("div")
    .nth(4)
    .click();
  await page.locator(".sc-hLBbgP > a:nth-child(3)").click();
  await page.locator(".sc-hsWlPz").first().click();
  await page.getByRole("button", { name: "15 December 2022" }).click();
  await page.getByRole("button", { name: "23 December 2022" }).click();
  await page.getByRole("heading", { name: "Available" }).nth(1).click();
  await page.getByRole("button", { name: "book" }).click();
  await page.locator("div:nth-child(3) > .sc-idXgbr").click();
});
