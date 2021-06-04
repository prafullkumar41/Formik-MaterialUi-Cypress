import React from 'react'
import TextField from '@material-ui/core/TextField'
import {useField} from 'formik'//useField is used to update the state of the formik(formik aware) using 
                               //this new component Text Field Wrapper

const TextfieldWrapper = ({name,...otherProps}) => {
   const [field,mata] = useField(name)

   const configTextField = {
     ...field,
     ...otherProps,
    fullWidth : true,
    variant : 'outlined'
   } 

   if (mata && mata.touched && mata.error) {
     configTextField.error = true;
     configTextField.helperText = mata.error
   }

  return (
    <TextField {...configTextField} />
  )
}

export default TextfieldWrapper
