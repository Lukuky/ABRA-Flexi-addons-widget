import { Task } from '@lit/task';
import { AddonsSearch, Category } from './types';

/**
 * Creates a task to fetch addon categories.
 *
 * This task fetches a list of addon categories from the Flexibee API and updates
 * the `_categories` state of the provided component. The task runs automatically
 * when the component is initialized.
 *
 * @param component The component instance that uses this task.
 * @returns {Task} A Lit Task instance for fetching categories.
 */
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

/**
 * Creates a task to fetch addons.
 *
 * This task fetches a paginated list of addons based on the provided filters (e.g., locale,
 * category, search phrase). It updates the `_currentAddons` and `_addonsTotalPages` states
 * of the provided component. The task runs automatically when the component is initialized.
 *
 * @param component The component instance that uses this task.
 * @returns {Task} A Lit Task instance for fetching addons.
 */
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

            component._currentAddons = data.content.map((addon) => ({
                ...addon,
                installed: installEndpoint ? installedAddons.has(addon.id) : false,
            }));
        },
    });

/**
 * Creates a task to simulate the installation of an addon.
 *
 * This task simulates the installation process of an addon. It updates the `_cycleInstall`
 * state to indicate that the installation is in progress. The actual installation logic
 * is not implemented yet and is currently mocked with a delay.
 *
 * @param component The component instance that uses this task.
 * @returns {Task} A Lit Task instance for simulating addon installation.
 */
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

            // TODO: Implement actual installation logic using installScript.

            // Simulate installation with a delay.
            await new Promise(resolve => setTimeout(resolve, 2000));

            component._installedAddons.add(component._selectedAddon.id);
            component._selectedAddon.installed = true;
        }
    });

/**
 * Creates a task to simulate the uninstallation of an addon.
 *
 * This task simulates the uninstallation process of an addon. It updates the `_cycleUninstall`
 * state to indicate that the uninstallation is in progress. The actual uninstallation logic
 * is not implemented yet and is currently mocked with a delay.
 *
 * @param component The component instance that uses this task.
 * @returns {Task} A Lit Task instance for simulating addon uninstallation.
 */
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

            // TODO: Implement actual uninstallation logic using uninstallScript.

            // Simulate uninstallation with a delay.
            await new Promise(resolve => setTimeout(resolve, 2000));

            component._installedAddons.delete(component._selectedAddon.id);
            component._selectedAddon.installed = false;
        }
    });