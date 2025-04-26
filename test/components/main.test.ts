import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';

import '../../dist/addons-widget.js';


/**
 * Accessibility testing
 * Addons widget element should be accessible with default values
 * (no attributes and style changes)
 */
describe('a11y', () => {
    it('works', async () => {
        const el = await fixture(html` <addons-widget></addons-widget> `);
        await expect(el).to.be.accessible();
    });
});