import { useParams } from "react-router-dom"
import { getContact } from "../functions/contacts"

const ContactDetail = () => {
    const params = useParams()
    const contact = getContact(parseInt(params.id, 10))

    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()

    return(<>
        id: {contact.id} <br/>
        名前: {contact.name}  <br/>
        memo: {contact.name}の連絡先です <br/>
        date:  {year}年{month}月{date}日更新<br/>
    </>)
}

export default ContactDetail