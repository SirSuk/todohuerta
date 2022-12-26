const getValueAndCheckEmpty = (input) => {

  const value = input.value

  if (value.trim() === '' || value === undefined) {
    input.classList.add('vacio')    
    return 'está vacío'

  } else {
    input.classList.remove('vacio') 
    return value
  }

}

export { getValueAndCheckEmpty }