import { Toggle } from '@/components/ui/toggle';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { Bold } from 'lucide-react';
import { useState } from 'react';

import { FORMAT_TEXT_COMMAND } from 'lexical';

function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState<boolean>(false);
  return (
    <div>
      <Toggle
        aria-label="Toggle Bold"
        pressed={isBold}
        onPressedChange={(pressed: boolean) => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
          setIsBold(pressed);
        }}
      >
        <Bold />
      </Toggle>
    </div>
  );
}

export { ToolbarPlugin };
