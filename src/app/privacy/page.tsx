import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Akash Ungarala',
  description: 'Privacy policy for Akash Ungarala personal portfolio website.',
};

export default function PrivacyPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 prose prose-neutral dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="lead">Last updated: January 2025</p>

        <h2>Overview</h2>
        <p>
          This privacy policy describes how this portfolio website collects, uses, and handles your
          information when you visit or interact with the site.
        </p>

        <h2>Information Collection</h2>
        <h3>Contact Form</h3>
        <p>
          When you use the contact form, I collect the information you provide, including your name,
          email address, and message content. This information is used solely to respond to your
          inquiry.
        </p>

        <h3>Analytics</h3>
        <p>
          This site may use Vercel Analytics to collect anonymous usage data, including page views
          and visitor counts. This data is used to understand how visitors interact with the site
          and improve the user experience. No personally identifiable information is collected
          through analytics.
        </p>

        <h2>Data Usage</h2>
        <p>The information collected is used for the following purposes:</p>
        <ul>
          <li>Responding to contact form submissions</li>
          <li>Improving website content and functionality</li>
          <li>Understanding site traffic and usage patterns</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          I do not sell, trade, or otherwise transfer your personal information to third parties.
          Contact form submissions are processed through secure email services and are not shared
          with any external parties.
        </p>

        <h2>Cookies</h2>
        <p>
          This site uses minimal cookies for essential functionality, such as remembering your theme
          preference (light/dark mode). No tracking cookies are used.
        </p>

        <h2>Third-Party Services</h2>
        <p>This site may use the following third-party services:</p>
        <ul>
          <li>
            <strong>Vercel</strong> - Hosting and analytics
          </li>
          <li>
            <strong>Resend</strong> - Email delivery for contact form
          </li>
        </ul>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to any personal data I hold about you</li>
          <li>Request correction or deletion of your personal data</li>
          <li>Opt out of any data collection</li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy or your personal data, please contact
          me at{' '}
          <a href="mailto:akash.ungarala@gmail.com" className="text-primary hover:underline">
            akash.ungarala@gmail.com
          </a>
          .
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          I may update this privacy policy from time to time. Any changes will be posted on this
          page with an updated revision date.
        </p>
      </div>
    </main>
  );
}
