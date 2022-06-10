import { AxiosResponse } from "axios";

interface Ingredient {
  id: number;
  name: string;
  description: string;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  kosher: boolean;
  dairyFree: boolean;
  nutsFree: boolean;
  treeNutFree: boolean;
  sugarFree: boolean;
  keto: boolean;
  imgUrl: string;

  measureQuantity: {
    id: number;
    name: string;
    abbreviation: string;
  };
}

export type { Ingredient };

/**
 * extending Axios Response Type because I don't want to
 * vendor-lock the code to axios or any other particular API library
 */
// The interface of the response data for any api request
export type { AxiosResponse as ApiResponse };
