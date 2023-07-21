import { Title, List, Button, ListItem } from "./Contacts.styled";
import PropTypes from 'prop-types';

export default function Contacts({ contacts, onClick }) {
    return (
        <>
            <Title>Contacts</Title>
            <List>
                {contacts.map(({ name, id, number }) => (
                    <ListItem key={id}>
                        <Button onClick={() => { onClick(id) }}>
                            Delete
                        </Button>
                        {name}: <span>{number}</span>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired
}