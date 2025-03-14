// components/Selection.tsx
interface SelectionProps {
  value: string;
  onChange: (region: string) => void;
}

const Selection = ({ value, onChange }: SelectionProps) => {
  const regions = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic'
  ];

  return (
    <div className="relative w-48 text-gray-500">
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-3 pr-8 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        >
            {regions.map(region => (
              <option key={region} value={region === 'All' ? '' : region}>
                {region}
              </option>
            ))}
        </select>
        <i className="bx bx-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
    </div>
  )
}

export default Selection;