import { AnimalsActionType } from "./actionTypes";

interface IFetchAnimals {
  type: AnimalsActionType.GET_ANIMALS;
  payload: string;
}

export type Action = IFetchAnimals;

export const fetchAnimals = (search: string) => ({
  type: AnimalsActionType.GET_ANIMALS,
  payload: search,
});
