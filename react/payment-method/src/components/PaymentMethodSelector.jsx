import { useState } from 'react';

export default function PaymentMethodSelector() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const paymentOptions = [
    { label: 'Cash on Delivery', icon: '💵' },
    { label: 'UPI', icon: '📱' },
    { label: 'Debit/Credit Card', icon: '💳' },
  ];

  const handleSelection = (e) => {
    setSelectedMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleReset = () => {
    setSelectedMethod('');
    setShowSummary(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Select Payment Method</h2>

      {!selectedMethod && (
        <p className="text-sm text-gray-500 mb-2">Please select a payment method to proceed.</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {paymentOptions.map(({ label, icon }) => (
          <label key={label} className="flex items-center space-x-3">
            <input
              type="radio"
              name="payment"
              value={label}
              checked={selectedMethod === label}
              onChange={handleSelection}
              className="accent-teal-600"
            />
            <span className="text-gray-700">{icon} {label}</span>
          </label>
        ))}

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
        >
          Confirm Payment Method
        </button>
      </form>

      {showSummary && (
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded">
          <h3 className="text-lg font-semibold text-teal-800">Summary</h3>
          <p className="text-gray-700 mt-2">
            Selected Payment Method: <span className="font-medium">{selectedMethod}</span>
          </p>
          <button
            onClick={handleReset}
            className="mt-4 text-sm text-teal-600 underline hover:text-teal-800"
          >
            Change Selection
          </button>
        </div>
      )}
    </div>
  );
}
