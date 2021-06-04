import React from 'react'
import { FormControl, FormControlLabel, FormGroup, Checkbox, FormLabel } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

const CheckBox = ({name, label, legend, ...otherProps}) => {

  const { setFieldValue } = useFormikContext()

  const [field,meta] = useField(name)

  const handleChange = evt => {
    const {checked} = evt.target
    setFieldValue(name,checked)
  }
  const configCheckBox = {
    ...field,
    onChange : handleChange,
  }

  const configFormControl = { }
    if (meta && meta.error && meta.touched) {
      configFormControl.error = true
    }
    
  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control = {<Checkbox {...configCheckBox}/>}
          label = {label}
        />
      </FormGroup>
    </FormControl>
  )
}

export default CheckBox
