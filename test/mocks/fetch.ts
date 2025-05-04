import fetchMock from "fetch-mock";

export function fetchMockSuccess() {
    fetchMock.mockGlobal().get('https://support.flexibee.eu/api/categories', [
        { id: 1, nameCs: 'Tisk', nameSk: 'Tlač', nameEn: 'Print', nameDe: 'Drucken', active: true },
        { id: 2, nameCs: 'Nástroje', nameSk: 'Nástroje', nameEn: 'Tools', nameDe: 'Werkzeuge', active: true },
        { id: 3, nameCs: 'E-shopy', nameSk: 'E-shopy', nameEn: 'E-shops', nameDe: 'E-shops', active: true },
        { id: 4, nameCs: 'Peníze', nameSk: 'Peniaze', nameEn: 'Money', nameDe: 'Geld', active: true },
        { id: 5, nameCs: 'Obchod', nameSk: 'Obchod', nameEn: 'Trade', nameDe: 'Handel', active: true },
        { id: 6, nameCs: 'Sklad a doprava', nameSk: 'Sklad a doprava', nameEn: 'Warehouse and shipping', nameDe: 'Lager und Versand', active: true },
        { id: 7, nameCs: 'CRM', nameSk: 'CRM', nameEn: 'CRM', nameDe: 'CRM', active: true },
        { id: 8, nameCs: 'Analýzy', nameSk: 'Analýzy', nameEn: 'Analyses', nameDe: 'Analysen', active: true },
    ]);
}

export function fetchMockError() {
    fetchMock.mockGlobal().get('https://support.flexibee.eu/api/categories', 500);
}

export function resetFetchMock() {
    fetchMock.unmockGlobal();
}