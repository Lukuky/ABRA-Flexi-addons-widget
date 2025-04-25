// https://modern-web.dev/docs/dev-server/plugins/esbuild/
import { playwrightLauncher } from '@web/test-runner-playwright';
// https://modern-web.dev/docs/test-runner/browser-launchers/playwright/
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fileURLToPath } from 'url';

export default {
    nodeResolve: true,
    // Using playwright to test in multiple browsers at once
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
        playwrightLauncher({ product: 'webkit' }),
    ],
    files: 'test/**/*.test.ts',
    // not using the tsconfig
    mimeTypes: {
        '**/*.ts': 'application/javascript',
    },
    plugins: [
        esbuildPlugin({
            ts: true,
            tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
        })
    ],
};