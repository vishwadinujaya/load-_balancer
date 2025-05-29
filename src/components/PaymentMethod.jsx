import React, { useState } from 'react';

const months = [
  { value: '', label: 'Month' },
  { value: '01', label: '01' },
  { value: '02', label: '02' },
  { value: '03', label: '03' },
  { value: '04', label: '04' },
  { value: '05', label: '05' },
  { value: '06', label: '06' },
  { value: '07', label: '07' },
  { value: '08', label: '08' },
  { value: '09', label: '09' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 15 }, (_, i) => currentYear + i);

const cardIcons = [
  { alt: 'American Express', src: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg' },
  { alt: 'Diners Club', src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Diners_Club_Logo3.svg' },
  { alt: 'Discover', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Discover_Card_logo.svg' },
  { alt: 'JCB', src: 'https://upload.wikimedia.org/wikipedia/commons/1/16/JCB_logo.svg' },
  { alt: 'Maestro', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Maestro_logo.svg' },
  { alt: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' },
  { alt: 'UnionPay', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/UnionPay_logo.svg' },
  { alt: 'Visa', src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' },
];

const PaymentMethod = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      const cleaned = value.replace(/\D+/g, '').slice(0, 16);
      const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'cvv') {
      const cleaned = value.replace(/\D+/g, '').slice(0, 4);
      setFormData(prev => ({ ...prev, [name]: cleaned }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.cardNumber.replace(/\s/g, '').match(/^\d{13,16}$/)) newErrors.cardNumber = 'Enter a valid card number';
    if (!formData.cvv.match(/^\d{3,4}$/)) newErrors.cvv = 'Enter a valid CVV';
    if (!formData.expiryMonth) newErrors.expiryMonth = 'Select expiry month';
    if (!formData.expiryYear) newErrors.expiryYear = 'Select expiry year';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      cardNumber: '',
      cvv: '',
      expiryMonth: '',
      expiryYear: '',
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert('Payment submitted! (This is a demo, no actual payment processing)');
  };

  return (
      <main style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '3rem 2rem',
      backgroundImage: "url('/src/assets/future-of-ship-management-software.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 16,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 16,
        zIndex: 0,
      }}></div>
      <h1 style={{
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        marginBottom: '2rem',
        fontWeight: '700',
        fontSize: '2.5rem',
        textShadow: '0 2px 6px rgba(0,0,0,0.3)',
        zIndex: 1,
      }}>
        Payment Method
      </h1>

      <form onSubmit={handleSubmit} noValidate style={{
        backgroundColor: '#ffffff',
        padding: '2.5rem 3rem',
        borderRadius: 20,
        boxShadow: '0 12px 36px rgba(0,0,0,0.2)',
        minHeight: '1100px',
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
      }}>
          <fieldset style={{ border: 'none', marginBottom: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <legend style={{
            fontWeight: '700',
            fontSize: '1.75rem',
            marginBottom: '2rem',
            color: '#5a2a83',
            borderBottom: '4px solid #8e44ad',
            paddingBottom: '0.75rem',
            letterSpacing: '0.05em',
          }}>
            Please select a payment method
          </legend>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="firstName" style={{ display: 'block', fontWeight: '600', marginBottom: 8, fontSize: '1.15rem', color: '#6c3483' }}>
              First name <span style={{ fontWeight: 'normal', fontStyle: 'italic', fontSize: '0.9rem' }}>(Optional)</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              style={{
                width: '48%',
                padding: 16,
                marginRight: '4%',
                borderRadius: 12,
                border: '1.5px solid #b39ddb',
                fontSize: 18,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = '#7d3c98';
                e.currentTarget.style.boxShadow = '0 0 8px #9b59b6';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = '#b39ddb';
                e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0,0,0,0.1)';
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="lastName" style={{ display: 'block', fontWeight: '600', marginBottom: 8, fontSize: '1.15rem', color: '#6c3483' }}>
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              aria-invalid={errors.lastName ? 'true' : 'false'}
              aria-describedby="lastName-error"
              style={{
                width: '100%',
                padding: 16,
                borderRadius: 12,
                border: errors.lastName ? '2px solid #e74c3c' : '1.5px solid #b39ddb',
                fontSize: 18,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: errors.lastName ? '0 0 8px #e74c3c' : 'inset 0 1px 3px rgba(0,0,0,0.1)',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = '#7d3c98';
                e.currentTarget.style.boxShadow = '0 0 8px #9b59b6';
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = errors.lastName ? '#e74c3c' : '#b39ddb';
                e.currentTarget.style.boxShadow = errors.lastName ? '0 0 8px #e74c3c' : 'inset 0 1px 3px rgba(0,0,0,0.1)';
              }}
              required
            />
            {errors.lastName && <p id="lastName-error" style={{ color: '#e74c3c', marginTop: 6, fontSize: '0.9rem' }}>{errors.lastName}</p>}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="cardNumber" style={{ display: 'block', fontWeight: '600', marginBottom: 6, fontSize: '1.1rem', color: '#555' }}>
              Card number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="•••• •••• •••• ••••"
              aria-invalid={errors.cardNumber ? 'true' : 'false'}
              aria-describedby="cardNumber-error"
              style={{
                width: '100%',
                padding: 14,
                borderRadius: 10,
                border: errors.cardNumber ? '2px solid #e74c3c' : '1px solid #ccc',
                fontSize: 18,
                letterSpacing: 3,
                transition: 'border-color 0.3s ease',
              }}
              maxLength={19}
              inputMode="numeric"
              autoComplete="cc-number"
              onFocus={e => e.currentTarget.style.borderColor = '#764ba2'}
              onBlur={e => e.currentTarget.style.borderColor = errors.cardNumber ? '#e74c3c' : '#ccc'}
            />
            {errors.cardNumber && <p id="cardNumber-error" style={{ color: '#e74c3c', marginTop: 6, fontSize: '0.85rem' }}>{errors.cardNumber}</p>}

            <div style={{ marginTop: 16, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {cardIcons.map(icon => (
                <img key={icon.alt} src={icon.src} alt={icon.alt} style={{ height: 36, filter: 'grayscale(100%)', opacity: 0.6, transition: 'filter 0.3s ease' }} />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="cvv" style={{ display: 'block', fontWeight: '600', marginBottom: 6, fontSize: '1.15rem', color: '#6c3483' }}>
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="•••"
                aria-invalid={errors.cvv ? 'true' : 'false'}
                aria-describedby="cvv-error"
                style={{
                  width: '100%',
                  padding: 16,
                  borderRadius: 12,
                  border: errors.cvv ? '2px solid #e74c3c' : '1.5px solid #b39ddb',
                  fontSize: 18,
                  letterSpacing: 5,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: errors.cvv ? '0 0 8px #e74c3c' : 'inset 0 1px 3px rgba(0,0,0,0.1)',
                }}
                maxLength={4}
                inputMode="numeric"
                autoComplete="cc-csc"
                onFocus={e => {
                  e.currentTarget.style.borderColor = '#7d3c98';
                  e.currentTarget.style.boxShadow = '0 0 8px #9b59b6';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = errors.cvv ? '#e74c3c' : '#b39ddb';
                  e.currentTarget.style.boxShadow = errors.cvv ? '0 0 8px #e74c3c' : 'inset 0 1px 3px rgba(0,0,0,0.1)';
                }}
              />
              {errors.cvv && <p id="cvv-error" style={{ color: '#e74c3c', marginTop: 6, fontSize: '0.9rem' }}>{errors.cvv}</p>}
            </div>

            <div style={{ flex: 1 }}>
              <label htmlFor="expiryMonth" style={{ display: 'block', fontWeight: '600', marginBottom: 6, fontSize: '1.1rem', color: '#555' }}>
                Valid until
              </label>
              <div style={{ display: 'flex', gap: 16 }}>
                <select
                  id="expiryMonth"
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  aria-invalid={errors.expiryMonth ? 'true' : 'false'}
                  aria-describedby="expiryMonth-error"
                  style={{
                    flex: 1,
                    padding: 14,
                    borderRadius: 10,
                    border: errors.expiryMonth ? '2px solid #e74c3c' : '1px solid #ccc',
                    fontSize: 18,
                    transition: 'border-color 0.3s ease',
                  }}
                  required
                  onFocus={e => e.currentTarget.style.borderColor = '#764ba2'}
                  onBlur={e => e.currentTarget.style.borderColor = errors.expiryMonth ? '#e74c3c' : '#ccc'}
                >
                  {months.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>

                <select
                  id="expiryYear"
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  aria-invalid={errors.expiryYear ? 'true' : 'false'}
                  aria-describedby="expiryYear-error"
                  style={{
                    flex: 1,
                    padding: 14,
                    borderRadius: 10,
                    border: errors.expiryYear ? '2px solid #e74c3c' : '1px solid #ccc',
                    fontSize: 18,
                    transition: 'border-color 0.3s ease',
                  }}
                  required
                  onFocus={e => e.currentTarget.style.borderColor = '#764ba2'}
                  onBlur={e => e.currentTarget.style.borderColor = errors.expiryYear ? '#e74c3c' : '#ccc'}
                >
                  <option value="">Year</option>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              {errors.expiryMonth && <p id="expiryMonth-error" style={{ color: '#e74c3c', marginTop: 6, fontSize: '0.85rem' }}>{errors.expiryMonth}</p>}
              {errors.expiryYear && <p id="expiryYear-error" style={{ color: '#e74c3c', marginTop: 6, fontSize: '0.85rem' }}>{errors.expiryYear}</p>}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, marginBottom: 0 }}>
            <button
              type="button"
              onClick={handleCancel}
              style={{
                backgroundColor: '#c0392b',
                color: 'white',
                border: 'none',
                borderRadius: 12,
                padding: '14px 38px',
                fontSize: 18,
                cursor: 'pointer',
                boxShadow: '0 6px 14px rgba(192,57,43,0.6)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#e74c3c';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(231,76,60,0.8)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#c0392b';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(192,57,43,0.6)';
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: 12,
                padding: '14px 38px',
                fontSize: 18,
                cursor: 'pointer',
                boxShadow: '0 6px 14px rgba(39,174,96,0.6)',
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#2ecc71';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(46,204,113,0.8)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#27ae60';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(39,174,96,0.6)';
              }}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};

export default PaymentMethod;
