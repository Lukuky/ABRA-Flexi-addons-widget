import fetchMock from "fetch-mock";

export function fetchMockSuccess() {
    fetchMock.mockGlobal()
        .get('https://support.flexibee.eu/api/categories', {
            status: 200,
            body: [
                { id: 1, nameCs: 'Tisk', nameSk: 'Tlač', nameEn: 'Print', nameDe: 'Drucken', active: true },
                { id: 2, nameCs: 'Nástroje', nameSk: 'Nástroje', nameEn: 'Tools', nameDe: 'Werkzeuge', active: true },
                { id: 3, nameCs: 'E-shopy', nameSk: 'E-shopy', nameEn: 'E-shops', nameDe: 'E-shops', active: true },
                { id: 4, nameCs: 'Peníze', nameSk: 'Peniaze', nameEn: 'Money', nameDe: 'Geld', active: true },
                { id: 5, nameCs: 'Obchod', nameSk: 'Obchod', nameEn: 'Trade', nameDe: 'Handel', active: true },
                { id: 6, nameCs: 'Sklad a doprava', nameSk: 'Sklad a doprava', nameEn: 'Warehouse and shipping', nameDe: 'Lager und Versand', active: true },
                { id: 7, nameCs: 'CRM', nameSk: 'CRM', nameEn: 'CRM', nameDe: 'CRM', active: true },
                { id: 8, nameCs: 'Analýzy', nameSk: 'Analýzy', nameEn: 'Analyses', nameDe: 'Analysen', active: true },
            ]
        })
        .get(
            'https://support.flexibee.eu/api/addons/search?langOpt=cs&page=0&size=12', {
            status: 200,
            body: {
                content: [
                    {
                        id: 1,
                        partner: {
                            id: 1,
                            key: "example1",
                            name: "Example 1 s.r.o.",
                            url: "www.example1.cz",
                            logo: "https://www.flexibee.eu/.../example1.png"
                        },
                        categories: ["Sklad a doprava"],
                        name: "Example name 1",
                        perex: "Short description for example 1.",
                        description: "Detailed description for example 1.",
                        developer: "Example dev 1",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example1.png",
                        active: true,
                        variants: ["business", "premium"],
                        hasPrice: true
                    },
                    {
                        id: 2,
                        partner: {
                            id: 1,
                            key: "example",
                            name: "Example s.r.o.",
                            url: "www.example.cz",
                            logo: ""
                        },
                        categories: ["Sklad a doprava", "Obchod"],
                        name: "Example name 2",
                        perex: "Short description for example 2.",
                        description: "Detailed description for example 2.",
                        developer: "Example dev",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "",
                        active: true,
                        variants: ["basic", "business", "premium"],
                        hasPrice: false
                    },
                    {
                        id: 3,
                        partner: {
                            id: 2,
                            key: "example2",
                            name: "Example 2 s.r.o.",
                            url: "www.example2.cz",
                            logo: "https://www.flexibee.eu/.../example2.png"
                        },
                        categories: ["Sklad a doprava"],
                        name: "Example name 3",
                        perex: "Short description for example 3.",
                        description: "Detailed description for example 3.",
                        developer: "Example dev 2",
                        installScript: "",
                        uninstallScript: "",
                        photo: "https://www.flexibee.eu/.../example3.png",
                        active: true,
                        variants: ["business"],
                        hasPrice: true
                    },
                    {
                        id: 4,
                        partner: {
                            id: 3,
                            key: "example3",
                            name: "Example 3 s.r.o.",
                            url: "www.example3.cz",
                            logo: "https://www.flexibee.eu/.../example4.png"
                        },
                        categories: ["CRM"],
                        name: "Example name 4",
                        perex: "Short description for example 4.",
                        description: "Detailed description for example 4.",
                        developer: "Example dev 3",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example4.png",
                        active: true,
                        variants: ["basic", "premium"],
                        hasPrice: false
                    },
                    {
                        id: 5,
                        partner: {
                            id: 4,
                            key: "example4",
                            name: "Example 4 s.r.o.",
                            url: "www.example4.cz",
                            logo: "https://www.flexibee.eu/.../example5.png"
                        },
                        categories: ["Analýzy"],
                        name: "Example name 5",
                        perex: "Short description for example 5.",
                        description: "Detailed description for example 5.",
                        developer: "Example dev 4",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example5.png",
                        active: true,
                        variants: ["business", "premium"],
                        hasPrice: true
                    },
                    {
                        id: 6,
                        partner: {
                            id: 5,
                            key: "example5",
                            name: "Example 5 s.r.o.",
                            url: "www.example5.cz",
                            logo: "https://www.flexibee.eu/.../example6.png"
                        },
                        categories: ["Obchod"],
                        name: "Example name 6",
                        perex: "Short description for example 6.",
                        description: "Detailed description for example 6.",
                        developer: "Example dev 5",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example6.png",
                        active: true,
                        variants: ["basic"],
                        hasPrice: false
                    },
                    {
                        id: 7,
                        partner: {
                            id: 6,
                            key: "example6",
                            name: "Example 6 s.r.o.",
                            url: "www.example6.cz",
                            logo: "https://www.flexibee.eu/.../example7.png"
                        },
                        categories: ["Tisk"],
                        name: "Example name 7",
                        perex: "Short description for example 7.",
                        description: "Detailed description for example 7.",
                        developer: "Example dev 6",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example7.png",
                        active: true,
                        variants: ["premium"],
                        hasPrice: true
                    },
                    {
                        id: 8,
                        partner: {
                            id: 7,
                            key: "example7",
                            name: "Example 7 s.r.o.",
                            url: "www.example7.cz",
                            logo: "https://www.flexibee.eu/.../example8.png"
                        },
                        categories: ["Nástroje"],
                        name: "Example name 8",
                        perex: "Short description for example 8.",
                        description: "Detailed description for example 8.",
                        developer: "Example dev 7",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example8.png",
                        active: true,
                        variants: ["basic", "business"],
                        hasPrice: false
                    },
                    {
                        id: 9,
                        partner: {
                            id: 8,
                            key: "example8",
                            name: "Example 8 s.r.o.",
                            url: "www.example8.cz",
                            logo: "https://www.flexibee.eu/.../example9.png"
                        },
                        categories: ["E-shopy"],
                        name: "Example name 9",
                        perex: "Short description for example 9.",
                        description: "Detailed description for example 9.",
                        developer: "Example dev 8",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example9.png",
                        active: true,
                        variants: ["business", "premium"],
                        hasPrice: true
                    },
                    {
                        id: 10,
                        partner: {
                            id: 9,
                            key: "example9",
                            name: "Example 9 s.r.o.",
                            url: "www.example9.cz",
                            logo: "https://www.flexibee.eu/.../example10.png"
                        },
                        categories: ["Peníze"],
                        name: "Example name 10",
                        perex: "Short description for example 10.",
                        description: "Detailed description for example 10.",
                        developer: "Example dev 9",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example10.png",
                        active: true,
                        variants: ["basic", "premium"],
                        hasPrice: false
                    },
                    {
                        id: 11,
                        partner: {
                            id: 10,
                            key: "example10",
                            name: "Example 10 s.r.o.",
                            url: "www.example10.cz",
                            logo: "https://www.flexibee.eu/.../example11.png"
                        },
                        categories: ["Tisk"],
                        name: "Example name 11",
                        perex: "Short description for example 11.",
                        description: "Detailed description for example 11.",
                        developer: "Example dev 10",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example11.png",
                        active: true,
                        variants: ["basic", "business"],
                        hasPrice: false
                    },
                    {
                        id: 12,
                        partner: {
                            id: 11,
                            key: "example11",
                            name: "Example 11 s.r.o.",
                            url: "www.example11.cz",
                            logo: "https://www.flexibee.eu/.../example12.png"
                        },
                        categories: ["Nástroje"],
                        name: "Example name 12",
                        perex: "Short description for example 12.",
                        description: "Detailed description for example 12.",
                        developer: "Example dev 11",
                        installScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        uninstallScript: "<winstrom version=\"1.0\" atomic=\"true\">...</winstrom>",
                        photo: "https://www.flexibee.eu/.../example12.png",
                        active: true,
                        variants: ["premium"],
                        hasPrice: true
                    }
                ]
            }
        });
}
export function fetchMockError() {
    fetchMock.mockGlobal()
        .get('https://support.flexibee.eu/api/categories', {
            status: 500
        })
        .get(
            'https://support.flexibee.eu/api/addons/search?langOpt=cs&page=0&size=12', {
            status: 500
        });
}
export function resetFetchMock() {
    fetchMock.hardReset();
}