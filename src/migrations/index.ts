import * as migration_20261026_170128 from './20261026_170128';
import * as migration_20261027_000000 from './20261027_000000';

export const migrations = [
  {
    up: migration_20261026_170128.up,
    down: migration_20261026_170128.down,
    name: '20261026_170128'
  },
  {
    up: migration_20261027_000000.up,
    down: migration_20261027_000000.down,
    name: '20261027_000000'
  },
];
