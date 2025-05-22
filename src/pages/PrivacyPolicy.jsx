import React from 'react';
import Preloader from '../helper/ColorInit'

import ScrollToTop from 'react-scroll-to-top'
import HeaderOne from '../components/HeaderOne'
import CommonCategoryHeader from '../components/commonCategoryHeader'
import ColorInit from '../helper/ColorInit'
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';

const PrivacyPolicy = () => {
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
            <section className='py-40' style={{ backgroundImage: 'url(assets/images/common/web-banner.jpg)', backgroundSize: 'cover',}}>
                 <div className='container'>
                      <h4 className='text-white'>
                          Privacy Policy
                      </h4>
                 </div>
            </section>

            <div className='container mb-30'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='mt-30'>
                            Grace of Cows ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://graceofcows.in/ (the "Site"). Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
                        </p>
                        <h3 className='mt-10 text-22 mb-0'>1. Information We Collect</h3>
                        <p>We may collect the following types of information from you:</p>
                        <ul>
                            <li>
                                <strong>Personal Information:</strong> When you place an order, sign up for our newsletter, or contact us, we may collect personal information such as your name, email address, phone number, and mailing address.
                            </li>
                            <li>
                                <strong>Payment Information:</strong> If you make a purchase, we may collect payment information such as credit card details or other financial information necessary to process transactions.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We collect information about how you use our Site, including IP address, browser type, operating system, and browsing behavior.
                            </li>
                            <li>
                                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us remember your preferences and understand how you interact with our Site.
                            </li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>2. How We Use Your Information</h3>
                        <p>We use the information we collect for various purposes, including:</p>
                        <ul>
                            <li>To process transactions: To fulfill orders and manage payments.</li>
                            <li>To communicate with you: To respond to your inquiries, send you updates, and provide customer support.</li>
                            <li>To improve our site: To analyze usage patterns and enhance the functionality and user experience of our Site.</li>
                            <li>To send promotional materials: To inform you about our products, services, and special offers, if you have opted in to receive such communications.</li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>3. How We Share Your Information</h3>
                        <p>We may share your information in the following circumstances:</p>
                        <ul>
                            <li>
                                <strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our Site, processing transactions, and performing other functions.
                            </li>
                            <li>
                                <strong>For Legal Reasons:</strong> We may disclose your information if required by law or to comply with legal processes, protect our rights and property, or enforce our policies.
                            </li>
                            <li>
                                <strong>In Connection with Business Transfers:</strong> If we are involved in a merger, acquisition, or other business transaction, we may transfer your information as part of that transaction.
                            </li>
                        </ul>

                        <h3 className='mt-10 text-22 mb-0'>4. Data Security</h3>
                        <p>
                            We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>5. Your Choices</h3>
                        <p>
                            <strong>Opt-Out:</strong> You can opt-out of receiving promotional emails by following the unsubscribe instructions in those emails. Please note that you may still receive administrative emails related to your account or transactions.
                        </p>
                        <p>
                            <strong>Cookies:</strong> You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use certain features of our Site.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>6. Links to Other Sites</h3>
                        <p>
                           Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>


                        <h3 className='mt-10 text-22 mb-0'>7. Changes to This Privacy Policy</h3>
                        <p>
                           We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
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

export default PrivacyPolicy;
