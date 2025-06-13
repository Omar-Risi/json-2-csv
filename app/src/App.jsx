import { useState } from "react";

function App() {

  const [input, setInput] = useState('{}');
  const [output, setOutput] = useState("");

  const validateJSON = (data) => {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateJSON(input)) {
      console.log('client: Invalid JSON!\n', input); // Add invalid input notification
      return;
    }

    try {
      const parsedInput = JSON.parse(input)
      const res = await fetch('http://localhost:3300/api/convert', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: parsedInput }),
      });

      const result = await res.text();
      setOutput(result)
    } catch (e) {
      console.error('error: ', e)
    }
  }

  const handleDownload = () => {
    if (!output) {
      console.log('No data to download');
      return;
    }

    // Create a Blob with the CSV data
    const blob = new Blob([output], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary URL for the blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'converted-data.csv';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <main className="flex justify-center items-center flex-col h-screen">
        <div className="w-[75vw] lg:w-[50vw] lg:grid grid-cols-2 gap-4 min-h-1/2">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="code" className="font-medium">Enter JSON code</label>
            <textarea name="code" value={input} onChange={handleChange} className=" text-slate-900 flex-1 w-full border border-gray-300 rounded-md p-2 overflow-y-scroll resize-none" placeholder="Enter JSON code here"></textarea>
            <button type="submit" className="mt-4 w-full py-2 text-center px-4 bg-slate-900 text-white rounded-md font-medium uppercase hover:bg-slate-800 cursor-pointer"> Convert </button>
          </form>
          <div className="flex flex-col">
            <p className="font-medium">Output: </p>
            <div className="bg-gray-100 border border-gray-300 flex-1 p-2 overflow-y-scroll">
              <p>
                {output}
              </p>
            </div>
            <button className="mt-4 py-2 text-center bg-blue-600 text-white rounded-md font-medium uppercase hover:bg-blue-500 cursor-pointer" onClick={handleDownload}> Download CSV file </button>
          </div>
        </div>

      </main>
    </>
  )
}

export default App;
