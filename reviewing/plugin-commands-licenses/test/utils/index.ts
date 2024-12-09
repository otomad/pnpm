const REGISTRY = 'https://registry.npmjs.org'

export const DEFAULT_OPTS = {
  argv: {
    original: [],
  },
  bail: true,
  bin: 'node_modules/.bin',
  ca: undefined,
  cacheDir: '../cache',
  cert: undefined,
  excludeLinksFromLockfile: false,
  extraEnv: {},
  cliOptions: {},
  fetchRetries: 2,
  fetchRetryFactor: 90,
  fetchRetryMaxtimeout: 90,
  fetchRetryMintimeout: 10,
  filter: [] as string[],
  httpsProxy: undefined,
  include: {
    dependencies: true,
    devDependencies: true,
    optionalDependencies: true,
  },
  key: undefined,
  linkWorkspacePackages: true,
  localAddress: undefined,
  lock: false,
  lockStaleDuration: 90,
  networkConcurrency: 16,
  offline: false,
  pending: false,
  pnpmfile: './.pnpmfile.cjs',
  pnpmHomeDir: '',
  preferWorkspacePackages: true,
  proxy: undefined,
  rawConfig: { registry: REGISTRY },
  rawLocalConfig: {},
  registries: { default: REGISTRY },
  rootProjectManifestDir: '',
  // registry: REGISTRY,
  sort: true,
  storeDir: '../store',
  strictSsl: false,
  userAgent: 'pnpm',
  userConfig: {},
  useRunningStoreServer: false,
  useStoreServer: false,
  virtualStoreDir: 'node_modules/.pnpm',
  workspaceConcurrency: 4,
  virtualStoreDirMaxLength: process.platform === 'win32' ? 60 : 120,
}
