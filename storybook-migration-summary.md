# Storybook 7 Migration Summary

## Upgrade Storybook packages

The following command was ran to upgrade the Storybook packages:

```bash
npx storybook@latest upgrade
```

## Your `.storybook/main.js|ts` files were prepared for Storybook's automigration scripts

Some adjustments were made to your `.storybook/main.js|ts` files so that
the Storybook automigration scripts could run successfully. The changes that were made are as follows:

- Remove the `as StorybookConfig` typecast from the main.ts files, if any,
  since it is not needed any more.
- Remove the `path.resolve` calls from the Next.js Storybook configuration, if any, since it breaks the Storybook automigration scripts.

## The Storybook automigration scripts were ran

The following commands ran successfully and your Storybook configuration was successfully migrated to the latest version 7:

- `npx storybook@latest automigrate --config-dir apps/demo/.storybook --renderer @storybook/react`

Please make sure to check the results yourself and make sure that everything is working as expected.

Also, we may have missed something. Please make sure to check the logs of the Storybook CLI commands that were run, and look for
the `❌ Failed trying to evaluate` message or `❌ The migration failed to update` message. This will indicate if a command was
unsuccessful, and will help you run the migration again, manually.

## Final adjustments

After the Storybook automigration scripts have run, some additional adjustments were made to your
workspace, to make sure that everything is working as expected. These adjustments are as follows:

- The `vite-tsconfig-paths` plugin was removed from the Storybook configuration files since it's no longer needed.
- The `viteConfigPath` option was added to the Storybook builder, where needed.
- The import package for the `StorybookConfig` type was changed to be framework specific.
- The `uiFramework` option was removed from your project's Storybook targets.
- The `lit` package was added to your workspace, if you are using the
  Web Components `@storybook/web-components` package. Please note that the `lit-html` package is
  no longer needed by Storybook v7. So, if you are not using it anywhere else, you can safely remove it.

## Next steps

You can make sure everything is working as expected by trying
to build or serve your Storybook as you normally would.

```bash
npx nx build-storybook project-name
```

```bash
npx nx storybook project-name
```

Please read the [Storybook 7.0.0 release article](https://storybook.js.org/blog/storybook-7-0/) and the
official [Storybook 7.0.0 migration guide](https://storybook.js.org/docs/react/migration-guide)
for more information.

You can also read the docs for the [@nx/storybook:migrate-7 generator](https://nx.dev/packages/storybook/generators/migrate-7) and our [Storybook 7 setup guide](https://nx.dev/packages/storybook/documents/storybook-7-setup).
