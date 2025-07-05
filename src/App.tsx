import Header from "./Components/Header";
import Spreadsheet from "./Components/Spreadsheet";
import TitleRow from "./Components/TitleRow";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      {/* Main container */}
      <div className="h-screen w-full flex flex-col overflow-hidden overflow-x-auto">
        {/* Header section*/}
        <Header />
        {/* Top toolbar  */}
        <TopBar />
        {/* Main content area - spreadsheet table */}
        <div className="flex-1 min-h-0">
          <Spreadsheet />
        </div>
        {/* Title row at the bottom  */}
        <TitleRow />
      </div>
    </>
  );
}

export default App;
