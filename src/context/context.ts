import {createContext} from "react";

type TContext = {
  slidesTranslateX: number
  setSlidesTranslateX: React.Dispatch<React.SetStateAction<number>>
}
export const Context = createContext<Partial<TContext>>({})

