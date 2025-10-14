"use client";

import { AsYouType } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";
import { useState } from "react";

import { Input } from "@/components/ui/form/Input";
import type { InputProps } from "@/components/ui/form/Input";

interface PhoneInputProps extends InputProps {
  defaultCountry?: CountryCode;
}

export function PhoneInput({ defaultCountry = "FR", value, onChange, ...props }: PhoneInputProps) {
  // Internal state for uncontrolled mode (when used with register)
  const [internalValue, setInternalValue] = useState("");

  // Determine if component is controlled (value prop is provided)
  const isControlled = value !== undefined;
  const displayValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = new AsYouType(defaultCountry).input(inputValue);

    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalValue(formattedValue);
    }

    if (onChange) {
      // Create a new event with the formatted value for react-hook-form
      const formattedEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(formattedEvent);
    }
  };

  return <Input type="tel" value={displayValue} onChange={handleChange} {...props} />;
}
