import { useState } from "react";

function App() {

  const [input, setInput] = useState('');


  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3300/');

      const data = await res.text();
      console.log(data)
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  return (
    <>
      <main className="flex justify-center items-center flex-col h-screen">
        <div className="w-[75vw] lg:w-[50vw] lg:grid grid-cols-2 gap-4 min-h-1/2">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <textarea name="code" value={input} onChange={handleChange} className=" text-slate-900 flex-1 w-full border border-gray-300 rounded-md p-2 overflow-y-scroll resize-none" placeholder="Enter JSON code here"></textarea>
            <button type="submit" className="mt-4 w-full py-2 text-center px-4 bg-slate-900 text-white rounded-md font-medium uppercase hover:bg-slate-800 cursor-pointer"> Convert </button>
          </form>
          <div className="flex flex-col">
            <p className="font-medium">Output: </p>
            <div className="bg-gray-100 border border-gray-300 flex-1 p-2 overflow-y-scroll">
              <p>
                output should be here
              </p>
            </div>
            <div className="w-full flex justify-end">
              <button className="mt-4 w-1/2 py-2 text-center bg-blue-600 text-white rounded-md font-medium uppercase hover:bg-blue-500 cursor-pointer"> Download CSV file </button>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}

export default App;
