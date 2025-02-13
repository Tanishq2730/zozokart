import React, { useState } from 'react';

const AccountDetail = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className='container mt-4'>
            <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <div className='col-md-6'>
                        <label className='form-label'>First name <span className="text-danger">*</span></label>
                        <input
                            type='text'
                            className='form-control'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Last name <span className="text-danger">*</span></label>
                        <input
                            type='text'
                            className='form-control'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Display name <span className="text-danger">*</span></label>
                    <input
                        type='text'
                        className='form-control'
                        name='displayName'
                        value={formData.displayName}
                        onChange={handleChange}
                        required
                    />
                    <small className="form-text text-muted">
                        This will be how your name will be displayed in the account section and in reviews.
                    </small>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Email address <span className="text-danger">*</span></label>
                    <input
                        type='email'
                        className='form-control'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className='mt-20'>
                    <h5>Password change</h5>
                    <div className='mb-3'>
                        <label className='form-label'>
                            Current password (leave blank to leave unchanged)
                        </label>
                        <input
                            type='password'
                            className='form-control'
                            name='currentPassword'
                            value={formData.currentPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>New password (leave blank to leave unchanged)</label>
                        <input
                            type='password'
                            className='form-control'
                            name='newPassword'
                            value={formData.newPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Confirm new password</label>
                        <input
                            type='password'
                            className='form-control'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button type='submit' className='btn btn-success'>
                    SAVE CHANGES
                </button>
            </form>
        </div>
    );
};

export default AccountDetail;
