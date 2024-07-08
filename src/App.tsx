import Tabs from "./components/Tabs";
import { dataTabsExample } from "./data/Examples";

const App = () => {
  return (
    <div className=" w-[calc(100vw-2.5rem)] h-[calc(100vh-2.5rem)] m-5">
      <Tabs dataTabs={dataTabsExample} />
    </div>
  );
}

export default App;
