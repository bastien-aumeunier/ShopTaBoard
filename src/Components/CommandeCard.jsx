import { useEffect, useState } from 'react'
import '../Assets/Style/Components/CommandeCard.style.css'

const CommandeCard = (props) => {

    const [date, setDate] = useState("")

    const convertDate = () => {
        const date = new Date(props.commande.date)
        let day = date.getDate()
        let month = date.getMonth()
        const year = date.getFullYear()
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        setDate(day + "/" + month + "/" + year)
    }
    useEffect(() => {
        convertDate()
    },[])

    return (
        <div id="CommandeCard">
            <div id="Commande-Price">Prix : {props.commande.price}€</div>
            <div id="Commande-Date">Date : {date}</div>
        </div>
    )

}

export default CommandeCard;