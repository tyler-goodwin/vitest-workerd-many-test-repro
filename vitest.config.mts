import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				singleWorker: false, // Changing to true makes tests work
				isolatedStorage: true,
				wrangler: { configPath: './wrangler.json' },
			},
		},
	},
});
