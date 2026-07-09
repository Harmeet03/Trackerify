'use client'

import { useState, useEffect } from 'react';

const useLocalStorage = <T>(key: string, value: T) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if(typeof window === 'undefined') return value;

        try{
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : value
        }
        catch{
            return value
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const
}

export default useLocalStorage;