import { Formik, Field, Form, ErrorMessage } from 'formik';
import './App.css';
import schema from './schema';

function App() {

  function onSubmit(values, actions){
    console.log('SUBMIT', values);
    console.log('ACTOINS', actions);
  }

  return (
    <div className="App">
      <Formik onSubmit={onSubmit} initialValues={{ name: '', email: '' }} validationSchema={schema}>
        {({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type='text'/>
              <ErrorMessage name='name' />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type='email' />
              <ErrorMessage name='email' />
            </div>
            <button type='submit' disabled={!isValid}>Enviar</button>
          </Form>  
        )}
      </Formik>
    </div>
  );
}

export default App;
