import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, ErrorNotification, Button } from 'components/UserAddForm/UserAddForm.styled';
import PropTypes from 'prop-types';

const initialValues = {
    name: '',
    number: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required!'),
    number: Yup.string().required('Required!').min(4, 'Number is too short!')
});

export default function UserAddForm({ addContact }) {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={addContact}
            >
                <Form>
                    <div>
                        <Input
                            placeholder="Name"
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                        <ErrorMessage
                            name="name"
                            component={ErrorNotification}
                        />
                    
                    </div>
                    <div>
                        <Input
                            placeholder="Number"
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        />
                        <ErrorMessage
                            name="number"
                            component={ErrorNotification}
                        />
                    </div>
                    <Button type="submit">Add contact</Button>
                </Form>
            </Formik>
        </>
    );
}

UserAddForm.propTypes = {
    addContact: PropTypes.func.isRequired
}