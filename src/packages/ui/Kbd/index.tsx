import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

// the keys map to the corresponding icons
export type KbdKey =
  | 'command'
  | 'shift'
  | 'ctrl'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'pageup'
  | 'pagedown'
  | 'home'
  | 'end'
  | 'help'
  | 'space';

const kbdKeyMap: Record<KbdKey, string> = {
  command: '⌘',
  shift: '⇧',
  ctrl: '⌃',
  option: '⌥',
  enter: '⏎',
  delete: '⌦',
  escape: '⎋',
  tab: '⇥',
  capslock: '⇪',
  up: '↑',
  right: '→',
  down: '↓',
  left: '←',
  pageup: '⇞',
  pagedown: '⇟',
  home: '⇱',
  end: '⇲',
  help: '?',
  space: '␣',
};
export interface KbdProps {
  keys: KbdKey[];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const kbd = tv({
  base: `inline-flex flex-center relative px-[6px] border border-gray-200 shadow-[0_1px_1px_rgba(0,0,0,0.2)] shadow-inset-[0_1px_1px_rgba(255,255,255,0.7)]
   bg-gray-200/50 h-[24px] text-[14px] rounded-[4px] [&>span:not(:first-child)]:ml-1`,
});
const Kbd = forwardRef<HTMLDivElement, KbdProps>(function (props, ref) {
  const { keys, children, className, style } = props;
  return (
    <div ref={ref} className={kbd({ class: className })} style={style}>
      {keys.map((k, index) => (
        <span key={index}>{kbdKeyMap[k] || ''}</span>
      ))}
      {children ? <span>{children}</span> : null}
    </div>
  );
});

Kbd.displayName = 'Kbd';

export default Kbd;
