import React, { ReactNode } from "react";
import { DestinationsProvider } from "./DestinationsProvider";

interface Props {
  children: ReactNode;
}

export const AppProviders = ({ children }: Props): JSX.Element => (
  <DestinationsProvider>{children}</DestinationsProvider>
);
