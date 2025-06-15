import { test, expect } from '@playwright/test';

test('should find Garfield movie in search results', async ({ page }) => {
  // Navigate to the movies app
  await page.goto('https://debs-obrien.github.io/playwright-movies-app');
  
  // Click the search button and type 'Garfield'
  await page.getByRole('search').click();
  await page.getByRole('textbox', { name: 'Search Input' }).fill('Garfield');
  await page.getByRole('textbox', { name: 'Search Input' }).press('Enter');
  
  // Verify the movie is in the list (with increased timeout)
  await expect(page.getByRole('heading', { name: 'The Garfield Movie', level: 2 })).toBeVisible({ timeout: 10000 });
});
