module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 1. El ID de Jira es OBLIGATORIO (dentro del paréntesis)
    'scope-empty': [2, 'never'],
    //

    // 2. El tipo debe ser válido (feat, fix, etc.)
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],

    // 3. Reglas de estructura (vienen por defecto, pero las dejamos explícitas)
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'], // No terminar el mensaje con punto
    'header-max-length': [2, 'always', 72], // El estándar de oro para Git
  },
};
