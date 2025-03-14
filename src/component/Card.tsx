import { Country } from "../models"; // Adjust the import path as needed

interface CardProps {
  country: Country;
  onClick: () => void;
}

const Card = ({ country , onClick }: CardProps) => {
  // Extract currency information
  const currency = country.currencies 
    ? Object.values(country.currencies)[0].name 
    : 'N/A';

  return (
    <div 
    className="w-100 h-100 rounded shadow-md m-2 cursor-pointer hover:shadow-lg transition-shadow"
    onClick={onClick}
  >
      <img 
        className="rounded object-fit w-full  h-48" 
        src={country.flags.svg} 
        alt={`Flag of ${country.name.common}`} 
      />

      <div className="flex flex-col items-start gap-2 mt-2 p-2">
        <p className="font-bold pl-1.5 text-slate-800 text-lg">
          {country.name.common}
        </p>

        {country.capital && (

            <p className=" text-slate-700  py-1.5 text-lg font-medium w-fit flex justify-center items-center">
            <i className='bx bxs-city text-4xl  pr-2'  ></i>  {country.capital[0]}
            </p>
            // <p className="font-medium pl-1.5 text-slate-700 text-sm mt-2">
            //   Capital: {country.capital[0]}
            // </p>
            )}
        <p className="font-semibold pl-1.5 text-slate-700 text-base">
          Population: {country.population.toLocaleString()}
        </p>


        
        <div className="flex justify-start items-center gap-2 mt-2">
          <p className="bg-slate-200 text-slate-700  rounded-full px-4 py-1.5 text-sm font-semibold w-fit flex justify-between items-center">
          <i className='bx bx-world text-4xl  pr-2' ></i>{country.region}
          </p>
          <p className="bg-slate-200 text-slate-700  rounded-full px-4 py-1.5 text-sm font-semibold w-fit flex justify-between items-center">
          <i className='bx bx-money text-4xl  pr-2'  ></i>  {currency}
          </p>
        </div>

       
      </div>
    </div>
  )
}

export default Card;