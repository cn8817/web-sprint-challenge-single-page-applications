import React, { useEffect, useState } from "react";
import Pizzas from './Pizzas'
import Form from './Form'
import schema from './validation/schema'
import { reach } from 'yup'
import axios from 'axios'

import { Route, Link, Switch, Redirect } from "react-router-dom";

//elements used for Form
const initialFormValues = {
  name:'',
  size:'' ,     //items to build a pizza
  sauce:'',
  toppings:'',
  substitute:'',
  instructions:'',
}

const initialFormErrors = {
  name:'',
  size:'' ,     //requirements to build a pizza or else pizza cant be made
  sauce:'',
  toppings:'',
}

const initialPizza = []
const initialDisabled = true

const App = () => {
  /// states
  const [pizza, setPizza] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm =() => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      toppings: ['pepperoni','sausage','bacon','salami','ham','chicken','mushroom','bellPeppers','dicedTomatoes','onion','jalapenos','garlic','blackOlives','spinach','pineapple','mozzarellaCheese','threeCheese','extraCheese'].filter(top => formValues[top]),
      substitute: formValues.substitute.trim(),
      instructions: formValues.instructions.trim(),
    }
    postPizza(newPizza)
  }

  const getPizza = () => {
    axios.get('fakeapi.com')
      .then(res => {
        setPizza(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postPizza = newPizza => {
    axios.post('fakeapi.com', newPizza)
      .then(res => {
        setPizza([res.data], ...pizza)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => { //stops sform submission if requirements arent filled out
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    getPizza()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  


  return (
    <div>
      {/* <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza?</Link>
        </div>
      </nav>
    
      {
        <Switch>
          
        </Switch>
      } */}
      <Form 
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disbled={disabled}
        errors={formErrors}
      />
      {
        pizza.map(pizzas => {
          return (
            <Pizzas key={pizza.id} details={pizzas} />
          )
        })
      }
    </div>
  );
};
export default App;