type Props = {
    searchQuery: string;
    onSearch: (value: string) => void;
};

function SearchBar({ searchQuery, onSearch }: Props) {
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

export default SearchBar;
