import { test } from "@playwright/test";

test("home page", async ({ page }) => {
  await page.goto("/");
});

test("tokens page", async ({ page }) => {
  await page.goto("/tokens");
});

test("world page", async ({ page }) => {
  await page.goto("/world");
});

test("mint page", async ({ page }) => {
  await page.goto("/mint");
});
