import { forwardRef, useState } from 'react';
import { RiArrowDropRightLine } from '@remixicon/react';
import { tv } from 'tailwind-variants';
import type { CommonOption } from '@/packages/types/components';

const treeStyle = tv({
  slots: {
    base: 'tree',
    node: 'tree-node relative h-[32px] overflow-hidden transition-all',
    item: 'tree-item relative h-[32px] flex items-center hover:bg-zinc-100/60 hover:cursor-default transition-all',
    icon: 'transition-transform',
  },
  variants: {
    expended: {
      true: {
        node: 'h-fit',
        icon: 'rotate-90',
      },
    },
    branch: {
      true: {
        node: 'before:w-px before:h-[calc(100%_-_32px)] before:bg-zinc-200 before:absolute before:left-[0.7em] before:top-[32px]',
      },
    },
    disabled: {
      true: {
        item: 'text-zinc-300 hover:cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    expended: false,
    branch: false,
    disabled: false,
  },
});
export interface TreeOption extends Partial<CommonOption> {
  id: string;
  children?: TreeOption[];
}
interface TreeProps {
  defaultExpendedIds?: string[];
  showBranchLine?: boolean;
  options: TreeOption[];
  className?: string;
  style?: React.CSSProperties;
  onSelectedChange?: (detail: TreeOption, isExpended: boolean) => void;
}

const Tree = forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const { options, showBranchLine, defaultExpendedIds = [], className, style, onSelectedChange } = props;
  const { base, item, node: treeNode, icon } = treeStyle();
  const [expendedIds, setExpendedIds] = useState<string[]>(defaultExpendedIds);

  const itemOnClickHandler = (e: React.MouseEvent<HTMLDivElement>, item: TreeOption) => {
    if (item.disabled) return;
    let isExpended = false;
    if (expendedIds.includes(item.id)) {
      setExpendedIds([...expendedIds.filter((id) => item.id !== id)]);
      isExpended = false;
    } else {
      setExpendedIds([...expendedIds, item.id]);
      isExpended = true;
    }
    item.children?.length ? onSelectedChange?.(item, isExpended) : onSelectedChange?.(item, false);
  };

  return (
    <div ref={ref} className={base({ class: className })} style={style}>
      {options.map((opt) => (
        <div
          key={opt.id}
          className={treeNode({
            expended: expendedIds.includes(opt.id),
            branch: showBranchLine,
          })}>
          <div className={item({ disabled: opt.disabled })} onClick={(e) => itemOnClickHandler(e, opt)}>
            {opt.children?.length ? (
              <RiArrowDropRightLine size={24} className={icon({ expended: expendedIds.includes(opt.id) })} />
            ) : null}
            <span className="only:px-2 pr-2">{opt.label}</span>
          </div>
          {opt.children && opt.children.length ? (
            <Tree key={`child-${opt.id}`} className="pl-4" options={opt.children} onSelectedChange={onSelectedChange} />
          ) : null}
        </div>
      ))}
    </div>
  );
});

Tree.displayName = 'Tree';

export default Tree;
