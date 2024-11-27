import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  PUNCTUATION
} from '@lexical/react/LexicalTypeaheadMenuPlugin'
import { $createTextNode, $getSelection, TextNode } from 'lexical'
import { useCallback, useMemo, useState } from 'react'
import * as ReactDOM from 'react-dom'

class TextPickerOption extends MenuOption {
  title: string
  content: string
  keywords: Array<string>

  constructor(
    title: string,
    options: {
      content: string
      keywords?: Array<string>
    }
  ) {
    super(title)
    this.title = title
    this.content = options.content
    this.keywords = options.keywords || []
  }
}

export interface TextPickerOptionProps {
  title: string
  content: string
  keywords: string[]
}

function TextPickerMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}: {
  index: number
  isSelected: boolean
  onClick: () => void
  onMouseEnter: () => void
  option: TextPickerOption
}) {
  return (
    <li
      key={option.key}
      tabIndex={-1}
      className={`
        flex items-center gap-2 px-2 py-1.5 text-sm rounded-md cursor-pointer
        ${
          isSelected
            ? 'bg-accent text-accent-foreground'
            : 'text-foreground hover:bg-accent hover:text-accent-foreground'
        }
      `}
      ref={option.setRefElement}
      role="option"
      aria-selected={isSelected}
      id={'typeahead-item-' + index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <span className="text-[1.1rem]">📝</span>
      <span className="font-medium">{option.title}</span>
    </li>
  )
}

const convertObjectToTextPickerOption = (options: TextPickerOptionProps[]) => {
  return options.map(
    (option) =>
      new TextPickerOption(option.title, {
        content: option.content,
        keywords: option.keywords
      })
  )
}

export interface CustomTextPickerPluginProps {
  textOptions: TextPickerOptionProps[]
  wordTrigger: string
}

function createTriggerRegex(trigger: string) {
  // Escape special characters in the trigger
  const escapedTrigger = trigger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const validChars = '[^' + PUNCTUATION + '\\s]'
  return new RegExp('(^|\\s|\\()(' + escapedTrigger + '((?:' + validChars + '){0,75})' + ')$')
}

const createCustomTriggerMatch = (trigger: string) => {
  return (text: string) => {
    const triggerRegex = createTriggerRegex(trigger)
    const match = triggerRegex.exec(text)

    if (match !== null) {
      const maybeLeadingWhitespace = match[1]
      const matchingString = match[3]

      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2]
      }
    }
    return null
  }
}

export default function CustomTextPickerPlugin({
  textOptions,
  wordTrigger
}: CustomTextPickerPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext()
  const [queryString, setQueryString] = useState<string | null>(null)

  // Use custom trigger function instead of useBasicTypeaheadTriggerMatch
  const checkForTriggerMatch = useCallback(createCustomTriggerMatch(wordTrigger), [wordTrigger])

  const options = useMemo(() => {
    if (!queryString) {
      return convertObjectToTextPickerOption(textOptions)
    }

    const regex = new RegExp(queryString, 'i')
    const listOptionsAfterFilter = textOptions.filter(
      (option) => regex.test(option.title) || option.keywords.some((keyword) => regex.test(keyword))
    )
    return convertObjectToTextPickerOption(listOptionsAfterFilter)
  }, [queryString, textOptions])

  const onSelectOption = useCallback(
    (selectedOption: TextPickerOption, nodeToRemove: TextNode | null, closeMenu: () => void) => {
      editor.update(() => {
        if (nodeToRemove) {
          nodeToRemove.remove()
        }
        const selection = $getSelection()
        if (selection) {
          // Create and insert the visible title text
          const textNode = $createTextNode(selectedOption.title)
          textNode.setFormat('code')

          // Store content in style attribute with a custom property
          textNode.setStyle(`--contact-field-id: ${selectedOption.content}; white-space: pre-wrap`)
          selection.insertNodes([textNode])

          // Insert a normal text node after to reset formatting
          const resetNode = $createTextNode('')
          selection.insertNodes([resetNode])
        }
        closeMenu()
      })
    },
    [editor]
  )

  return (
    <LexicalTypeaheadMenuPlugin<TextPickerOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForTriggerMatch}
      options={options}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) =>
        anchorElementRef.current && options.length
          ? ReactDOM.createPortal(
              <div className="z-50 min-w-[220px] overflow-hidden rounded-md border bg-popover shadow-md">
                <ul className="p-1">
                  {options.map((option, i: number) => (
                    <TextPickerMenuItem
                      index={i}
                      isSelected={selectedIndex === i}
                      onClick={() => {
                        setHighlightedIndex(i)
                        selectOptionAndCleanUp(option)
                      }}
                      onMouseEnter={() => {
                        setHighlightedIndex(i)
                      }}
                      key={option.key}
                      option={option}
                    />
                  ))}
                </ul>
              </div>,
              anchorElementRef.current
            )
          : null
      }
    />
  )
}
