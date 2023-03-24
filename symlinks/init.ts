import { moduleConfig } from './config' // this should be relative to the symlinked file

export function getModuleNumber() {
    return moduleConfig.test
}