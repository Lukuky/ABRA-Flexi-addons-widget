import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../../generated/locale-codes';
import { templates as deTemplates } from '../../generated/locales/de';
import { templates as enTemplates } from '../../generated/locales/en';
import { templates as skTemplates } from '../../generated/locales/sk';

/**
 * Pre-rendering localizations
 * Specified in locale-codes.js generated from lit-localize.json
 */
const localizedTemplates = new Map([
    ['de', deTemplates],
    ['en', enTemplates],
    ['sk', skTemplates]
]);

/**
 * Configure localization
 * Locales from localizedTemplates
 */
export const { getLocale, setLocale } = configureLocalization({
    sourceLocale,
    targetLocales,
    loadLocale: async (locale: 'de' | 'en' | 'sk') => {
        const templates = localizedTemplates.get(locale);
        return { templates };
    },
});