import { nanoid } from 'nanoid';
import { Input, Label, FormStyled } from '../Form/ContactForm.styled';

const SearchBox = ({ value, onChange }) => {
    const filterId = nanoid();

    return (
        <FormStyled>
            <Label htmlFor={filterId}>
                Find contacts by name:
            </Label>
            <Input
                id={filterId}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </FormStyled>
    );
};

export default SearchBox;