import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      // Solo agregamos el plugin que Next.js NO trae por defecto
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Orden de importaciones
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Limpieza de código y mejores prácticas
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Nota: Las reglas de jsx-a11y ya están activas gracias a nextVitals
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
]);

export default eslintConfig;
