export interface Recipe {
    id: string;
    title: string;
    description?: string;
    ingredients: {
        name: string;
        amount?: string;
        unit?: string;
    }[];
    steps: string[];
    time: number;
    servings?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    tags?: string[];
    image?: string;

}
export type Ingredient = {
    name: string;
    amount?: string;
    unit?: string;
};