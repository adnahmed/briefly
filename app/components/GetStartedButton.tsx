"use client";

import { useBreakpoint } from "../lib/useBreakpoint";
import Button from "./Button";

export const GetStartedButton = () => {
  const tablet = useBreakpoint("tablet");
  return (
    <Button type="primary" icon>
      {tablet ? "Get started" : undefined}
    </Button>
  );
};
