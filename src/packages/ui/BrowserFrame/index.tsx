import { forwardRef, isValidElement } from 'react';
import Link from '../Link';
import { tv } from 'tailwind-variants';

const frameStyle = tv({
  slots: {
    base: 'browser-frame rounded-medium border border-zinc-200',
    header: 'frame-header relative flex flex-center h-[32px] border-b border-zinc-200 px-[12px]',
    title: 'frame-title inline-flex text-[14px] h-full text-zinc-700 items-center max-w-[30%] ellipsis',
    url: 'h-[76%] block max-w-[36%] text-zinc-700 ellipsis px-[8px] rounded-small bg-zinc-100 text-[14px]',
    content: 'frame-content relative h-[320px] overflow-auto',
  },
});
interface BrowserFrameProps {
  frameType?: 'macos' | 'windows';
  asIframe?: boolean;
  url?: string;
  title?: React.ReactNode;
  showUrl?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function MacControls() {
  return (
    <div className="absolute left-[12px] flex flex-center h-full space-x-[6px] [&_li]:list-none [&_li]:size-[13px] [&_li]:rounded-full">
      <li className="bg-[#ff5f57]"></li>
      <li className="bg-[#febc2e]"></li>
      <li className="bg-[#28c840]"></li>
    </div>
  );
}

function WindowsControls() {
  return (
    <div className="absolute right-[12px] flex flex-center h-full space-x-[12px] [&_li]:list-none [&_li]:w-[12px]">
      <li className="h-px bg-zinc-300"></li>
      <li className="h-[12px] border-zinc-300 border"></li>
      <li
        className="relative h-[12px] before:bg-zinc-300 before:rotate-45 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full 
      after:h-full after:bg-zinc-300 after:w-px after:-rotate-45 after:absolute after:left-1/2 after:-translate-x-1/2"></li>
    </div>
  );
}

const BrowserFrame = forwardRef<HTMLDivElement, BrowserFrameProps>((props, ref) => {
  const { frameType = 'macos', asIframe, title, url, showUrl, children, className, style } = props;
  const { base, header, title: titleStyle, url: urlStyle, content } = frameStyle();
  return (
    <div ref={ref} className={base({ class: className })} style={style}>
      <header className={header()}>
        {frameType === 'macos' ? <MacControls /> : <WindowsControls />}
        {showUrl && url ? (
          <Link href={url} isBlank className={urlStyle()}>
            {url}
          </Link>
        ) : isValidElement(title) ? (
          <>title</>
        ) : (
          <span className={titleStyle()}>{title}</span>
        )}
      </header>
      <main className={content()}>
        {asIframe && url ? <iframe className="w-full h-full border-none" src={url} /> : <>{children}</>}
      </main>
    </div>
  );
});

BrowserFrame.displayName = 'BrowserFrame';
export default BrowserFrame;
