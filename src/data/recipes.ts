import recipe1 from '../assets/recipe1.jpg'
import sandwich from '../assets/sandwich.jpg'

export type Recipe = {
    id: number;
    title: string;
    tags: string[];
    time: number; // in minutes
    ingredients: string[];
    image: string;
};

const recipes: Recipe[] = [
    {
        id: 1,
        title: "Salmon with wild garlic risotto",
        tags: ["fish", "lunch", "rice", "risotto", "Wild garlic leafs"],
        time: 35,
        ingredients: ['Salmons', 'Wild garlic leafs', 'Basil pesto', 'Rama cremefine',
            'Risotto', 'Onion' ,'Salt', 'Vegetable broth', 'Butter', 'white wine', 'Spices of your choice'],
        image: recipe1,
    },
    {
        id: 2,
        title: "Chicken Sandwich",
        tags: ["chicken", "under30", "sandwich", "meat", "dinner", "snack"],
        time: 20,
        ingredients: ['Sandwich', 'Chicken pieces', 'Cheese', 'Onions', 'Vegetables for topping', 'grill oil or butter'],
        image: sandwich,
    },
];

export default recipes;