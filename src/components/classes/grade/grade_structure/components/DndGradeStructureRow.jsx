'use client';

import {MenuOutlined} from '@ant-design/icons'
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
  } from '@dnd-kit/sortable';
  import { CSS } from '@dnd-kit/utilities';
import React from 'react';

function DndGradeStructureRow({children, ...props})
{
    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: props['data-row-key'],
    });

    const style = {
          ...props.style,
          transform: CSS.Transform.toString(
            transform && {
              ...transform,
              scaleY: 1,
            },
          ),
          transition,
          ...(isDragging
            ? {
                position: 'relative',
                zIndex: 9999,
              }
            : {}),
    };

    return (
        <tr {...props} ref={setNodeRef} style={style} {...attributes}>
          {React.Children.map(children, (child) => {
            if (child.key === 'sort') {
              return React.cloneElement(child, {
                children: (
                  <MenuOutlined
                    ref={setActivatorNodeRef}
                    style={{
                      touchAction: 'none',
                      cursor: 'move',
                    }}
                    {...listeners}
                  />
                ),
              });
            }
            return child;
          })}
        </tr>
      );
}

export default DndGradeStructureRow