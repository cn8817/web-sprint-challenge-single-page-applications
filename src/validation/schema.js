import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup
        .string()
        .oneOf(['small','medium','large','extra large'], 'Pizza size is required'),

    sauce: yup
        .string()
        .oneOf(['originalRed', 'garlicAlfredo', 'bbqSauce', 'pestoSauce'], 'sauce is required'),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    salami: yup.boolean(),
    ham: yup.boolean(),
    chicken: yup.boolean(),
    mushroom: yup.boolean(),
    bellPeppers: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    onion: yup.boolean(),
    jalapenos: yup.boolean(),
    garlic: yup.boolean(),
    blackOlives: yup.boolean(),
    spinach: yup.boolean(),
    pineapple: yup.boolean(),
    mozzarellaCheese: yup.boolean(),
    threeCheese: yup.boolean(),
    extraCheese: yup.boolean(),

})

export default formSchema