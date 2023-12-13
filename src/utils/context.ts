import { createContext, Dispatch, ReactNode, SetStateAction } from 'react';

type CustomChildrenContextType = {
  value: ReactNode;
  setValue: Dispatch<SetStateAction<ReactNode>>;
};

export const CustomChildrenContext = createContext<CustomChildrenContextType>({
  value: null,
  setValue: () => null,
});
