import Header from "./Components/Header";
import Spreadsheet from "./Components/Spreadsheet";
import TitleRow from "./Components/TitleRow";
import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col overflow-hidden overflow-x-auto">
        <Header />
        <TopBar />

        <div className="flex-1 min-h-0">
          <Spreadsheet />
        </div>
        <TitleRow/>
      </div>
    </>
  );
}

export default App;
