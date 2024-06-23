"use client"
import React, { PropsWithChildren } from "react";

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    shouldSearch: boolean;
    setShouldSearch: (shouldSearch: boolean) => void;
}

export const SearchContext = React.createContext<SearchContextType>({
    searchQuery: "",
    setSearchQuery: () => {},
    shouldSearch: false,
    setShouldSearch: () => {},
});

export const SearchContextProvider = ({ children } : PropsWithChildren) => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [shouldSearch, setShouldSearch] = React.useState(false);


    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, shouldSearch, setShouldSearch }}>
            {children}
        </SearchContext.Provider>
    );
}
