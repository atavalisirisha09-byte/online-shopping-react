// dumb component

const SearchBar = ({
  searchText,
  setSearchText,
}) => {
  return (
    <input
      type="text"
      placeholder="Search Products..."
      value={searchText}
      onChange={(e) =>
        setSearchText(e.target.value)
      }
      style={{
        padding: "10px",
        width: "300px",
        marginBottom: "20px",
      }}
    />
  );
};

export default SearchBar;