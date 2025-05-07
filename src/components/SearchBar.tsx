import * as React from "react";

type SearchProps = {
    searchQuery: string;
    onSearch: (value: string) => void;
};

function SearchBar({ searchQuery, onSearch }: SearchProps) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search by title or ingredient..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

// Container component to wrap both
export function SearchFilterContainer({ children }: { children: React.ReactNode }) {
    return <div className="search-container">{children}</div>;
}


export default SearchBar;
