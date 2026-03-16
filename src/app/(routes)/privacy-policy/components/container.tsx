'use client';

import React from 'react';
import { Heading2, Heading3, Paragraph } from '@/components/utils/typography';
import { SectionContainer } from '@/components/utils';

export const PrivacyPolicy = () => {
  return (
    <SectionContainer className="space-y-6">
      <Heading2>Privacy Policy</Heading2>

      <Paragraph>
        At Ocean Nurture Network (ONN), we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard the data you provide, particularly your email address and related information.
      </Paragraph>

      <Heading3>1. Information We Collect</Heading3>

      <Paragraph>
        When you interact with our website or services, we may collect personal information such as:
      </Paragraph>
      <ul className="list-disc ml-6">
        <li>Your name and email address when you subscribe to our newsletters or register for updates.</li>
        <li>Additional details such as location, organization, or areas of interest when filling out forms.</li>
        <li>Technical information including IP address, browser type, and device used through analytics tools.</li>
      </ul>

      <Heading3>2. How We Use Your Data</Heading3>

      <Paragraph>
        The data we collect is used solely for the purpose of improving our services and communication. Specifically, we may use your information to:
      </Paragraph>
      <ul className="list-disc ml-6">
        <li>Send newsletters, updates, or event invitations.</li>
        <li>Respond to inquiries or requests made via our website.</li>
        <li>Improve website functionality and understand user behavior through analytics.</li>
      </ul>

      <Heading3>3. Sharing and Disclosure</Heading3>

      <Paragraph>
        ONN does not sell, trade, or rent your personal information to third parties. Your email and data may be shared only with trusted partners or service providers solely for the purpose of delivering ONN-related services, and under strict confidentiality agreements.
      </Paragraph>

      <Heading3>4. Data Security</Heading3>

      <Paragraph>
        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, misuse, or disclosure.
      </Paragraph>

      <Heading3>5. Your Rights</Heading3>

      <Paragraph>
        You have the right to access, correct, or request the deletion of your personal data at any time. To do so, contact us directly at our official email.
      </Paragraph>

      <Heading3>6. Consent and Updates</Heading3>

      <Paragraph>
        By providing your email or other personal data, you consent to the collection and use as described in this policy. We may update this policy occasionally and will notify you of significant changes via email or on our website.
      </Paragraph>

      <Paragraph>
        If you have any questions or concerns about this policy or your data, please contact us at privacy@oceannurture.org.
      </Paragraph>
    </SectionContainer>
  );
};


