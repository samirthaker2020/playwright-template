import type { Page } from '@playwright/test';

// Simple wrapper for Playwright's page.goto.
// Supports resolving relative URLs against a BASE_URL environment variable.
export function goto(page: Page, url: string, options?: Parameters<Page['goto']>[1]) {
	// If an absolute URL is provided, navigate directly.
	if (/^https?:\/\//i.test(url)) {
		return page.goto(url, options);
	}

	// If BASE_URL is set in env, resolve the relative path against it.
	const base = process.env.BASE_URL;
	if (base) {
		try {
			const target = new URL(url, base).toString();
			return page.goto(target, options);
		} catch {
			// If URL construction fails, fall back to Playwright resolution.
			return page.goto(url, options);
		}
	}

	// Otherwise let Playwright handle resolution (e.g., using its configured baseURL).
	return page.goto(url, options);
}
