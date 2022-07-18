import axios from 'axios';
import icone from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'
type Props = {
    saleID: number;
}
function handleClick(id :number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then (Response => {

    });
}
function NotificationButton({saleID}: Props) {
    return (

        <div className="dsmeta-red-btn" onClick={() => {handleClick(saleID)}}>
            <img src={icone} alt="notificar" />
        </div>


    )
}

export default NotificationButton
