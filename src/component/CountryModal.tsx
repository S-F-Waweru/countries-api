// components/CountryModal.tsx
import { Country } from "../models";

interface ModalProps {
  country: Country;
  onClose: () => void;
}

const CountryModal = ({ country, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="mb-4 text-gray-500 hover:text-gray-700"
        >
          ✕ Close
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-48 object-contain"
          />

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">{country.name.common}</h2>
            <p className="text-gray-600">{country.name.official}</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                {/* <p><span className="font-semibold">Subregion:</span> {country.subregion || 'N/A'}</p> */}
              </div>
              <div>
                <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
                <p><span className="font-semibold">TLD:</span> {country.tld?.join(', ') || 'N/A'}</p>
                {/* <p><span className="font-semibold">Currency:</span> {currency}</p> */}
              </div>
            </div>

            <p className="mt-4">
              <span className="font-semibold">Languages:</span> {country.languages ? 
                Object.values(country.languages).join(', ') : 
                'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;