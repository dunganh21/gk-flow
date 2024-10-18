import childProcess from 'node:child_process'

export const openMailEditor = (): void => {
  if (process.platform === 'darwin') {
    // macOS

    const mailtoUrl = `mailto:?subject=Pre-written%20Subject&body=Pre-written%20body%20text`
    childProcess.exec(`open "${mailtoUrl}"`)
  } else if (process.platform === 'win32') {
    // Windows
    childProcess.exec('start outlook:')
  } else {
    console.log('openMailEditor: Unsupported operating system')
  }
}
