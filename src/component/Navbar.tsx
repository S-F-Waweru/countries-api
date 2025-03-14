import ThemeButton from "./ThemeButton"


const Navbar = () => {
  return (
   <div className="w-full h-12 flex justify-between px-12 shadow items-center">
    <p className="text-2xl ">Where In the World ?</p>
    
    <ThemeButton />

   </div>
  )
}

export default Navbar