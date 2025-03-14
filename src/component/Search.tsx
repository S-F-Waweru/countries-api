// components/Search.tsx
interface SearchProps {
  onChange: (searchTerm: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  return (
    <div className="relative w-64 text-start">
      <i className="bx bx-search-alt-2 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default Search;