import { getContacts } from "../functions/contacts"
import { Link } from "react-router-dom"

const ContactIndex = () => {
    const contacts = getContacts()

    return(<>
        <h3>問い合わせ一覧</h3>
        <ul>
            {contacts.map(contact=>(
                <li key={contact.id}><Link  to={`/contact-list/${contact.id}`}>{contact.id}</Link></li>
            ))}
        </ul>
    </>)
}

export default ContactIndex