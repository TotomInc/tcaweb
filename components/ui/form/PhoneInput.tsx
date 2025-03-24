"use client";

import { AsYouType } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";
import { useState } from "react";

import { Input } from "@/components/ui/form/Input";
import type { InputProps } from "@/components/ui/form/Input";

interface PhoneInputProps extends InputProps {
  defaultCountry?: CountryCode;
}

export function PhoneInput({ defaultCountry = "FR", onChange, ...props }: PhoneInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = new AsYouType(defaultCountry).input(inputValue);

    setValue(formattedValue);

    if (onChange) {
      onChange(e);
    }
  };

  return <Input type="tel" value={value} onChange={handleChange} {...props} />;
}
