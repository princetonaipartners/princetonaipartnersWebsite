import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Princeton AI Partners',
  description:
    'Privacy policy for Princeton AI Partners. Learn how we collect, use, and protect your information.',
  openGraph: {
    title: 'Privacy Policy | Princeton AI Partners',
    description: 'Learn how we collect, use, and protect your information.',
    url: 'https://princeton-ai.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark-bg-primary py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-zinc-400 mb-8">Last updated: November 2024</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed">
              Princeton AI Partners (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, and other contact information you provide when filling out forms or contacting us.</li>
              <li><strong className="text-white">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
              <li><strong className="text-white">Device Data:</strong> Information about your device, browser type, IP address, and operating system.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
            <p className="text-zinc-400 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except to provide our services, comply with the law, or protect our rights. We may share information with trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="text-zinc-400 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
            <p className="text-zinc-400 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse cookies, but some features of our website may not function properly without them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
            <p className="text-zinc-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:hello@princeton-ai.com" className="text-brand-primary hover:underline">
                hello@princeton-ai.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
