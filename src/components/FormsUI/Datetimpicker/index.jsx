import { TextField } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'

const DateTimePicker = ({name,...otherProps}) => {

  const [field,meta] = useField(name)

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type : 'date',
    variant : 'outlined',
    fullWidth : true,
    InputLabelProps : { //Must be included in case of ate time
      shrink : true
    }
  }

  if (meta && meta.error && meta.touched) {
    configDateTimePicker.error = true
    configDateTimePicker.helperText = meta.error
  }

  return (
    <TextField
      {...configDateTimePicker}
    />
  )
}

export default DateTimePicker
