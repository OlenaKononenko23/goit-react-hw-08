import css from './ContactForm.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from '../../redux/selectors';



const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().min(10, "Too Short!").required("Required"),
});

export default function ContactForm () {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (values, actions)=> {
        dispatch(addContact(values));
        actions.resetForm();
    }

    return (<div>
        <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
            <Form className={css.form}>
                <div className={css.inputBox}>
                    <label htmlFor={nanoid()} className={css.label}>Name</label>
                    <Field type='text' name='name' id={nanoid()} className={css.nameInput}></Field>
                    <ErrorMessage name='name' component='span' className={css.error}/>
                </div>
                <div  className={css.inputBox}>
                    <label htmlFor={nanoid()} className={css.label}>Phone number</label>
                    <Field type='tel' name='number' id={nanoid()} className={css.phoneInput}></Field>
                    <ErrorMessage name='number' component='span' className={css.error}/>
                </div>
                
                <button type='submit' className={css.btnAdd}>Add contact</button>
            </Form>
        </Formik>
    </div>)
}