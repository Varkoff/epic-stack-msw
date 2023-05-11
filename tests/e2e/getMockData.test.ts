import { test, expect } from '@playwright/test'

test('Test that Mocks are running', async ({ page }) => {
	// Accessing our Remix resource route '/data', calling an external http://example.com/posts API
	const [data] = await Promise.all([
		page.waitForResponse(`/data`).then(res => res.json()),
		page.goto(`/data`),
	])

	// response should contain objects
	expect(data).toBeInstanceOf(Array)
	expect(data.length).toEqual(1)
	const [firstPost] = data
	expect(firstPost.id).toEqual(18)
	expect(firstPost.title).toEqual('Mocked post')
})
