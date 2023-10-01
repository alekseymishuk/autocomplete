import Item from './Item';

export default interface DropdownProps {
    items: Array<Item>;
    markText: string;
    onClick: (item: Item) => void;
}
