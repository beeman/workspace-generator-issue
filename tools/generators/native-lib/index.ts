import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from '@nrwl/tao/src/commands/ngcli-adapter';

export default async function (host: Tree, schema: any) {
  const generator = wrapAngularDevkitSchematic('@nrwl/react-native', 'library');

  await generator(host, {
    name: schema.name,
    directory: 'native',
    tags: 'scope:native',
  });

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
