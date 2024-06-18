import css from './Contact.module.css'

export default function Contact ({id, name, phone, onDelete}) {
    return (
        <>
            <div className={css.contactInfo}>
                <p className={css.contactName}>{name}</p>
                <p className={css.contactNumber}>{phone}</p>
            </div>
            <button type='button' className={css.deleteBtn} onClick={()=> onDelete(id)}>Delete</button>
        </>
    )
}