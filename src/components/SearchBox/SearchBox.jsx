import { useState } from 'react';
import { Form, Input, Btn } from './SearchBox.styled';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function SearchBox({ onSearchSubmit }) {
  const [value, setValue] = useState('');

  const submitForm = e => {
    e.preventDefault();
    onSearchSubmit(value);
    setValue('');
  };

  return (
    <Form onSubmit={submitForm}>
      <Input
        value={value}
        onChange={e => setValue(e.target.value.trim())}
        type="text"
      />
      <Btn type="submit">
        <span>
          <MdSearch size={22} />
        </span>
      </Btn>
    </Form>
  );
}

SearchBox.propTypes = {
  onSearchSubmit: PropTypes.func,
};
