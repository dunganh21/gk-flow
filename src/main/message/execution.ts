import { ipcMain } from 'electron'
import { openMailEditor } from '../application/flow/open-mail-editor'

export const initIcpExecution = (): void => {
  ipcMain.on('open-mail-editor', () => {
    openMailEditor()
  })
}
