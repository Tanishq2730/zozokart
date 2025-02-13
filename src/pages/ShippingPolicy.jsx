import React from 'react';
import Preloader from '../helper/ColorInit'

import ScrollToTop from 'react-scroll-to-top'
import HeaderOne from '../components/HeaderOne'

import ColorInit from '../helper/ColorInit'
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';

const ShippingPolicy = () => {
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
                        Shipping & Delivery Policy
                    </h4>
                </div>
            </section>

            <div className='container mb-30'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-30'>
                            Welcome to Grace of Cows (“we,” “our,” or “us”). This Shipping & Delivery Policy outlines the terms and conditions for shipping and delivering products purchased through our website https://graceofcows.in/ (the “Site”). By placing an order with us, you agree to the following terms.

                        </p>
                        <h3 className='mt-10 text-22 mb-0'>1. Shipping Areas</h3>
                        <p>We currently ship products within INDIA and select international locations. For international orders, please contact us at support@graceofcows.in to confirm shipping availability and rates.

                        </p>


                        <h3 className='mt-10 text-22 mb-0'>2. Shipping Methods and Delivery Times</h3>
                        <p>Shipping Methods: We offer various shipping methods, including standard, expedited, and express delivery. The available shipping methods will be presented at checkout based on your delivery address. Delivery Times: Delivery times vary depending on the shipping method selected and the destination. Estimated delivery times are provided during checkout and are based on the information available from our shipping partners. Please note that these are estimated times and not guaranteed. Processing Time: Orders are processed within [insert number] business days. Orders placed on weekends or holidays will be processed on the next business day.

                        </p>


                        <h3 className='mt-10 text-22 mb-0'>3. Shipping Costs</h3>
                        <p>Once your order has been shipped, you will receive a shipping confirmation email with a tracking number and a link to track your shipment. You can use this tracking number to monitor the status of your delivery.



                        </p>


                        <h3 className='mt-10 text-22 mb-0'>4. Order Tracking</h3>
                        <p>
                            Once your order has been shipped, you will receive a shipping confirmation email with a tracking number and a link to track your shipment. You can use this tracking number to monitor the status of your delivery.

                        </p>

                        <h3 className='mt-10 text-22 mb-0'>5. Delivery Issues</h3>
                        <p>
                            If you experience any issues with your delivery, such as a lost or damaged package, please contact our customer service team at info@graceofcows.in. We will work with our shipping partners to resolve the issue and ensure you receive your order.

                        </p>
                        <p>
                            <strong>Cookies:</strong> You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use certain features of our Site.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>6. Address Accuracy</h3>
                        <p>
                            Please ensure that you provide accurate and complete shipping information when placing your order. We are not responsible for delays or delivery issues caused by incorrect or incomplete addresses. If you need to update your shipping address, please contact us as soon as possible.

                        </p>


                        <h3 className='mt-10 text-22 mb-0'>7. International Shipping</h3>
                        <p>
                            For international orders, you may be subject to customs duties, taxes, and other charges imposed by the destination country. These additional charges are the responsibility of the customer and are not included in the shipping cost. Please check with your local customs office for more information.


                        </p>


                        <h3 className='mt-10 text-22 mb-0'>8. Shipping Restrictions</h3>
                        <p>
                            Certain products may have shipping restrictions due to their nature or regulatory requirements. If a product in your order is subject to such restrictions, we will notify you and may provide alternative options or cancel the affected items from your order.


                        </p>

                        <h3 className='mt-10 text-22 mb-0'>9. Return Shipping</h3>
                        <p>
                            If you need to return an item, please refer to our Returns Policy for instructions on how to return products and information on return shipping costs.



                        </p>

                        <h3 className='mt-10 text-22 mb-0'>10. Contact Us</h3>
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

export default ShippingPolicy;
