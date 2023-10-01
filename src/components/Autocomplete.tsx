import React, { useCallback, useState } from 'react';
import '../styles/Autocomplete.styles.css';
import useSelect from '../hooks/useSelect';
import Dropdown from './Dropdown';
import { Item, AutocompleteProps } from '../types';

const Autocomplete: React.FC<AutocompleteProps> = props => {
    const [filter, setFilter] = useState(props.filter || '');
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const { items, isLoading } = useSelect(filter);

    const handleSetFilter: React.ChangeEventHandler<HTMLInputElement> = event => {
        setFilter(event.target.value);
        setSelectedItem(null);
    };

    const handleSelect = useCallback((item: Item) => {
        setFilter(item.name);
        setSelectedItem(item);
    }, []);

    const handleClear = useCallback(() => {
        setFilter('');
        setSelectedItem(null);
    }, []);

    return (
        <div className="css-container">
            <div className="css-input-container">
                <input
                    placeholder="Search..."
                    className="css-input"
                    type="text"
                    value={filter}
                    onChange={handleSetFilter}
                />
                {selectedItem !== null && (
                    <span className="css-clear" onClick={handleClear}>
                        Clear
                    </span>
                )}
                {isLoading && !selectedItem && <span className="css-loading">Loading...</span>}
            </div>
            {!isLoading && !selectedItem && filter.length > 0 && (
                <Dropdown items={items} markText={filter} onClick={handleSelect} />
            )}
        </div>
    );
};

Autocomplete.defaultProps = {
    filter: '',
};

export default Autocomplete;
