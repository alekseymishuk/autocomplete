import React, { useCallback, useMemo } from 'react';
import '../styles/DropdownItem.styles.css';
import { DropdownItemProps } from '../types';

const DropdownItem: React.FC<DropdownItemProps> = props => {
    const { item, markText, onClick } = props;

    const itemText = useMemo(() => {
        if (!markText) return item.name;
        const markTextIndex = item.name.toLocaleLowerCase().indexOf(markText.toLocaleLowerCase());
        return [
            item.name.substring(0, markTextIndex),
            <mark key={item.id}>
                {item.name.substring(markTextIndex, markTextIndex + markText.length)}
            </mark>,
            item.name.substring(markTextIndex + markText.length),
        ];
    }, [item, markText]);

    const onClickHandler = useCallback(() => {
        onClick(item);
    }, [item, onClick]);

    return (
        <div className="css-dropdown-item" key={item.id} onClick={onClickHandler}>
            {itemText}
        </div>
    );
};

export default DropdownItem;
