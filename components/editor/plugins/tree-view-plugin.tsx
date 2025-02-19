import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TreeView } from '@lexical/react/LexicalTreeView';

export default function TreeViewPlugin() {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="block bg-stone-900 text-white text-sm mx-auto relative overflow-auto rounded-lg p-2 font-mono">
      <TreeView editor={editor} />
    </div>
  );
}
