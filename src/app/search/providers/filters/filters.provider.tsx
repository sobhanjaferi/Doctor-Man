"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";
import { Filters } from "../../types/filters";

type ContextValue = {
  filters: Filters;

  changeFilter: <TKey extends keyof Filters>(
    key: TKey,
    value: Exclude<Filters[TKey], undefined>,
  ) => void;

  removeFilter: <TKey extends keyof Filters>(key: TKey) => void;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  changeFilter: () => {},
  removeFilter: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<Filters>({});

  const changeFilter = <TKey extends keyof Filters>(
    key: TKey,
    value: Exclude<Filters[TKey], undefined>,
  ): void => {
    setFilters((old) => ({ ...old, [key]: value }));
  };

  const removeFilter = <TKey extends keyof Filters>(key: TKey): void => {
    setFilters((old) => {
      const clone = { ...old };
      delete clone[key];
      return clone;
    });
  };

  return (
    <FiltersContext value={{ filters, changeFilter, removeFilter }}>
      {children}
    </FiltersContext>
  );
}
