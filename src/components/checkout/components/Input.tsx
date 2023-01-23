import { useState } from "react";

interface InputProps {
  fullWidth?: Boolean;
  type: string;
  name: string;
  placeholder: string;
  id: string;
}

export function Input({
  fullWidth = false,
  name,
  placeholder,
  type,
  id,
}: InputProps) {

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-xs leading-4">
        {name}
      </label>
      <input
        required
        defaultValue={placeholder}
        readOnly
        type={type}
        id={id}
        placeholder={placeholder}

        className={
          fullWidth
            ? "flex items-center justify-center p-5 w-full h-14 border mobile:w-full  border-black placeholder:font-bold placeholder:text-sm placeholder:opacity-40 rounded-lg placeholder:text-black truncate"
            : "flex items-center justify-center p-5 w-72 h-14 border mobile:w-full border-black placeholder:font-bold placeholder:text-sm placeholder:opacity-40 rounded-lg placeholder:text-black truncate"
        }
      />
    </div>
  );
}
