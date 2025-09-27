const paymentMethods = [
  {
    id: 'credit_card',
    name: 'Credit Card',
    type: 'card',
    fields: [
      { id: 'cardNumber', label: 'Card Number', type: 'text', required: true },
      {
        id: 'cardHolder',
        label: 'Cardholder Name',
        type: 'text',
        required: true,
      },
      {
        id: 'expiryDate',
        label: 'Expiry Date (MM/YY)',
        type: 'date',
        required: true,
      },
      { id: 'cvv', label: 'CVV', type: 'password', required: true },
    ],
  },
  // {
  //   id: 'debit_card',
  //   name: 'Debit Card',
  //   type: 'card',
  //   fields: [
  //     { id: 'cardNumber', label: 'Card Number', type: 'text', required: true },
  //     {
  //       id: 'cardHolder',
  //       label: 'Cardholder Name',
  //       type: 'text',
  //       required: true,
  //     },
  //     {
  //       id: 'expiryDate',
  //       label: 'Expiry Date (MM/YY)',
  //       type: 'text',
  //       required: true,
  //     },
  //     { id: 'cvv', label: 'CVV', type: 'password', required: true },
  //   ],
  // },
  // {
  //   id: 'paypal',
  //   name: 'PayPal',
  //   type: 'digital_wallet',
  //   fields: [
  //     { id: 'email', label: 'PayPal Email', type: 'email', required: true },
  //     { id: 'password', label: 'Password', type: 'password', required: true },
  //   ],
  // },
  // {
  //   id: 'apple_pay',
  //   name: 'Apple Pay',
  //   type: 'digital_wallet',
  //   fields: [
  //     { id: 'appleId', label: 'Apple ID', type: 'email', required: true },
  //   ],
  // },
  // {
  //   id: 'google_pay',
  //   name: 'Google Pay',
  //   type: 'digital_wallet',
  //   fields: [
  //     {
  //       id: 'googleId',
  //       label: 'Google Account Email',
  //       type: 'email',
  //       required: true,
  //     },
  //   ],
  // },
  // {
  //   id: 'bank_transfer',
  //   name: 'Bank Transfer',
  //   type: 'bank',
  //   fields: [
  //     {
  //       id: 'accountName',
  //       label: 'Account Holder Name',
  //       type: 'text',
  //       required: true,
  //     },
  //     {
  //       id: 'accountNumber',
  //       label: 'Account Number / IBAN',
  //       type: 'text',
  //       required: true,
  //     },
  //     {
  //       id: 'swiftCode',
  //       label: 'SWIFT/BIC Code',
  //       type: 'text',
  //       required: false,
  //     },
  //     { id: 'bankName', label: 'Bank Name', type: 'text', required: true },
  //   ],
  // },
  // {
  //   id: 'cash_on_delivery',
  //   name: 'Cash on Delivery',
  //   type: 'cash',
  //   fields: [
  //     { id: 'fullName', label: 'Full Name', type: 'text', required: true },
  //     { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
  //     {
  //       id: 'address',
  //       label: 'Delivery Address',
  //       type: 'textarea',
  //       required: true,
  //     },
  //   ],
  // },
]

export default paymentMethods
