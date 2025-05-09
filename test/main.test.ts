import { fixture, html, expect } from '@open-wc/testing';
import { fetchMockSuccess, fetchMockError, resetFetchMock } from './mocks/fetch';
import '../src/main';


describe('Overview', () => {
    before(() => {
        fetchMockSuccess();
    });

    after(() => {
        resetFetchMock();
    });

    it('Layout', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);
        const header = widget.shadowRoot.querySelector('header');
        expect(header).to.exist;
        const content = widget.shadowRoot.querySelector('#content');
        expect(content).to.exist;
        const footer = widget.shadowRoot.querySelector('footer');
        expect(footer).to.exist;
    });
    it('Fetch categories', async () => {
        let widget = await fixture(html`<addons-widget></addons-widget>`);

        await new Promise(resolve => setTimeout(resolve, 1000));

        const selectCategory = widget.shadowRoot.querySelector('#selectCategory') as HTMLSelectElement;
        expect(selectCategory).to.exist;
        expect(selectCategory.value).to.be.equal('');

        const options = Array.from(selectCategory.querySelectorAll('option'));
        expect(options).to.have.length(9);
        expect(options[0].textContent.trim()).to.equal('--Všechny--');
        expect(options[1].textContent.trim()).to.equal('Tisk');
        expect(options[2].textContent.trim()).to.equal('Nástroje');
        expect(options[3].textContent.trim()).to.equal('E-shopy');
        expect(options[4].textContent.trim()).to.equal('Peníze');
        expect(options[5].textContent.trim()).to.equal('Obchod');
        expect(options[6].textContent.trim()).to.equal('Sklad a doprava');
        expect(options[7].textContent.trim()).to.equal('CRM');
        expect(options[8].textContent.trim()).to.equal('Analýzy');

    });
    // it('Category fetch (error)', async () => {
    // });
    // it('Addons fetch', async () => {
    // });
    // it('Addons fetch (error)', async () => {
    // });
    // it('Pagination', async () => {
    // });
    // it('Change category', async () => {
    // });
    // it('Search phrase', async () => {
    // });
    // it('', async () => {
    // });
});
// describe('Overview layout', () => {
//     it('Initial setup', async () => {
//     });
//     it('Who', async () => {
//     });
//     it('Render addons fetch error', async () => {
//     });
// });

/**
 * Accessibility testing
 * Addons widget element should be accessible with default values
 * (no attributes and style changes)
 */
// describe('a11y', () => {
//     it('works', async () => {
//         const el = await fixture(html` <addons-widget></addons-widget> `);
//         await expect(el).to.be.accessible();
//     });
// });