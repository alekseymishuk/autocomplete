import React from 'react';
import '../styles/Dropdown.styles.css';
import DropdownItem from './DropdownItem';
import { DropdownProps } from '../types';

const Dropdown: React.FC<DropdownProps> = props => {
    return (
        <div className="css-dropdown">
            {props.items.length > 0
                ? props.items.map(item => (
                      <DropdownItem
                          key={item.id}
                          item={item}
                          markText={props.markText}
                          onClick={props.onClick}
                      />
                  ))
                : 'No Data...'}
        </div>
    );
};

export default Dropdown;
