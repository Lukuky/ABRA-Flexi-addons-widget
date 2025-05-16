import { fixture, html, expect } from '@open-wc/testing';
import { fetchMockSuccess, fetchMockError, resetFetchMock } from './mocks/fetch';
import '../src/index';

mocha.timeout(10000);

describe('Success', () => {
    before(() => {
        fetchMockSuccess();
    });

    after(() => {
        resetFetchMock();
    });

    it('renders the widget layout correctly', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);
        const container = widget.shadowRoot.querySelector('#container');
        expect(container).to.exist;
        const header = container.querySelector('header');
        expect(header).to.exist;
        const h1 = header.querySelector('h1');
        expect(h1).to.exist;
        const selectLocale = header.querySelector('#selectLocale');
        expect(selectLocale).not.to.exist;
        const selectCategory = container.querySelector('#selectCategory');
        expect(selectCategory).to.exist;
        const search = container.querySelector('#search');
        expect(search).to.exist;
        const content = container.querySelector('#content');
        expect(content).to.exist;
        const footer = container.querySelector('footer');
        expect(footer).to.exist;
        const pager = container.querySelector('#pager');
        expect(pager).to.exist;
    });

    it('renders locales in the dropdown', async () => {
        const widget = await fixture(html`<addons-widget localeSelect></addons-widget>`);
        const selectLocale = widget.shadowRoot.querySelector('#selectLocale');
        expect(selectLocale).to.exist;
    });

    it('renders only by partner', async () => {
        const widget = await fixture(html`<addons-widget partnerId=1></addons-widget>`);
        const onlyByPartner = widget.shadowRoot.querySelector('#onlyByPartner');
        expect(onlyByPartner).to.exist;
    });

    it('changes category and resets page number', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);
        await new Promise(resolve => setTimeout(resolve, 200));

        const selectCategory = widget.shadowRoot.querySelector('#selectCategory') as HTMLSelectElement;
        selectCategory.value = '1';
        selectCategory.dispatchEvent(new Event('change'));

        expect(selectCategory.value).to.equal('1');
    });

    it('navigates to addon detail view and back', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);
        await new Promise(resolve => setTimeout(resolve, 200));

        const addonCard = widget.shadowRoot.querySelector('.addon') as HTMLElement;
        addonCard.click();
        await new Promise(resolve => setTimeout(resolve, 200));

        const content = widget.shadowRoot.querySelector('#content');
        expect(content).to.exist;

        const detail = content.querySelector('.detail');
        expect(detail).to.exist;


        const backButton = widget.shadowRoot.querySelector('.btnEmpty.left') as HTMLButtonElement;
        backButton.click();

        await new Promise(resolve => setTimeout(resolve, 200));

        const cards = widget.shadowRoot.querySelector('.cards');
        expect(cards).to.exist;
    });

    it('fetch categories properly', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);

        await new Promise(resolve => setTimeout(resolve, 200));

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

    it('install and uninstall addon', async function () {

        const widget = await fixture(html`<addons-widget installEndpoint='/path'></addons-widget>`);
        await new Promise(resolve => setTimeout(resolve, 200));

        const addonCard = widget.shadowRoot.querySelector('.addon') as HTMLElement;
        addonCard.click();
        await new Promise(resolve => setTimeout(resolve, 200));

        const installButton = widget.shadowRoot.querySelector('#installButton') as HTMLButtonElement;
        installButton.click();

        await new Promise(resolve => setTimeout(resolve, 200));

        const banner = widget.shadowRoot.querySelector('.banner');
        expect(banner).to.exist;

        await new Promise(resolve => setTimeout(resolve, 2500));

        const backToDetailButton = widget.shadowRoot.querySelector('#backToDetail') as HTMLButtonElement;
        backToDetailButton.click();

        await new Promise(resolve => setTimeout(resolve, 200));

        const uninstallButton = widget.shadowRoot.querySelector('#uninstallButton') as HTMLButtonElement;
        expect(uninstallButton).to.exist;
        uninstallButton.click();

        await new Promise(resolve => setTimeout(resolve, 2500));

        expect(installButton).to.exist;
    });

    it('passes accessibility checks', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);
        await expect(widget).to.be.accessible();
    });
});

describe('Error', () => {
    before(() => {
        resetFetchMock();
        fetchMockError();
    });

    after(() => {
        resetFetchMock();
    });

    it('Layout', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);
        const container = widget.shadowRoot.querySelector('#container');
        expect(container).to.exist;
        const header = container.querySelector('header');
        expect(header).to.exist;
        const h1 = header.querySelector('h1');
        expect(h1).to.exist;
        const selectLocale = header.querySelector('#selectLocale');
        expect(selectLocale).not.to.exist;
        const selectCategory = container.querySelector('#selectCategory');
        expect(selectCategory).to.exist;
        const search = container.querySelector('#search');
        expect(search).to.exist;
        const content = container.querySelector('#content');
        expect(content).to.exist;
        const footer = container.querySelector('footer');
        expect(footer).to.exist;
        const pager = container.querySelector('#pager');
        expect(pager).to.exist;
    });

    it('Fetch categories', async () => {
        const widget = await fixture(html`<addons-widget></addons-widget>`);

        await new Promise(resolve => setTimeout(resolve, 200));

        const selectCategory = widget.shadowRoot.querySelector('#selectCategory') as HTMLSelectElement;
        expect(selectCategory).to.exist;
        expect(selectCategory.value).to.be.equal('');

        const options = Array.from(selectCategory.querySelectorAll('option'));
        expect(options).to.have.length(1);
        expect(options[0].textContent.trim()).to.equal('--Všechny--');

    });

    it('a11y', async () => {
        const el = await fixture(html` <addons-widget></addons-widget> `);
        await expect(el).to.be.accessible();
    });
});