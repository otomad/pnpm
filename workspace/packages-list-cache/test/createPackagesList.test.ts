import path from 'path'
import { prepareEmpty, preparePackages } from '@pnpm/prepare'
import { type ProjectRootDir } from '@pnpm/types'
import { createPackagesList } from '../src/createPackagesList'

const lastValidatedTimestamp = Date.now()

test('createPackagesList() on empty list', () => {
  prepareEmpty()

  expect(
    createPackagesList({
      allProjects: [],
      catalogs: undefined,
      filtered: false,
      lastValidatedTimestamp,
    })
  ).toStrictEqual({
    catalogs: undefined,
    lastValidatedTimestamp,
    projectRootDirs: [],
  })
})

test('createPackagesList() on non-empty list', () => {
  preparePackages(['a', 'b', 'c', 'd'].map(name => ({
    location: `./packages/${name}`,
    package: { name },
  })))

  expect(
    createPackagesList({
      allProjects: [
        { rootDir: path.resolve('packages/c') as ProjectRootDir },
        { rootDir: path.resolve('packages/b') as ProjectRootDir },
        { rootDir: path.resolve('packages/a') as ProjectRootDir },
        { rootDir: path.resolve('packages/d') as ProjectRootDir },
      ],
      filtered: false,
      lastValidatedTimestamp,
      catalogs: {
        default: {
          foo: '0.1.2',
        },
      },
    })
  ).toStrictEqual({
    catalogs: {
      default: {
        foo: '0.1.2',
      },
    },
    lastValidatedTimestamp,
    projectRootDirs: [
      path.resolve('packages/a'),
      path.resolve('packages/b'),
      path.resolve('packages/c'),
      path.resolve('packages/d'),
    ],
  })
})
