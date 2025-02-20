'use client';

import InitialEditorState from '@/lib/initial-editor-state.json';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TRANSFORMERS } from '@lexical/markdown';
import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';

import { ToolbarPlugin } from '@/components/editor/plugins/toolbar-plugin';
import TreeViewPlugin from '@/components/editor/plugins/tree-view-plugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';

export default function Editor() {
  const config: InitialConfigType = {
    namespace: 'lexical-editor',
    theme: {
      text: {
        bold: 'textBold',
        capitalize: 'textCapitalize',
        code: 'textCode',
        highlight: 'textHighlight',
        italic: 'textItalic',
        lowercase: 'textLowercase',
        strikethrough: 'textStrikethrough',
        subscript: 'textSubscript',
        superscript: 'textSuperscript',
        underline: 'textUnderline',
        underlineStrikethrough: 'textUnderlineStrikethrough',
        uppercase: 'textUppercase',
      },
      heading: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
      },
      paragraph: 'paragraph',
    },
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      AutoLinkNode,
      LinkNode,
    ],
    editorState: JSON.stringify(InitialEditorState),
    onError: (error) => {
      console.error(error);
    },
  };

  return (
    <LexicalComposer initialConfig={config}>
      <div className="mx-auto relative flex flex-col mt-10 border shadow rounded-lg my-2">
        <ToolbarPlugin />
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="focus:outline-none w-full px-4 py-2 overflow-auto relative" />
            }
            placeholder={
              <p className="text-muted-foreground absolute top-0 px-8 py-4 w-full pointer-events-none">
                Enter some text...
              </p>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
        </div>
        <AutoFocusPlugin />
        <ListPlugin />
        <LinkPlugin />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
      <TreeViewPlugin />
    </LexicalComposer>
  );
}
