import { useState, useEffect, useRef } from 'react';
import { data } from '../mockups';
import { Item, UseSelectProps } from '../types';

function useSelect(searchText: string): UseSelectProps {
    const [items, setItems] = useState<Array<Item>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const cache = useRef({});

    useEffect(() => {
        if (!searchText) {
            setItems([]);
            setIsLoading(false);
            return;
        }
        if (cache.current[searchText]) {
            setItems(cache.current[searchText]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);

        const promise = new Promise((resolve: (value: Array<Item>) => void) => {
            setTimeout(() => {
                const lowerCaseSearchText = searchText.toLowerCase();
                resolve(data.filter(item => item.name.toLowerCase().includes(lowerCaseSearchText)));
            }, Math.random() * 5000);
        });

        promise
            .then(data => {
                setItems(data);
                setIsLoading(false);
                cache.current[searchText] = data;
            })
            .catch(error => {
                alert(error.message);
                setIsLoading(false);
            });
    }, [searchText]);

    return {
        items,
        isLoading,
    };
}

export default useSelect;
