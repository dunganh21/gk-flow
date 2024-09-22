function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('open-mail-editor')

  return (
    <div>
      <h1>Welcome to the Mail Editor App</h1>
      <button onClick={ipcHandle}>Open Mail Editor</button>
      <p>Click the button above to open the mail editor.</p>
    </div>
  )
}

export default App
