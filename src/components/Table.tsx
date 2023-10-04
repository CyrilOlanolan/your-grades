import type { FC } from "react";
import * as Input from "./ui/Input";
import { FormDataModel } from "./Form";
import React, { useEffect, useState } from "react";

type TableProps = {
  className?: string;
  data: FormDataModel[];
};

const TH = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <th
    className={
      "border border-gray-300 px-3 py-2" + (className ? ` ${className}` : "")
    }
  >
    {children}
  </th>
);

const TD = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <td
    className={
      "border border-gray-300 px-3 py-2" + (className ? ` ${className}` : "")
    }
  >
    {children}
  </td>
);

const TR = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <tr className={"" + (className ? ` ${className}` : "")}>{children}</tr>;

const Table: FC<TableProps> = ({ data }) => {
  const [dataInTable, setDataInTable] = useState<FormDataModel[]>(data);

  useEffect(() => {
    setDataInTable(data);
  }, [data]);

  const qpi =
    data.reduce((acc, curr) => {
      switch (curr.courseGrade) {
        case "A":
          return acc + 4 * curr.courseUnits;
        case "B+":
          return acc + 3.5 * curr.courseUnits;
        case "B":
          return acc + 3 * curr.courseUnits;
        case "C+":
          return acc + 2.5 * curr.courseUnits;
        case "C":
          return acc + 2 * curr.courseUnits;
        case "D":
          return acc + 1 * curr.courseUnits;
        case "F":
          return acc + 0 * curr.courseUnits;
        default:
          return acc;
      }
    }, 0) / data.reduce((acc, curr) => acc + curr.courseUnits, 0);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const filteredData = data.filter(
      (datum) =>
        datum.courseName
          .toUpperCase()
          .includes(event.target.value.toUpperCase()) ||
        datum.courseNum.toUpperCase().includes(event.target.value.toUpperCase())
    );

    setDataInTable(filteredData);
  }
  return (
    <section className="flex flex-col w-full">
      <Input.Wrapper className="mb-5 w-full lg:max-w-[31.25rem]">
        <Input.Label htmlFor="search">Find Course</Input.Label>
        <Input.Field
          id="search"
          name="search"
          type="text"
          onChange={handleSearch}
        />
      </Input.Wrapper>

      <div className="bg-white rounded-2xl w-full grow p-5 flex flex-col">
        <table className="w-full mb-8">
          <thead>
            <TR>
              <TH className="col-span-3">Course No.</TH>
              <TH className="col-span-4">Course Name</TH>
              <TH className="col-span-2">Units</TH>
              <TH className="col-span-2">Grade</TH>
            </TR>
          </thead>
          <tbody>
            {dataInTable.map((datum, idx) => (
              <tr key={`row-${idx}`}>
                <TD>{datum.courseNum}</TD>
                <TD>{datum.courseName}</TD>
                <TD>{datum.courseUnits}</TD>
                <TD>{datum.courseGrade}</TD>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="ms-auto mt-auto">
          <tbody>
            <TR>
              <TH className="bg-yellow-100">Average QPI</TH>
              <TD className="bg-green-50">
                {!isNaN(qpi) ? qpi.toPrecision(3) : "N/A"}
              </TD>
            </TR>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
