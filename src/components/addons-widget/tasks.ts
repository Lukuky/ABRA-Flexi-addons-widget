import { Task } from '@lit/task';
import { AddonsSearch, Category } from './types';

export const createTaskCategories = (component: any) =>
    new Task(component, {
        autoRun: true,
        args: () => [],
        task: async ([], { signal }) => {
            const url = new URL('https://support.flexibee.eu/api/categories');
            const response = await fetch(url, { signal });

            if (!response.ok) {
                throw new Error(response.status.toString());
            }

            const data: Category[] = await response.json();
            component._categories = data;
        },
    });

export const createTaskAddons = (component: any) =>
    new Task(component, {
        autoRun: true,
        args: () => [
            component._selectedLocale,
            component._selectedCategory,
            component._addonsPageNum,
            component.addonsPerPage,
            component._searchPhrase,
            component.installEndpoint,
            component._installedAddons,
            component._onlyByPartner,
            component.partnerId,
        ],
        task: async ([langOpt, category, page, size, search, installEndpoint, installedAddons, onlyByPartner, partnerId], { signal }) => {
            const url = new URL('https://support.flexibee.eu/api/addons/search');
            url.searchParams.append('langOpt', langOpt);
            url.searchParams.append('page', page.toString());
            url.searchParams.append('size', size.toString());
            if (category) url.searchParams.append('categoryId', category.toString());
            if (search) url.searchParams.append('search', search);
            if (partnerId && onlyByPartner) url.searchParams.append('partnerId', partnerId);

            const response = await fetch(url, { signal });

            if (!response.ok) {
                throw new Error(response.status.toString());
            }

            const data: AddonsSearch = await response.json();
            component._addonsTotalPages = data.totalPages;

            if (installEndpoint) {
                component._currentAddons = data.content.map((addon) => ({
                    ...addon,
                    installed: installedAddons.has(addon.id),
                }));
            }
        },
    });

export const createTaskInstall = (component: any) =>
    new Task(component, {
        autoRun: false,
        args: () => [],
        task: async ([], { signal }) => {
            component._cycleInstall = true;
            if (!component.installEndpoint
                || !component._selectedAddon
                || !component._selectedAddon.installScript) {
                throw new Error("Missing properties for installing.");
            }
            // TODO install addon using installScript

            // Mock wait for install
            await new Promise(resolve => setTimeout(resolve, 5000));

            component._installedAddons.add(component._selectedAddon.id);
            component._selectedAddon.installed = true;
        }
    });

export const createTaskUninstall = (component: any) =>
    new Task(component, {
        autoRun: false,

        args: () => [],

        task: async ([], { signal }) => {
            component._cycleUninstall = true;
            if (!component.installEndpoint
                || !component._selectedAddon
                || !component._selectedAddon.uninstallScript) {
                throw new Error();
            }
            // TODO uninstall addon using uninstallScript

            // Mock wait for uninstall
            await new Promise(resolve => setTimeout(resolve, 3000));

            component._installedAddons.delete(component._selectedAddon.id);
            component._selectedAddon.installed = false;
        }
    });