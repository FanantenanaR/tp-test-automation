import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.ts'],
    // TP1 et TP3 ont des suites volontairement vides au démarrage —
    // sans ça, Vitest sortirait avec un code d'erreur en l'absence de tests.
    passWithNoTests: true,
  },
});
