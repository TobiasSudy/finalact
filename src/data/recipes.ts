// src/data/recipes.ts
import recipe1 from '../assets/recipe1.jpg';
import sandwich from '../assets/sandwich.jpg';
import recipe3 from '../assets/rezept3.jpg';
import lachs from '../assets/lachs.png';
import sandwichIcon from '../assets/sandwich.png';
import recipe3Icon from '../assets/logo3.png';

export interface Recipe {
    id: string;
    title: string;
    description?: string;
    ingredients: {
        name: string;
    }[];
    steps: string[];
    time: number;
    servings?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    tags?: string[];
    image?: string;
    icon?: string;
}

export const recipes: Recipe[] = [
    {
        id: '1',
        title: 'Salmon with wild garlic risotto',
        time: 35,
        ingredients: [
            { name: 'Salmons' },
            { name: 'Wild garlic leafs' },
            { name: 'Basil pesto' },
            { name: 'Rama cremefine' },
            { name: 'Risotto' },
            { name: 'Onion' },
            { name: 'Salt' },
            { name: 'Vegetable broth' },
            { name: 'Butter' },
            { name: 'White wine' },
            { name: 'Spices of your choice' }
        ],
        steps: [
            'Prepare a pan with oil each for the risotto (here also the butter) and the salmon. Also prepare a small pan for the vegetable broth.',
            'Warm up the vegetable broth. Put in the cut onions in the risotto pan and sweat them a little.',
            'Now put the risotto rice to that and roast it 2-3 minutes.',
            'Then put the white wine and a portion of the vegetable broth in it.',
            'Rost the salmons and when they are put in the rama cremefine and the basil pesto. Season the sauce as you want.',
            'For example, I seasoned the sauce with salt, pepper, a little of chilli and a specific soup seasoning.',
            'Keep adding broth to the rice until it has absorbed all the broth. After 15-20 minutes the rice should be ready to be eaten.',
            'Now just add the cut leaves and the remaining butter. Season the rice with salt and pepper and if you want you can put in parmesan.',
            'Prepare the dish and enjoy.'
        ],
        image: recipe1,
        icon: lachs
    },
    {
        id: '2',
        title: 'Chicken Sandwich',
        time: 20,
        ingredients: [
            { name: 'Sandwich bread' },
            { name: 'Chicken breast' },
            { name: 'Cheese' },
            { name: 'Onion' },
            { name: 'Lettuce' },
            { name: 'Tomato' },
            { name: 'Mayonnaise' },
            { name: 'Grill oil or butter' }
        ],
        steps: [
            'Season and grill the chicken breast until fully cooked.',
            'Cut the chicken pieces into small pieces. Put the cut onions in the pan and sweat them until they have a good color.',
            'Add the chicken to the onions and roast it. Season it like you want. I used salt, pepper, paprika powder, mexican grill seasoning.',
            'Add the cheese to the chicken. Meanwhile, sweat the sandwich so it gets a good color and crispy on the outside.',
            'When the chicken with the cheese is ready, prepare the sandwich. First, put a sauce on the bread, then the chicken, on the chicken more cheese you want, then the vegetables of your choice and lastly add another sauce.',
            'Enjoy'
        ],
        image: sandwich,
        icon: sandwichIcon
    },
    {
        id: '3',
        title: 'Pasta with ham and tomato sauce',
        time: 25,
        ingredients: [
            { name: 'Pasta' },
            { name: 'Ham' },
            { name: 'Tomato sauce' },
            { name: 'Salsa sauce' },
            { name: 'Cayenne pepper' },
            { name: 'Onion' },
            { name: 'Paprika powder' },
            { name: 'Spring onions' }
        ],
        steps: [
            'Bring a large pot of salted water to boil for the pasta. Cook the pasta according to package instructions until al dente.',
            'While the pasta cooks, dice the onions and slice the ham into thin strips. Thinly slice the spring onions for garnish.',
            'Heat some oil in a large pan over medium heat. Add the diced onions and sauté until translucent (about 3-4 minutes).',
            'Add the ham to the pan and cook for 2-3 minutes until slightly browned. Season with paprika powder and a pinch of cayenne pepper for heat.',
            'Pour in the tomato sugo and salsa sauce. Stir well and let the sauce simmer for 5-7 minutes to allow flavors to combine.',
            'Drain the cooked pasta, reserving about 1/2 cup of pasta water. Add the pasta to the sauce in the pan, tossing to coat evenly.',
            'If the sauce seems too thick, add a splash of the reserved pasta water to reach your desired consistency.',
            'Garnish with sliced spring onions and serve immediately. For extra flavor, you can add grated Parmesan cheese on top.',
            'Enjoy your delicious pasta dish!'
        ],
        image: recipe3,
        icon: recipe3Icon
    }
];