import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentMethodSelector from './components/PaymentMethodSelector';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-100 p-6">
      <PaymentMethodSelector />
    </div>
  );
}

export default App;
