export const selectItems = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectCurrentContact = state => state.contacts.currentContact;
export const selectContactId = state => state.contacts.currentContact.id;
export const selectConfirmDeletion = state => state.contacts.confirmDeletion;
