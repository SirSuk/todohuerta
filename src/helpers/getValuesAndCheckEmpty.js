const getValueAndCheckEmpty = (input) => {

  const value = input.value

  if (value.trim() === '') {
    input.classList.add('is-invalid')    
    return 'está vacío'

  } else {
    input.classList.remove('is-invalid') 
    return value
  }

}

export { getValueAndCheckEmpty }