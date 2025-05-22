import React from 'react';
import Preloader from '../helper/ColorInit'

import ScrollToTop from 'react-scroll-to-top'
import HeaderOne from '../components/HeaderOne'
import CommonCategoryHeader from '../components/commonCategoryHeader'
import ColorInit from '../helper/ColorInit'
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';

const RefundPolicy = () => {
    return (
        <>

            {/* Preloader */}
            <Preloader />

            {/* ScrollToTop */}
            <ScrollToTop smooth color="#299E60" />

            {/* ColorInit */}
            <ColorInit color={false} />

            {/* HeaderOne */}
            <HeaderOne />
            <CommonCategoryHeader/>

            <section className='py-40' style={{ backgroundImage: 'url(assets/images/common/web-banner.jpg)', backgroundSize: 'cover', }}>
                <div className='container'>
                    <h4 className='text-white'>
                        Refund & Cancellation Policy

                    </h4>
                </div>
            </section>

            <div className='container mb-30'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-30'>
                            Welcome to Grace of Cows (“we,” “our,” or “us”). This Refund & Cancellation Policy outlines the terms and conditions for refunds and cancellations for products purchased through our website https://graceofcows.in/ (the “Site”). By placing an order with us, you agree to the following terms.

                        </p>
                        <h3 className='mt-10 text-22 mb-0'>1. Order Cancellation</h3>

                        <p>Cancellation Window: You may cancel your order within 12 hours of placing it. To request a cancellation, please contact us at support@graceofcows.in as soon as possible.

                        </p>

                        <p>Cancellation After Processing: Once an order is processed or shipped, it cannot be cancelled. If you wish to return a product after shipment, please refer to our Returns Policy.

                        </p>


                        <h3 className='mt-10 text-22 mb-0'>2. Refunds</h3>
                        <ul>
                            <li>Refund Eligibility: To be eligible for a refund, the following conditions must be met:

                            </li>
                            <li>The product must be returned in its original condition, unused, and in the original packaging.

                            </li>
                            <li>The return request must be made within +91 9371299955 days from the date of delivery.

                            </li>
                            <li>Non-Refundable Items: Certain items are not eligible for refunds, including but not limited to:



                            </li>

                            <li>Perishable goods (e.g., milk, ghee)


                            </li>

                            <li>Custom or personalized products



                            </li>

                            <li>Items marked as final sale



                            </li>
                        </ul>

                        <p>
                            Refund Process: Once we receive and inspect your returned item, we will process your refund within +91 9371299955 days. Refunds will be issued to the original payment method used for the purchase.


                        </p>

                        <p>
                            Refund Amount: The refund amount will be the purchase price of the product minus any applicable shipping costs if the return was not due to our error.



                        </p>

                        <h3 className='mt-10 text-22 mb-0'>3. Exchanges</h3>
                        <p>Exchange Policy: If you prefer to exchange a product rather than receiving a refund, please contact us within [insert number] days of receiving your order. We will do our best to accommodate your exchange request based on product availability.

                        </p>


                        <h3 className='mt-10 text-22 mb-0'>4. Damaged or Defective Items</h3>
                        <p>
                            Reporting Issues: If you receive a damaged or defective item, please contact us immediately at info@graceofcows.in. We will arrange for a replacement or refund, including return shipping costs if applicable.

                        </p>

                        <h3 className='mt-10 text-22 mb-0'>5. Refunds for Late or Missing Orders</h3>
                        <p>
                            Shipping Delays: Refunds for orders delayed beyond the estimated delivery time will not be processed unless the delay is due to our error or negligence.


                        </p>
                        <p>
                            Missing Orders: If your order does not arrive within the expected delivery time, please contact us at info@graceofcows.in so we can investigate and resolve the issue.

                        </p>

                        <h3 className='mt-10 text-22 mb-0'>6. Return Shipping Costs</h3>
                        <p>
                            Customer Responsibility: The cost of return shipping is the responsibility of the customer unless the return is due to a defect or error on our part.

                        </p>

                        <p>
                            Prepaid Return Label: For defective or incorrect items, we will provide a prepaid return shipping label.


                        </p>


                        <h3 className='mt-10 text-22 mb-0'>7. Policy Changes</h3>
                        <p>
                            We may update this Refund & Cancellation Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about our refund and cancellation practices.

                        </p>


                        <h3 className='mt-10 text-22 mb-0'>8. Contact Us</h3>
                        <p>
                            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
                        </p>

                        <p>
                            Grace of Cows
                        </p>
                        <p>
                            Email: support@graceofcows.in
                        </p>
                        <p>
                            Address: Shop No 2, Avishkar Regency, Next to Mankar Dosa, Opp to CRU Mall, Gangadham, Marketyard – Pune 411037
                        </p>
                        <p>
                            Feel free to adjust any sections to better fit your specific needs or legal requirements.
                        </p>
                    </div>
                </div>
            </div>
            {/* FooterOne */}
            <FooterOne />

            {/* BottomFooter */}
            <BottomFooter />
        </>
    );
};

export default RefundPolicy;
