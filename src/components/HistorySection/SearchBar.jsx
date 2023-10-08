const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;