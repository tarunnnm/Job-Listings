import React from 'react';
import './FilterDropdown.css';

function FilterDropdown({ filter, setFilter }) {
  return (
    <div className="filter-dropdown">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
