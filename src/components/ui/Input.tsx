import React from "react";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={"font-bold" + (className ? " " + className : "")}
      {...props}
    />
  );
});

export const Field = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    id: React.HTMLAttributes<HTMLInputElement>["id"];
    name: React.InputHTMLAttributes<HTMLInputElement>["name"];
    type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  }
>(({ id, name, type, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      id={id}
      name={name}
      type={type}
      className={
        "border-2 rounded-md border-green-900 py-1 px-3" +
        (className ? " " + className : "")
      }
      {...props}
    />
  );
});

export const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    direction?: "column" | "row";
  }
>(({ direction = "column", className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={
        "flex" +
        (direction === "column" ? " flex-col" : " flex-row") +
        (className ? " " + className : "")
      }
      {...props}
    />
  );
});
