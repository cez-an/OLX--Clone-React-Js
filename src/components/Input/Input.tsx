type InputProps = {
    
}
const Input = ({setInput ,placeholder}) => {
  return (
    <div  className = "pt-2 w-full relative">
        <label htmlFor="title" >{placeholder}</label>
        <input  onChange={(event)=> setInput(event.target.value)} type="text"  id="title"   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-600 dark:bg-gray-700 dark:text-white"
      required />
        
      
    </div>
  )
}

export default Input;