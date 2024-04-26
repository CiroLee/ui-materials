import { forwardRef } from 'react';
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels';
interface ResizeBoxProps {
  autoSavedId?: string;
  children?: React.ReactNode;
}

function ResizeHandler() {
  return (
    <PanelResizeHandle className="relative !flex-1 ml-2">
      <div className="w-[7px] h-[80px] rounded-[4px] absolute absolute-center-y bg-zinc-400/60 transition-color" />
    </PanelResizeHandle>
  );
}

const Resizable = forwardRef<ImperativePanelGroupHandle, ResizeBoxProps>((props, ref) => {
  const { children, autoSavedId } = props;
  return (
    <PanelGroup autoSaveId={autoSavedId} ref={ref} direction="horizontal" className="resize-box relative">
      <Panel defaultSize={100} className="h-full">
        {children}
      </Panel>
      <ResizeHandler />
      <Panel defaultSize={0} />
    </PanelGroup>
  );
});

export default Resizable;
