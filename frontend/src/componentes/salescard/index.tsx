
import NotificationButton from '../notification button'
import './styles.css'
function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
            </div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>

                        <th className="show992">ID</th>
                        <th className="show992">data</th>
                        <th>Vendedor</th>
                        <th className="show992">visitas</th>
                        <th className="show992">vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="show992">#375</td>
                        <td className="show576">08/07/2022</td>
                        <td>Jaqueline </td>
                        <td className="show992">3</td>
                        <td className="show992">0</td>
                        <td>R$900,00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                                </div>

                            

                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#45</td>
                        <td className="show576">14/02/2022</td>
                        <td>Peterson</td>
                        <td className="show992">1</td>
                        <td className="show992">5</td>
                        <td>R$900,00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                            <NotificationButton/>
                                

                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#5</td>
                        <td className="show576">15/04/2022</td>
                        <td>Gabriel </td>
                        <td className="show992">1</td>
                        <td className="show992">6</td>
                        <td>R$900,00 </td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                            <NotificationButton/>
                        
                            

                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#17</td>
                        <td className="show576">17/02/2022</td>
                        <td>Ana paula </td>
                        <td className="show992">14</td>
                        <td className="show992">2</td>
                        <td>R$900,00 </td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td className="show992">#95</td>
                        <td className="show576">15/07/2022</td>
                        <td>helio </td>
                        <td className="show992">8</td>
                        <td className="show992">7</td>
                        <td>R$900,00 </td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                            <NotificationButton/>

                            </div>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
           
  )
}

export default SalesCard
