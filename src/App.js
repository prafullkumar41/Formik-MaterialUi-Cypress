import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Container, Typography} from "@material-ui/core"
import Header from './components/Header'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import TextField from './components/FormsUI/Textfield'
import Select from './components/FormsUI/Select';
import countries from './data/countries.json';
import DateTimePicker from './components/FormsUI/Datetimpicker';
import Checkbox from './components/FormsUI/Checkbox'
import Button from './components/FormsUI/Button'

const useStyles = makeStyles( (theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName:'',
  lastName:'',
  email:'',
  phone:'',
  addressLine1:'',
  addressLine2:'',
  city:'',
  state:'',
  country:'',
  arrivalDate:'',
  departureDate:'',
  message:'',
  termsOfService:'',
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email').required('Required'),
  phone: Yup.number().integer().typeError('Please enter a valid Phone Number').required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  arrivalDate: Yup.date().required('Required'),
  departureDate: Yup.date().required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
                  .oneOf([true], 'Terms must be accepted')
                  .required('Terms must be accepted to proceed')
})

const App = () => {
  const classes = useStyles()

  return(
    <Grid container >
      <Grid item xs ={12}>
        <Header/>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              
              validationSchema={FORM_VALIDATION}

              onSubmit={(values) => console.log('Submitted Values',values)}
            >
              <Form>
                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Your Details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      name= "firstName"
                      label = "First Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      name= "lastName"
                      label='Last Name'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name= "email"
                      type = "email"
                      label='Email'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name= "phone"
                      label='Phone'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name= "addressLine1"
                      label='Address Line-1'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name= "addressLine2"
                      label='Address Line-2'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      name= "city"
                      label='City'
                    />
                  </Grid>
                  
                  <Grid item xs={6}>
                    <TextField
                      name= "state"
                      label='State'
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Select
                      name='country'
                      label='Country'
                      options = {countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Booking Information
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                      name = 'arrivalDate'
                      label = 'Arrival Date'
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <DateTimePicker
                    name = 'departureDate'
                    label = 'Departure Date'
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      name='message'
                      label = 'Message'
                      multiline = {true}
                      rows = {4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Checkbox
                      name = 'termsOfService'
                      legend = 'Terms Of Service'
                      label = 'I agree'
                    />
                  </Grid>

                  <Grid item>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default App;
