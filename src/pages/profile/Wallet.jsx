import React, { useState } from 'react';

const Wallet = () => {
    const [amount, setAmount] = useState('');

    const handleAddAmount = (e) => {
        e.preventDefault();
        // Handle the amount addition logic here
        console.log(`Adding amount: ${amount}`);
        setAmount('');
    };

    return (
        <div className='container'>
            <div className='row'>
                {/* Wallet Amount Section */}
                <div className='col-md-6 '>
                    <div className='wallet-amount border p-20 bg-main-two-600'>
                        <h2 className='text-22 text-white'>Wallet Amount</h2>
                        <p className='amount-display text-18 text-white'> ₹ 500.00</p> {/* Replace with dynamic amount */}
                    </div>
                </div>

                {/* Add Amount Form Section */}
                <div className='col-md-6'>
                    <h2 className='text-22'>Add Amount to Wallet</h2>
                    <form onSubmit={handleAddAmount}>
                        <div className='mb-3'>
                            <label htmlFor='amountInput' className='form-label'>Amount</label>
                            <input
                                type='number'
                                className='form-control'
                                id='amountInput'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder='Please Add minimum 100 and above of 100'
                                required
                            />
                        </div>
                        <button type='submit' className='btn btn-success mt-20'>Add Amount</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Wallet;
