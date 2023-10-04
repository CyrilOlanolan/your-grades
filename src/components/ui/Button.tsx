import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className="bg-green-800 rounded-md p-3 text-white hover:bg-green-600 active:bg-green-700 transition-all duration-300 font-semibold"
    />
  );
});

export default Button;
