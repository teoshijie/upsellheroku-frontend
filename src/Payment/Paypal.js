import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
    render() {
        const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
                amount={amount}
                currency={currency}
                onSuccess={(details, data) => onSuccess(details, data)}
                options={{
                    clientId: "AU63Aw4MqlWPi8eORGWZ3FNHlU3QXJRSO3LbTuBGab75XvJksVS_5C2lE8nb1Haj47RcG1Am-ukgj41Q"
                }}
            />
        );
    }
}
export default PayPalBtn;