"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PayPalCheckout = ({ amount, onApprove, setProceed }: { amount: string, onApprove: () => void; setProceed: any }) => {
    const paypalOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: "USD",
        intent: "capture",
    };
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  setProceed(true)
                  return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                      {
                        amount: {
                          value: amount,
                          currency_code: "USD",
                        },
                      },
                    ],
                    application_context: {
                      shipping_preference: "NO_SHIPPING",
                    },
                  });
                }}
                onApprove={(data, actions) => {
                  setProceed(false)
                  return actions.order!.capture().then((details) => {
                    alert(
                      `Order has been received!`
                    );
                  });
                }}
                onError={(err) => {
                  console.error("PayPal error:", err);
                  setProceed(false)
                  alert("There was an error processing your paymet.");
                }}
      />
    </PayPalScriptProvider>
  );
};
