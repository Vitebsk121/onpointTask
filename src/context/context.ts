import React, {createContext} from "react";

type TContext = {
  pickedSlideNum: number
  setPickedSlideNum: React.Dispatch<React.SetStateAction<number>>
}
export const Context = createContext<Partial<TContext>>({})

