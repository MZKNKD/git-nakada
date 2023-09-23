const contacts = [
    {id: 1, name: '山田'},
    {id: 2, name: '田中'},
    {id: 3, name: '伊藤'}
]

export const getContacts = () => contacts

export const getContact = id => {
    return contacts.find(contact => contact.id === id)
}