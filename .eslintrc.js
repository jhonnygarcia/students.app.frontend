module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json", "e2e/tsconfig.json"],
        createDefaultProgram: true,
      },
      extends: [
        "plugin:@angular-eslint/ng-cli-compat",
        "plugin:@angular-eslint/ng-cli-compat--formatting-add-on",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            style: "camelCase",
          },
        ],
        "@typescript-eslint/no-empty-function": [
          "off",
          { allow: ["functions"] },
        ],
        eqeqeq: "off",
        "@typescript-eslint/member-ordering": "off",
        "@typescript-eslint/naming-convention": "off",
      },
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": [2, { code: 120, tabWidth: 4, ignoreUrls: true }],
      },
    },
  ],
};
