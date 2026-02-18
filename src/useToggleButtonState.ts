import { useState } from "react";

export function useToggleButtonState() {
  const [isActive, setIsActive] = useState(false);
  const [numberOfToggles, setNumberOfToggles] = useState(10);

  const handleClick = () => {
    setNumberOfToggles((prev) => {
      if (prev > 0) {
        setIsActive(!isActive);
        return prev - 1;
      }
      return prev;
    });
  };

  return {
    isActive,
    numberOfToggles,
    handleClick,
  };
}
