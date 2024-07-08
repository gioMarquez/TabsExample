import { useState } from "react";

interface TabsProps {
  dataTabs: Tab[];
}

interface Tab {
  id: number;
  title: string;
  contenido: string;
  autor: string;
}

const Tabs = ({ dataTabs }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-300">
        {dataTabs.map((tab: Tab) => (
          <button
            key={tab.id}
            className={`py-2 px-4 focus:outline-none hover:bg-blue-500/20 hover:text-black hover:rounded-md ${
              selectedTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">
          {dataTabs[selectedTab].title}
        </h2>
        <p>{dataTabs[selectedTab].contenido}</p>
        <p>Autor: {dataTabs[selectedTab].autor}</p>
      </div>
    </div>
  );
};

export default Tabs;
