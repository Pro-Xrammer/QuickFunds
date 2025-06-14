import React from 'react';
import Comp from './Comp';

import image from '../../images/image5.png';
import images from '../../images/Left_hand.png';
import imagess from '../../images/Card.png';
import imagesss from '../../images/Speech_bubble.png';

const Work = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      {/* Header */}
      <div className="text-center mb-16 animate-fadeUp">
        <h2 className="text-[#2a3436] text-3xl md:text-4xl font-bold mb-4">How we work?</h2>
        <p className="text-[18px] text-[#4a4a4a] max-w-xl mx-auto">
          This is a process, how you can get a loan for yourself.
        </p>
      </div>

      {/* Steps */}
      <Comp
        booloperater={true}
        heading="Application"
        para="The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan."
        image={image}
      />
      <Comp
        booloperater={false}
        heading="Documentation and Verification"
        para="The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan."
        image={images}
      />
      <Comp
        booloperater={true}
        heading="Credit Assessment"
        para="The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors."
        image={imagess}
      />
      <Comp
        booloperater={false}
        heading="Loan Approval"
        para="If the borrower meets the bank's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees."
        image={imagesss}
      />
    </section>
  );
};

export default Work;
