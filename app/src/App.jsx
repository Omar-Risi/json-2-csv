function App() {
  return (
    <>
      <main className="flex justify-center items-center flex-col h-screen">
        <form className="flex flex-col">
          <input type="file" name="file_upload" className="border border-gray-400" />
          <button> Submit </button>
        </form>

      </main>
    </>
  )
}

export default App;
