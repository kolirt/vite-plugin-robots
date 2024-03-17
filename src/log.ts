import ansi from 'ansi-colors'
import path from 'path'
import { ResolvedConfig } from 'vite'

export function log(rootConfig: ResolvedConfig, robotsPath: string, robotsOutputPath: string) {
  rootConfig.logger.info('')
  rootConfig.logger.info(`✨ ${ansi.cyan('[vite-plugin-robots]')}:`)

  const fullPathFrom = path.parse(robotsPath.replace(__dirname, '').replace(/^\//, ''))
  const fullPathTo = path.parse(robotsOutputPath.replace(__dirname, '').replace(/^\//, ''))

  rootConfig.logger.info(
    ansi.green('✓ Copied: ') +
      (fullPathFrom.dir ? ansi.dim(fullPathFrom.dir) + '/' : '') +
      ansi.blueBright(fullPathFrom.ext === '.local' ? fullPathFrom.name : fullPathFrom.base) +
      (fullPathFrom.ext === '.local' ? ansi.dim('.local') : '') +
      ' -> ' +
      (fullPathTo.dir ? ansi.dim(fullPathTo.dir) + '/' : '') +
      ansi.blueBright(fullPathTo.base)
  )

  rootConfig.logger.info('')
}
