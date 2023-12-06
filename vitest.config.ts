import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'lcov', 'clover'],
      exclude: [...(configDefaults.coverage.exclude ?? []), '**/*.js'],
    },
    globals: true,
    environment: 'node',
  },
});
