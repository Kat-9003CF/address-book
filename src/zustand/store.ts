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
  ],
  createNewContact: (newContact) => {
    console.log(newContact);
    set(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  },
}));
