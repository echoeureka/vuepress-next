import * as Config from 'webpack-chain'
import type { App } from '@vuepress/core'
import type { WebpackBundlerOptions } from '../types'
import { handleDevtool } from './handleDevtool'
import { handleMode } from './handleMode'
import { handleModule } from './handleModule'
import { handleNode } from './handleNode'
import { handlePluginDefine } from './handlePluginDefine'
import { handleResolve } from './handleResolve'

export const createBaseConfig = ({
  app,
  options,
  isServer,
  isBuild,
}: {
  app: App
  options: WebpackBundlerOptions
  isServer: boolean
  isBuild: boolean
}): Config => {
  // create new webpack-chain config
  const config = new Config()

  /**
   * mode
   */
  handleMode({ app, config })

  /**
   * node
   */
  handleNode({ config })

  /**
   * devtool
   */
  handleDevtool({ app, config })

  /**
   * resolve
   */
  handleResolve({ app, config })

  /**
   * module
   */
  handleModule({ app, options, config, isServer, isBuild })

  /**
   * plugins
   */
  handlePluginDefine({ app, config, isServer })

  return config
}
