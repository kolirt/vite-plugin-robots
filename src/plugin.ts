import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'
import { type Plugin, type ResolvedConfig } from 'vite'
import { log } from './log'
import { Options } from './types'

const DEFAULT_OPTIONS: Required<Options> = {
  robotsDir: '',
  outputRobotsFileName: 'robots.txt',
  enableDebug: true
}

export function robots(userOptions: Options = {}): Plugin {
  const options: Required<Options> = { ...DEFAULT_OPTIONS, ...userOptions }

  let rootConfig: ResolvedConfig

  return {
    name: 'vite-plugin-robots',
    enforce: 'post',
    apply: 'build',
    configResolved(c: ResolvedConfig) {
      rootConfig = c
    },
    async closeBundle() {
      const localRobotsFileName = `.robots.${rootConfig.mode}.txt.local`
      const robotsDir = path.resolve(rootConfig.root, options.robotsDir)
      const robotsFileName = fs.existsSync(path.resolve(robotsDir, localRobotsFileName))
        ? localRobotsFileName
        : `.robots.${rootConfig.mode}.txt`
      const robotsPath = path.resolve(robotsDir, robotsFileName)

      const robotsOutputDir = rootConfig.build.outDir
      const robotsOutputPath = path.resolve(robotsOutputDir, options.outputRobotsFileName)

      await fsp.copyFile(robotsPath, robotsOutputPath).then(() => {
        if (options.enableDebug) {
          log(rootConfig, robotsPath, robotsOutputPath)
        }
      })
    }
  }
}
