import Item from './Item';

export default interface DropdownItemProps {
    item: Item;
    markText: string;
    onClick: (item: Item) => void;
}
