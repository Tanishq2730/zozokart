import React from 'react';
import Preloader from '../helper/ColorInit';
import ScrollToTop from 'react-scroll-to-top';
import HeaderOne from '../components/HeaderOne';
import ColorInit from '../helper/ColorInit';
import FooterOne from '../components/FooterOne';
import BottomFooter from '../components/BottomFooter';
import CommonCategoryHeader from '../components/commonCategoryHeader';
const TermsConditions = () => {
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
                        Terms & Conditions
                    </h4>
                </div>
            </section>

            <div className='container mb-30'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='mt-30 text-22 mb-0'>1. Acceptance of Terms</h3>
                        <p>By using this Site, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use the Site.</p>

                        <h3 className='mt-10 text-22 mb-0'>2. Changes to Terms</h3>
                        <p>We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Site after changes have been made constitutes acceptance of the revised terms.</p>

                        <h3 className='mt-10 text-22 mb-0'>3. Use of the Site</h3>
                        <p>
                            <strong>Eligibility:</strong> You must be at least 18 years old to use this Site. By using this Site, you represent and warrant that you meet this requirement.
                        </p>
                        <p>
                            <strong>Account Responsibility:</strong> If you create an account, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                        </p>
                        <p>
                            <strong>Prohibited Activities:</strong> You agree not to use the Site for any unlawful purposes or in any way that could damage, disable, overburden, or impair the Site. Prohibited activities include but are not limited to attempting to gain unauthorized access to the Site, transmitting harmful or malicious code, and engaging in fraudulent or deceptive practices.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>4. Product Information</h3>
                        <p>
                            <strong>Accuracy:</strong> We make every effort to ensure that the information on the Site is secure and up-to-date. However, we do not warrant that product descriptions, pricing, or other content on the Site is complete, reliable, or error-free.
                        </p>
                        <p>
                            <strong>Availability:</strong> All products and services are subject to availability. We reserve the right to modify or discontinue any product or service without notice.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>5. Orders and Payments</h3>
                        <p>
                            <strong>Order Acceptance:</strong> All orders are subject to acceptance. We reserve the right to refuse or cancel any order at our discretion.
                        </p>
                        <p>
                            <strong>Payment Terms:</strong> Payment must be made in full at the time of purchase. We accept various payment methods as detailed on the Site. You agree to provide accurate and complete payment information.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>6. Intellectual Property</h3>
                        <p>
                            <strong>Ownership:</strong> All content on the Site, including text, graphics, logos, and images, is the property of Grace of Cows or its licensors and is protected by intellectual property laws.
                        </p>
                        <p>
                            <strong>Limited License:</strong> You may access and use the content on the Site for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
                        </p>

                        <h3 className='mt-10 text-22 mb-0'>7. Third-Party Links</h3>
                        <p>The Site may contain links to third-party websites. We are not responsible for the content or practices of these third-party sites. Your use of third-party websites is at your own risk, and we encourage you to review the terms and privacy policies of any third-party sites you visit.</p>


                        <h3 className='mt-10 text-22 mb-0'>8. Limitation of Liability</h3>
                        <p>To the fullest extent permitted by law, Grace of Cows and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Site, products, or services.</p>

                        <h3 className='mt-10 text-22 mb-0'>9. Indemnification</h3>
                        <p>
                            You agree to indemnify and hold harmless Grace of Cows and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of your use of the Site, your violation of these Terms and Conditions, or your infringement of any rights of another party.
                       </p>


                        <h3 className='mt-10 text-22 mb-0'>10. Governing Law</h3>
                        <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of [Insert Your State], without regard to its conflict of laws principles. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in [Insert Your City/State].</p>

                        

                        <h3 className='mt-10 text-22 mb-0'>11. Dispute Resolution</h3>
                        <p>Any disputes arising out of or relating to these Terms and Conditions or your use of the Site shall be resolved through binding arbitration in accordance with the rules of [Insert Arbitration Body]. The arbitration shall take place in [Insert Location]..</p>

                        <h3 className='mt-10 text-22 mb-0'>12. Contact Us</h3>
                        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                        <p>
                          If you have any questions or concerns about these Terms and Conditions, please contact us at: +919763003004
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

export default TermsConditions;
