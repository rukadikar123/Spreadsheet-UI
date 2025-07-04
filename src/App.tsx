import Header from "./Components/Header";
import Spreadsheet from "./Components/Spreadsheet";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <div className="h-[1024px] flex flex-col overflow-hidden overflow-x-auto">
        <Header />
        <TopBar />

        <div className="flex-1 min-h-0">
          <Spreadsheet />
        </div>
      </div>
    </>
  );
}

export default App;
