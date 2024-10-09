import fs from 'fs'
import path from 'path'
import { Catalogs } from '@pnpm/catalogs.types'
import { getCacheFilePath } from './cacheFile'
import { createPackagesList } from './createPackagesList'
import { type ProjectsList } from './types'

export interface UpdatePackagesListOptions {
  allProjects: ProjectsList
  catalogs?: Catalogs
  cacheDir: string
  workspaceDir: string
}

export async function updatePackagesList (opts: UpdatePackagesListOptions): Promise<void> {
  const packagesList = await createPackagesList(opts)
  const packagesListJSON = JSON.stringify(packagesList, undefined, 2) + '\n'
  const cacheFile = getCacheFilePath(opts)
  await fs.promises.mkdir(path.dirname(cacheFile), { recursive: true })
  await fs.promises.writeFile(cacheFile, packagesListJSON)
}
