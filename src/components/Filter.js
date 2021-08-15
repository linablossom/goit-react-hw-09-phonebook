import React, { useCallback } from "react";
import { contactsFilter } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/selectors/contactsSelectors";
import { Container, Label, Input } from "./FormStyled";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilter = useCallback(
    (filterValue) => dispatch(contactsFilter(filterValue)),
    [dispatch]
  );
  return (
    <Container>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="keyword"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        ></Input>
      </Label>
    </Container>
  );
};

export default Filter;
