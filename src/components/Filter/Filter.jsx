import { Input } from "./Filter.styled";
import PropTypes from 'prop-types';

export default function Filter({ filter, onChange }) {
    return (
        <>
            <Input
                type="text"
                name='filter'
                placeholder="Filter"
                onChange={onChange}
                value={filter}
            />
        </>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}