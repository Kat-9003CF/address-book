/* eslint-disable no-unused-vars */
import create from 'zustand';

export interface Contact {
  firstName: string;
  lastName: string;
  emailAddress: string;
}
interface StoreState {
  theme: boolean;
  setTheme: () => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  emailAddress: string;
  setEmailAddress: (emailAddress: string) => void;
  createNewContact: (newContact: Contact) => void;
  contacts: Contact[];
  unsetSearchTerms: string;
  setUnsetSearchTerms: (softSearchTerms: string) => void;
  searchTerms: string;
  setSearchTerms: (searchTerms: string) => void;
  showFirstModal: boolean;
  setShowFirstModal: (showSecondModal: boolean) => void;
  resetForm: () => void;
  filteredContacts: Contact[];
  filterContacts: (searchTerms: string) => void;
  resetFilteredContacts: () => void;
}

export const useAddressStore = create<StoreState>()((set) => ({
  theme: true,
  setTheme: () => set((state) => ({ theme: !state.theme })),
  firstName: '',
  setFirstName: (firstName) => set(() => ({ firstName: firstName })),
  lastName: '',
  setLastName: (lastName) => set(() => ({ lastName: lastName })),
  emailAddress: '',
  setEmailAddress: (emailAddress) => set(() => ({ emailAddress: emailAddress })),
  contacts: [
    {
      firstName: 'Selina',
      lastName: 'Kyle',
      emailAddress: 'iluvBatman@gmail.com',
    },
    {
      firstName: 'Selina',
      lastName: 'Kyle',
      emailAddress: 'iluvBatman@gmail.com',
    },
    {
      firstName: 'Bruce',
      lastName: 'Wayne',
      emailAddress: 'iluvBatman@gmail.com',
    },
    {
      firstName: 'Selina',
      lastName: 'Kyle',
      emailAddress: 'iamBatman@gmail.com',
    },
  ],
  createNewContact: (newContact) => {
    set(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  },
  unsetSearchTerms: '',
  setUnsetSearchTerms: (unsetSearchTerms) => set(() => ({ unsetSearchTerms: unsetSearchTerms })),
  searchTerms: '',
  setSearchTerms: (searchTerms) => set(() => ({ searchTerms: searchTerms })),
  showFirstModal: false,
  setShowFirstModal: (value) => set(() => ({ showFirstModal: value })),
  resetForm: () => set(() => ({ firstName: '', lastName: '', emailAddress: '' })),
  filteredContacts: [],
  filterContacts: (searchTerms) => {
    set(({ contacts }) => ({
      filteredContacts: contacts.filter((contact) => contact.firstName.includes(searchTerms)),
    }));
  },
  resetFilteredContacts: () => {
    set(({ contacts }) => ({
      filteredContacts: contacts,
    }));
  },
}));
