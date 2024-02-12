// import { nanoid } from "nanoid";
// import {Component} from "react";
// import {FormStyled, Input, Label} from "./Form.styled";
// import { Button } from "../ContactList/ContactList.styled";

// export default class Form extends Component {
    
//     nameId = nanoid();
//     numberId = nanoid();
    
//     state = {
//         name: "",
//         number: "",
//     }

//     handleChange = (event) => {
//         const {name, value} = event.target;
//         this.setState({[name]: value});
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { onSubmit } = this.props; 
//         onSubmit(this.state);
//         this.reset();
//     }

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };
    
//     render() {
//         const {name, number} = this.state;
//         return (
//             <FormStyled onSubmit={this.handleSubmit}>
//                 <Label htmlFor={this.nameId}>
//                     Name:
//                 </Label>
//                 <Input
//                     type="text"
//                     name="name"
//                     id={this.nameId}
//                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                     required
//                     value={name}
//                     onChange={this.handleChange}
//                     />
//                 <Label htmlFor={this.numberId}>
//                     Number:
//                 </Label>
//                 <Input
//                     type="tel"
//                     name="number"
//                     id={this.numberId}
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                     required
//                     value={number}
//                     onChange={this.handleChange}
//                 />
//                 <Button type="submit">Add contact</Button>
//             </FormStyled>
//         )
        
//     }
// }


// import {Component} from 'react';
// import { nanoid } from 'nanoid';
// import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';
// import { FormStyled, Input, Label } from './Form.styled';
// import { Button } from '../ContactList/ContactList.styled';

// export default function FormikForm({ onSubmit }) {
//   const nameId = nanoid();
//   const numberId = nanoid();

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       onSubmit={(values, { resetForm }) => {
//         onSubmit(values);
//         resetForm();
//       }}
//     >
//       {() => (
//         <FormStyled as={Form}>
//           <Label htmlFor={nameId}>Name:</Label>
//           <Field
//             as={Input}
//             type="text"
//             name="name"
//             id={nameId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <Label htmlFor={numberId}>Number:</Label>
//           <Field
//             as={Input}
//             type="tel"
//             name="number"
//             id={numberId}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <Button type="submit">Add contact</Button>
//         </FormStyled>
//       )}
//     </Formik>
//   );
// }

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
