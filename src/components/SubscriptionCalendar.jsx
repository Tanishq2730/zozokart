import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar's CSS

const SubscriptionCalendar = () => {
  const [frequency, setFrequency] = useState('daily'); // default frequency
  const [nthDay, setNthDay] = useState(1); // For every nth day selection
  const [startDate, setStartDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const [customDates, setCustomDates] = useState([]); // Store custom selected dates
  const [quantity, setQuantity] = useState({}); // Store quantity for each custom date

  const today = new Date(); // Get today's date for validation

  // Handle frequency change
  const handleFrequencyChange = (newFrequency) => {
    setFrequency(newFrequency);
    setCustomDates([]); // Reset custom dates on frequency change
    setQuantity({});
  };

  // Handle nth day input
  const handleNthDayChange = (e) => {
    setNthDay(parseInt(e.target.value));
  };

  // Handle custom date selection
  const handleDateClick = (date) => {
    const dateStr = date.toDateString();
    if (customDates.find(d => d === dateStr)) {
      // If date is already selected, remove it
      setCustomDates(customDates.filter(d => d !== dateStr));
      const updatedQuantity = { ...quantity };
      delete updatedQuantity[dateStr];
      setQuantity(updatedQuantity);
    } else {
      // Otherwise, add the selected date
      setCustomDates([...customDates, dateStr]);
      setQuantity({ ...quantity, [dateStr]: 1 }); // Default quantity of 1
    }
  };

  // Increment quantity for a specific date
  const incrementQuantity = (dateStr) => {
    setQuantity({ ...quantity, [dateStr]: quantity[dateStr] + 1 });
  };

  // Decrement quantity for a specific date
  const decrementQuantity = (dateStr) => {
    if (quantity[dateStr] > 1) {
      setQuantity({ ...quantity, [dateStr]: quantity[dateStr] - 1 });
    }
  };

  // Generate marked dates (non-custom)
  const generateMarkedDates = () => {
    const marked = [];
    const currentMonth = startDate.getMonth();
    const currentYear = startDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      let currentDate = new Date(currentYear, currentMonth, i);
      let addDate = false;

      switch (frequency) {
        case 'daily':
          addDate = true; // Mark every day
          break;
        case 'alternate':
          addDate = i % 2 === 0; // Mark every alternate day
          break;
        case 'nthDay':
          addDate = i % nthDay === 0; // Mark every nth day
          break;
        case 'dontDeliverNthDay':
          addDate = i % nthDay !== 0; // Mark every day except nth day
          break;
        case 'custom':
          // Custom logic: handled by user interaction (don't mark dates automatically)
          break;
        default:
          break;
      }

      if (addDate) {
        marked.push(currentDate);
      }
    }

    setMarkedDates(marked);
  };

  useEffect(() => {
    generateMarkedDates();
  }, [frequency, nthDay, startDate]);

  return (
    <div className="container container-lg">
      <div className="row gy-4">
        <div className="pt-0">
          <div className="plan-content">
            <div className='mb-10'>
              <h6 className='mb-0'>Subscription</h6>
              <ul className='d-flex'>
                <li className='me-auto'>
                  <label>Frequency</label>
                  <select
                    className='p-4 rounded-5 form-control'
                    style={{fontSize:'14px'}}
                    value={frequency}
                    onChange={(e) => handleFrequencyChange(e.target.value)}
                  >
                    <option value="daily">Daily</option>
                    <option value="alternate">Alternate</option>
                    <option value="nthDay">Every Nth Day</option>
                    <option value="dontDeliverNthDay">Don't Deliver Nth Day</option>
                    <option value="custom">Custom</option>
                  </select>
                </li>
                <li className='me-auto'>
                  <label>Start Date</label>
                  <input 
                    type="date" 
                    style={{fontSize:'14px'}}
                    className='p-4 rounded-5 form-control' 
                    value={startDate.toISOString().split('T')[0]} 
                    onChange={(e) => setStartDate(new Date(e.target.value))} 
                  />
                </li>
              </ul>
            </div>

            {(frequency === 'nthDay' || frequency === 'dontDeliverNthDay') && (
              <div>
                <label>Select Nth Day:</label>
                <input
                  type="number"
                  style={{fontSize:'14px'}}
                  value={nthDay}
                  onChange={handleNthDayChange}
                  className="rounded-3 form-control w-100 mb-10"
                />
              </div>
            )}

            {/* Show selected custom dates and quantity dropdowns */}
            {frequency === 'custom' && customDates.length > 0 && (
              <div className="mb-4">
                <h6>Selected Custom Dates:</h6>
                {customDates.map(dateStr => (
                  <div key={dateStr} className="d-flex align-items-center mb-3 justify-content-between">
                    <span style={{fontSize:'14px'}}>{dateStr}</span>
                    <div className="border border-gray-100 rounded-pill py-5 px-7 flex-align ms-3">
                      <button onClick={() => decrementQuantity(dateStr)}
                        type="button"
                        className="quantity__minus p-4 text-gray-700 hover-text-main-600 flex-center"
                      >
                        <i className="ph ph-minus" />
                      </button>
                      <input
                        type="number"
                        className="quantity__input border-0 text-center w-32"
                        value={quantity[dateStr]}
                        readOnly
                      />
                      <button onClick={() => incrementQuantity(dateStr)}
                        type="button"
                        className="quantity__plus p-4 text-gray-700 hover-text-main-600 flex-center"
                      >
                        <i className="ph ph-plus" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className='calendar-preview'>
              <Calendar
                className="wd-custom"
                value={startDate}
                tileClassName={({ date }) => {
                  const dateStr = date.toDateString();
                  if (frequency === 'custom') {
                    return customDates.includes(dateStr) ? 'highlighted-day' : '';
                  }
                  if (markedDates.find(d => d.toDateString() === dateStr)) {
                    return 'highlighted-day';
                  }
                  return '';
                }}
                tileDisabled={({ date }) => date < today} // Disable past dates
                onClickDay={(date) => frequency === 'custom' && handleDateClick(date)} // Only allow custom date selection
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCalendar;
