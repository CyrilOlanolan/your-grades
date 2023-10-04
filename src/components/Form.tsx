import { useState, type FC } from "react";
import * as Input from "./ui/Input";
import Button from "./ui/Button";

type FormProps = {
  className?: string;
  data: FormDataModel[];
  setData: React.Dispatch<React.SetStateAction<FormDataModel[]>>;
};

export interface FormDataModel {
  courseNum: string;
  courseName: string;
  courseUnits: number;
  courseGrade: string;
}
[];

const Form: FC<FormProps> = ({ className, data, setData }) => {
  const [courseNum, setCourseNum] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [courseUnits, setCourseUnits] = useState<number>(0);
  const [courseGrade, setCourseGrade] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData: FormDataModel = {
      courseNum,
      courseName,
      courseUnits,
      courseGrade,
    };

    if (formData) {
      setData([...data, formData]);
      return;
    }

    alert("There is a problem submitting the form.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={"grid grid-cols-1 gap-4 h-fit" + " " + className}
    >
      <Input.Wrapper>
        <Input.Label htmlFor="courseNum">Course No</Input.Label>
        <Input.Field
          id="courseNum"
          name="courseNum"
          type="text"
          onChange={(event) => setCourseNum(event.target.value)}
        />
      </Input.Wrapper>

      <Input.Wrapper>
        <Input.Label htmlFor="courseName">Course Name</Input.Label>
        <Input.Field
          id="courseName"
          name="courseName"
          type="text"
          onChange={(event) => setCourseName(event.target.value)}
        />
      </Input.Wrapper>

      <Input.Wrapper>
        <Input.Label htmlFor="courseUnits">Units</Input.Label>
        <Input.Field
          id="courseUnits"
          name="courseUnits"
          type="number"
          onChange={(event) => setCourseUnits(parseInt(event.target.value))}
        />
      </Input.Wrapper>

      <div>
        <Input.Label>Grade</Input.Label>
        <div className="px-5 grid grid-cols-4 gap-y-3 lg:block">
          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeA"
              name="grade"
              type="radio"
              className="mr-3"
              value="A"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeA">A</Input.Label>
          </Input.Wrapper>

          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeBPlus"
              name="grade"
              type="radio"
              className="mr-3"
              value="B+"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeBPlus">B+</Input.Label>
          </Input.Wrapper>

          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeB"
              name="grade"
              type="radio"
              className="mr-3"
              value="B"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeB">B</Input.Label>
          </Input.Wrapper>

          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeC"
              name="grade"
              type="radio"
              className="mr-3"
              value="C"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeC">C+</Input.Label>
          </Input.Wrapper>

          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeC"
              name="grade"
              type="radio"
              className="mr-3"
              value="C+"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeC">C</Input.Label>
          </Input.Wrapper>

          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeD"
              name="grade"
              type="radio"
              className="mr-3"
              value="D"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeD">D</Input.Label>
          </Input.Wrapper>

          <Input.Wrapper direction={"row"}>
            <Input.Field
              id="gradeF"
              name="grade"
              type="radio"
              className="mr-3"
              value="F"
              onChange={(event) => setCourseGrade(event.target.value)}
            />
            <Input.Label htmlFor="gradeF">F</Input.Label>
          </Input.Wrapper>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
