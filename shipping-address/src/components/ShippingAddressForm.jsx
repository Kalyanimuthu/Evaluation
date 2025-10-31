import { useState } from 'react';

export default function ShippingAddressForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.street.trim()) newErrors.street = 'Street Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">📮 Shipping Address</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'Full Name', name: 'fullName', type: 'text' },
            { label: 'Phone Number', name: 'phone', type: 'text' },
            { label: 'Street Address', name: 'street', type: 'text' },
            { label: 'City', name: 'city', type: 'text' },
            { label: 'State', name: 'state', type: 'text' },
            { label: 'Pincode', name: 'pincode', type: 'text' },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                  errors[name] ? 'border-red-500 focus:ring-red-300' : 'focus:ring-blue-300'
                }`}
              />
              {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Address
          </button>
        </form>
      ) : (
        <div className="text-center text-green-700">
          <h3 className="text-xl font-semibold mb-2">✅ Address Saved Successfully!</h3>
          <p className="text-gray-700">Thank you, {formData.fullName}. Your shipping details are confirmed.</p>
        </div>
      )}
    </div>
  );
}
