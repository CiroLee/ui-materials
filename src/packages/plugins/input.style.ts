export const globalInputStyle = {
  base: 'flex relative rounded-medium border border-black/10 has-[:focus]:border-brand-500 has-[:focus]:shadow-[0_0_0_2px_#e7dafd] hover:border-brand-500/60 transition-all ease-linear',
  input: 'full outline-none placeholder:text-black/30 bg-transparent',
  tinyBase: 'h-global-ty text-[14px]',
  smallBase: 'h-global-sm text-[14px]',
  smallInput: 'placeholder:text-[14px] text-[14px]',
  mediumBase: 'h-global-md',
  mediumInput: 'placeholder:text-[16px] text-[16px]',
  largeBase: 'h-global-lg',
  largeInput: 'placeholder:text-[18px] text-[18px]',
  disabledBase: 'bg-black/[0.02] text-black/30 border-black/10 hover:border-black/10 cursor-not-allowed',
  disabledInput: 'cursor-not-allowed',
  errorBase:
    'border-danger-500 hover:border-danger-500/60 has-[:focus]:border-danger-500 has-[:focus]:shadow-[0_0_0_2px_#ffdbd8]',
  warnBase:
    'border-warn-500 hover:border-warn-500/60 has-[:focus]:border-warn-500 has-[:focus]:shadow-[0_0_0_2px_#fff2cc]',
  prefix: 'flex flex-center pl-[8px]',
  suffix: 'flex flex-center pr-[8px]',
  clear: `rounded-[12px] flex flex-center duration-200 transition-all scale-0 bg-zinc-300 after:absolute after:rotate-45 after:w-[1px] after:rounded-[1px] select-none 
    after:bg-white before:absolute before:-rotate-45 before:w-[1px] before:rounded-[1px] before:bg-white hover:bg-zinc-400`,
  tinyClear: 'size-[12px] before:h-[6px] after:h-[6px]',
  smallClear: 'size-[14px] before:h-[6px] after:h-[6px]',
  mediumClear: 'size-[16px] before:h-[8px] after:h-[8px]',
  largeClear: 'size-[18px] before:h-[10px] after:h-[10px]',
};
