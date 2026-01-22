module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // Esta regex es la clave:
      // 1. Obliga a que empiece con [PROYECTO-NUMERO]
      // 2. Siga con un espacio
      // 3. Siga con el tipo (feat, fix, etc) y el mensaje
      headerPattern: /^\[([A-Z]+-\d+)\]\s(\w+)(?:\(([\w\.-]+)\))?:\s(.+)$/,
      headerCorrespondence: ['references', 'type', 'scope', 'subject'],
    },
  },
  rules: {
    // Desactivamos la validación de referencias interna de commitlint
    // porque nuestra regex ya hace el trabajo duro.
    'references-empty': [0],
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
    // Mantenemos las reglas estándar para el resto del mensaje
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
  },
};
