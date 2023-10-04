import { useState } from "react";
import Form, { FormDataModel } from "./components/Form";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState<FormDataModel[]>([
    {
      courseGrade: "A",
      courseName: "Introduction to Computer Science",
      courseNum: "CS 101",
      courseUnits: 3,
    },
    {
      courseGrade: "B",
      courseName: "Game Development",
      courseNum: "CS 102",
      courseUnits: 5,
    },
    {
      courseGrade: "C",
      courseName: "Python Excellence",
      courseNum: "CS 103",
      courseUnits: 9,
    },
    {
      courseGrade: "D",
      courseName: "Moden World",
      courseNum: "CS 104",
      courseUnits: 3,
    },
    {
      courseGrade: "F",
      courseName: "Science Days",
      courseNum: "CS 105",
      courseUnits: 5,
    },
  ]);

  return (
    <div className="p-5">
      <div className="flex md:flex-row gap-12 flex-col">
        <Form
          className="w-full lg:max-w-[250px]"
          setData={setData}
          data={data}
        />
        <Table data={data} />
      </div>
    </div>
  );
}

export default App;
