import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Princeton AI Partners',
  description:
    'Terms of service for Princeton AI Partners. Read our terms and conditions for using our services.',
  openGraph: {
    title: 'Terms of Service | Princeton AI Partners',
    description: 'Read our terms and conditions for using our services.',
    url: 'https://princeton-ai.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark-bg-primary py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-zinc-400 mb-8">Last updated: November 2024</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              By accessing or using the services provided by Princeton AI Partners (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services</h2>
            <p className="text-zinc-400 leading-relaxed">
              Princeton AI Partners provides custom software development, AI systems, automation solutions, and related consulting services. The specific scope, deliverables, and terms of any project will be defined in a separate agreement or statement of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Client Responsibilities</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Provide accurate and complete information necessary for the project</li>
              <li>Respond to requests for information or approvals in a timely manner</li>
              <li>Make payments according to the agreed schedule</li>
              <li>Use our services only for lawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-zinc-400 leading-relaxed">
              Upon full payment, you will own the custom code and deliverables created specifically for your project. We retain ownership of any pre-existing tools, frameworks, or methodologies used in the development process. We may use general knowledge and skills gained during the project for other clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              Payment terms will be specified in your project agreement. Unless otherwise agreed, invoices are due within 30 days of receipt. Late payments may incur interest charges and may result in suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Confidentiality</h2>
            <p className="text-zinc-400 leading-relaxed">
              We will keep your confidential information secure and will not disclose it to third parties except as necessary to provide our services or as required by law. This obligation survives the termination of our business relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-zinc-400 leading-relaxed">
              To the maximum extent permitted by law, Princeton AI Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific services giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Warranty Disclaimer</h2>
            <p className="text-zinc-400 leading-relaxed">
              Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure. Specific warranties may be provided in your project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
            <p className="text-zinc-400 leading-relaxed">
              Either party may terminate services according to the terms specified in the project agreement. Upon termination, you will pay for all services rendered up to the termination date. We will provide you with any completed deliverables for which payment has been received.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
            <p className="text-zinc-400 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
            <p className="text-zinc-400 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact</h2>
            <p className="text-zinc-400 leading-relaxed">
              For questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:support@princetonaipartners.com" className="text-brand-primary hover:underline">
                support@princetonaipartners.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
