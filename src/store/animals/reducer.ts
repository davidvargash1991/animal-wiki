import { animals } from "../animals";
import { IAnimal } from "models/animals";
import { Action } from "./actions";

export interface IAnimalsState {
  isLoading: boolean;
  errMess: string;
  animals: IAnimal[];
}

const animalsInitialState: IAnimalsState = {
  isLoading: false,
  errMess: "",
  animals: animals,
};

export const Animals = (state = animalsInitialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
