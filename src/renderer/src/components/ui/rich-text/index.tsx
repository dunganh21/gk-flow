import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import ExampleTheme from './editor-theme'
import { OnChangePlugin } from './plugin/on-change-plugin'
import ToolbarPlugin from './plugin/tool-bar-plugin'

const placeholder = 'Enter some rich text...'

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error
  },
  // The editor theme
  theme: ExampleTheme
}

export interface RichTextEditorProps {
  onChange: (editorState: string) => void
}

export function RichTextEditor({ onChange }: RichTextEditorProps) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container border border-gray-300 rounded-lg shadow-sm">
        <ToolbarPlugin />
        <div className="editor-inner p-4">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-input min-h-[200px] focus:outline-none"
                aria-placeholder={placeholder}
                placeholder={<div className="editor-placeholder text-gray-400">{placeholder}</div>}
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  )
}
