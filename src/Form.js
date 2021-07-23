import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group pizza'>
                <h2>Make a pizza</h2>
                <div className='errors'> {/*rendering the validation errors */}
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.toppings}</div>
                    <div>{errors.instructions}</div>
                    <div>{errors.substitute}</div>
                </div>
            </div>

            <div className = 'form-group name'>
                <label>Enter your name
                <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>

            </div>

            <div className = 'form-group dropdown'>
                
                <label>Choose a pizza size
                    <select
                    onChange={onChange}
                    value={values.size}
                    name='size'
                    >
                    <option value=''>--Select an option--</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extra-large'>Extra Large</option>
                    </select>
                </label>
            </div>

            <div className='form-group radio-button'>
                <label>original red
                    <input
                        type='radio'
                        name='sauce'
                        value='originalRed'  
                        onChange={onChange}
                        checked={values.sauce === 'originalRed'}  
                    />
                </label>

                <label>garlic alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='garlicAlfredo'
                        onChange={onChange}
                        checked={values.sauce === 'garlicAlfredo'}
                    />
                </label>

                <label>BBQ sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbqSauce'
                        onChange={onChange}
                        checked={values.sauce === 'bbqSauce'}
                    />
                </label>

                <label>Pesto sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='pestoSauce'
                        onChange={onChange}
                        checked={values.sauce === 'pestoSauce'}
                    />
                </label>
            </div>

            <div className='form-group checkbox'>
                <h4>Add toppings</h4>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>

                <label>Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.sausage}
                    />
                </label>

                <label>Bacon
                    <input
                        type='checkbox'
                        name='bacon'
                        onChange={onChange}
                        checked={values.bacon}
                    />
                </label>

                <label>Salami
                    <input
                        type='checkbox'
                        name='salami'
                        onChange={onChange}
                        checked={values.salami}
                    />
                </label>

                <label>Ham
                    <input
                        type='checkbox'
                        name='ham'
                        onChange={onChange}
                        checked={values.ham}
                    />
                </label>

                <label>Chicken
                    <input
                        type='checkbox'
                        name='chicken'
                        onChange={onChange}
                        checked={values.chicken}
                    />
                </label>

                <label>Mushroom
                    <input
                        type='checkbox'
                        name='mushroom'
                        onChange={onChange}
                        checked={values.mushroom}
                    />
                </label>

                <label>Bell Peppers
                    <input
                        type='checkbox'
                        name='bellPeppers'
                        onChange={onChange}
                        checked={values.bellPeppers}
                    />
                </label>

                <label>Diced Tomatoes
                    <input
                        type='checkbox'
                        name='dicedTomatoes'
                        onChange={onChange}
                        checked={values.dicedTomatoes}
                    />
                </label>

                <label>Onion
                    <input
                        type='checkbox'
                        name='onion'
                        onChange={onChange}
                        checked={values.onion}
                    />
                </label>

                <label>Jalapenos
                    <input
                        type='checkbox'
                        name='jalapenos'
                        onChange={onChange}
                        checked={values.jalapenos}
                    />
                </label>

                <label>Garlic
                    <input
                        type='checkbox'
                        name='garlic'
                        onChange={onChange}
                        checked={values.garlic}
                    />
                </label>

                <label>Black Olives
                    <input
                        type='checkbox'
                        name='blackOlives'
                        onChange={onChange}
                        checked={values.blackOlives}
                    />
                </label>

                <label>Spinach
                    <input
                        type='checkbox'
                        name='spinach'
                        onChange={onChange}
                        checked={values.spinach}
                    />
                </label>

                <label>Pineapple
                    <input
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        checked={values.pineapple}
                    />
                </label>

                <label>Mozzarella Cheese
                    <input
                        type='checkbox'
                        name='mozzarellaCheese'
                        onChange={onChange}
                        checked={values.mozzarellaCheese}
                    />
                </label>

                <label>Three Cheese
                    <input
                        type='checkbox'
                        name='threeCheese'
                        onChange={onChange}
                        checked={values.threeCheese}
                    />
                </label>

                <label>Extra Cheese
                    <input
                        type='checkbox'
                        name='extraCheese'
                        onChange={onChange}
                        checked={values.extraCheese}
                    />
                </label>
            </div>

            <div className='form-group checkbox'>
                <h4>Substitute</h4>
                <label>Gluton Free 
                    <input
                        type='checkbox'
                        name='glutonFree'
                        onChange={onChange}
                        checked={values.glutonFree}
                    />
                </label>
            </div>

            <div className='form-group input'>
                <h4>Special Instructions</h4>
                <label>
                    <input
                        type='text'
                        name='instructions'
                        onChange={onChange}
                        value={values.instructions}
                    />
                </label>
                
            </div>
            <button id='order-button' disabled={disabled}>Add to Order</button>
        </form>
    )
}