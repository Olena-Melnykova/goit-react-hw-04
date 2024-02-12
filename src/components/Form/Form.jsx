import { nanoid } from 'nanoid';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'; 
import { FormStyled, Input, Label } from './Form.styled';
import { Button } from '../ContactList/ContactList.styled';


const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Ну хоча б 3 літери напиши')
    .max(50, 'Щось занадто, давай не більше 50 літер')
    .required('Заповни це поле, будь ласочка!'),
  number: Yup.string()
    .min(3, 'Якось дуже мало, хоча б 3 цифри напиши')
    .max(50, 'Щось занадто, давай не більше 50 цифр')
    .required('Заповни це поле, будь ласочка!'),
});

export default function FormikForm({ onSubmit }) {
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema} 
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <FormStyled as={Form}>
          <Label htmlFor={nameId}>Name:</Label>
          <Field
            as={Input}
            type="text"
            name="name"
            id={nameId}
          />
          {}
          {touched.name && errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          
          <Label htmlFor={numberId}>Number:</Label>
          <Field
            as={Input}
            type="tel"
            name="number"
            id={numberId}
          />
          {}
          {touched.number && errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
          
          <Button type="submit">Add contact</Button>
        </FormStyled>
      )}
    </Formik>
  );
}
