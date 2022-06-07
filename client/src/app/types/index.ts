export interface Ingredient {
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
