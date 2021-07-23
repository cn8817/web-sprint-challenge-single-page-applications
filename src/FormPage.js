import React, { useState, useEffect } from 'react'
import Form from './Form'
import schema from './validation/schema'
import { reach } from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom'


const initialFormValues = {
    name:'',
    size:'' ,     //items to build a pizza
    sauce:'',
    pepperoni: false,
      sausage: false,
      bacon: false,
      salami: false,
      ham: false,
      chicken: false,
      mushroom: false,
      bellPeppers: false,
      dicedTomatoes: false,
      onion: false,
      jalapenos: false,
      garlic: false,
      blackOlives: false,
      spinach: false,
      pineapple: false,
      mozzarellaCheese: false,
      threeCheese: false,
      extraCheese: false,
    glutonFree:false,
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

  const FormPage = () => {
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
        <Link to={`/pizza`}>
        <Form 
          values={formValues}
          change={inputChange}
          submit={submitForm}
          disbled={disabled}
          errors={formErrors}
        />
        </Link>
      </div>
    );
  };
  export default FormPage;