import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';

describe('my-test', () => {
    it('works', async () => {
        const el = await fixture(html` <addons-widget></addons-widget> `);
        expect(el).to.exist;
    });
});