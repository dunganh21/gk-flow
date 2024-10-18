import { ipcMain } from 'electron'
import { openMailEditor } from '../application/use-case/open-mail-editor'

export const initIcpExecution = (): void => {
  ipcMain.on('open-mail-editor', () => {
    openMailEditor()
  })
}
