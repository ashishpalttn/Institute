import React from 'react';
import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/payment/order`

// const razorpayPayment = (amount) => {
  const handlePayment = async (amount) => {
    try {
      // Step 1: Create Order in Backend
      const { data: order } = await axios.post(BASE_URL, { amount });

      // Step 2: Options for Razorpay Checkout
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,  // Razorpay key ID
        amount: order.amount,
        currency: order.currency,
        name: 'Event Registration',
        description: 'Event Fee',
        order_id: order.id, // Razorpay Order ID
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

          // Step 3: Verify Payment
          const verify = await axios.post(BASE_URL, {
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id,
            signature: razorpay_signature
          });

          if (verify.data.status === 'Payment verified successfully') {
            alert('Payment Success');
          } else {
            alert('Payment Verification Failed');
          }
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#0c4a6e'
        }
      };

      // Step 4: Initialize Razorpay and open checkout form
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment Error:', error);
    }
  };

//   return (
//     <button onClick={handlePayment} className="bg-blue-600 text-white px-4 py-2 rounded">
//       Pay ₹{amount}
//     </button>
//   );
// };

export default handlePayment;
