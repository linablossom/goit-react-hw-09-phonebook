import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.filter;
export const getFilteredArray = createSelector(
  getItems,
  getFilter,
  (contacts, filter) => {
    const filterBy = filter.toLowerCase();
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterBy)
        )
      : contacts;
  }
);
export const getLoading = (state) => state.contacts.loading;
