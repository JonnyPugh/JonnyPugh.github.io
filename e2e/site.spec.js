import { test, expect } from '@playwright/test'

test('renders the homepage with key content', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('h1')).toContainText('Jonathan')
  await expect(page.getByRole('heading', { name: 'Background' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible()
})
