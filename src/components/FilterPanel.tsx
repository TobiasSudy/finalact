type Props = {
    filters: string[];
    selectedFilters: string[];
    onToggleFilter: (filter: string) => void;
};

function FilterPanel({ filters, selectedFilters, onToggleFilter }: Props) {
    return (
        <div className="filter-panel">
            {filters.map((filter) => (
                <label key={filter} className={selectedFilters.includes(filter) ? 'active' : ''}>
                    <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter)}
                        onChange={() => onToggleFilter(filter)}
                    />
                    {filter}
                </label>
            ))}
        </div>
    );
}

export default FilterPanel;
