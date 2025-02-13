import React from 'react';
import Preloader from '../helper/ColorInit';
import ScrollToTop from 'react-scroll-to-top';
import HeaderOne from '../components/HeaderOne';
import ColorInit from '../helper/ColorInit';
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';

const ReturnsPolicy = () => {
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

            <section className='py-40' style={{ backgroundImage: 'url(assets/images/common/web-banner.jpg)', backgroundSize: 'cover', }}>
                <div className='container'>
                    <h4 className='text-white'>
                        Returns Policy
                    </h4>
                </div>
            </section>

            <div className='container mb-30'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-30'>
                            Grace of Cows ("we", "our", or "us") is committed to ensuring your satisfaction with our products. If you are not completely satisfied with your purchase, please review our Returns Policy below.
                        </p>
                        
                        <h3 className='mt-10 text-22 mb-0'>1. Return Eligibility</h3>
                        <p>To be eligible for a return, the following conditions must be met:</p>
                        <ul>
                            <li>Product Condition: The product must be unused, in its original packaging, and in the same condition as when you received it.</li>
                            <li>Return Window: Requests for returns must be made within 2 days from the date of delivery.</li>
                            <li>Proof of Purchase: You must provide a receipt or proof of purchase to process your return.</li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>2. Non-Returnable Items</h3>
                        <p>Certain items are not eligible for return, including:</p>
                        <ul>
                            <li>Perishable goods (e.g., milk, ghee).</li>
                            <li>Custom or personalized products.</li>
                            <li>Items marked as final sale.</li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>3. How to Initiate a Return</h3>
                        <p>To initiate a return, please follow these steps:</p>
                        <ul>
                            <li>Contact Us: Reach out to our customer service team at info@graceofcows.in with your order number and reason for return.</li>
                            <li>Receive Return Authorization: We will provide you with a return authorization and instructions for returning the item.</li>
                            <li>Return the Item: Pack the item securely and return it to the address provided by our customer service team. The item must be shipped within [Insert number] days of receiving the return authorization.</li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>4. Return Shipping Costs</h3>
                        <ul>
                            <li>Customer Responsibility: The cost of return shipping is the responsibility of the customer unless the return is due to a defect or error on our part.</li>
                            <li>Prepaid Label: If applicable, we will provide a prepaid return shipping label for defective or incorrect items.</li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>5. Refund Process</h3>
                        <p>
                            Once we receive and inspect your returned item, we will process your refund within 7 days. Refunds will be issued to the original payment method used for the purchase.
                        </p>
                        <p>
                            Refund Amount: The refund amount will be the purchase price of the product minus any applicable shipping costs, if the return was not due to our error.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>6. Damaged or Defective Items</h3>
                        <p>
                            If you receive a damaged or defective item, please contact us immediately at support@graceofcows.in. We will arrange for a replacement or refund, including return shipping costs for the damaged or defective item.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>7. Contact Us</h3>
                        <p>
                           For any questions or concerns regarding our Returns Policy, please contact our customer service team:
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


                        <h3 className='mt-10 text-22 mb-0'>8. Policy Changes</h3>
                        <p>
                           We may update this Returns Policy from time to time. Changes will be posted on this page with 
                           an updated effective date. We encourage you to review this policy periodically to stay informed 
                           about our return practices.
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

export default ReturnsPolicy;
