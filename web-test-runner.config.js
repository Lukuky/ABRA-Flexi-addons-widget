// https://modern-web.dev/docs/dev-server/plugins/esbuild/
import { playwrightLauncher } from '@web/test-runner-playwright';
// https://modern-web.dev/docs/test-runner/browser-launchers/playwright/
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fileURLToPath } from 'url';

export default {
    nodeResolve: true,
    browsers: [
        playwrightLauncher({ product: 'chromium' }),
        playwrightLauncher({ product: 'firefox' }),
        playwrightLauncher({ product: 'webkit' }),
    ],
    files: 'test/**/*.test.ts',
    mimeTypes: {
        '**/*.ts': 'application/javascript',
    },
    plugins: [
        esbuildPlugin({
            ts: true,
            tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
        })
    ],
    coverage: true,
    coverageConfig: {
        exclude: [
            'dist/**',
            'local_modules/**',
            'node_modules/**',
            'test/**',
        ],
    },
};