import React, {useState} from 'react';
import './App.css';
import {Button} from "../../UiKit/Buttons/Button";
import {Phone} from "../Phone/Phone";
import {Operator} from "../Operator/Operator";
import {Minutes} from "../Minutes/Minutes";
import {Internet} from "../Internet/Internet";
import {WiFi} from "../WiFi/WiFi";
import {Network} from "../Network/Network";
import {useSelector} from "react-redux";
import {IState} from "../../Redux/reducer";

function App() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedOperator, setSelectedOperator] = useState('');
    const minutePrice = useSelector((state: IState) => state.minutePrice)
    const internetPrice = useSelector((state: IState) => state.internetPrice)
    const wiFiPrice = useSelector((state: IState) => state.wiFiPrice)
    const socialPrice = useSelector((state: IState) => state.networkPrice)
    const totalPrice = minutePrice + internetPrice + wiFiPrice + socialPrice

    const onSubmit = () => {
        if (phoneNumber && selectedOperator) {
            const reqData = {
                phoneNumber,
                selectedOperator,
                minutePrice,
                internetPrice,
                wiFiPrice,
                socialPrice,
            }
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reqData)
            };
            fetch('https://example.com/api/', requestOptions)
                .then(response => response.json())
                .catch((e) => {
                    console.log(e.message)
                })
            alert(`Номер телефона - ${phoneNumber}, Общая цена - ${totalPrice}`)
        }
    }

    return (
        <div className="App">
            <h1>Настройте тариф</h1>
            <Phone phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
            <Operator selectedValue={selectedOperator} setSelectedValue={setSelectedOperator}/>
            <Minutes/>
            <Internet/>
            <WiFi/>
            <Network/>
            <Button price={totalPrice} onClick={onSubmit}/>
        </div>
    );
}

export default App;
