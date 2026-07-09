export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-mono mb-2">
        Privacy Policy
      </h1>

      <p className="text-foreground/60 mb-10">
        Last Updated: July 2026
      </p>

      <div className="space-y-8 leading-7">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction
          </h2>

          <p className="text-foreground/80">
            Thank you for using our Personal Finance Tracker. Your privacy is
            important to us. This application is designed to help you manage
            your personal finances while keeping your data private.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. Information We Collect
          </h2>

          <p className="text-foreground/80">
            This application does <strong>not</strong> collect, store, or
            transmit any personal information to external servers.
          </p>

          <p className="text-foreground/80 mt-3">
            Any information you enter, including:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-foreground/80">
            <li>Income</li>
            <li>Expenses</li>
            <li>Categories</li>
            <li>Transaction history</li>
            <li>Financial summaries</li>
          </ul>

          <p className="text-foreground/80 mt-3">
            is stored locally within your browser using Local Storage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. How Your Data Is Used
          </h2>

          <p className="text-foreground/80">
            Your data is used only to:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-foreground/80">
            <li>Display your financial dashboard</li>
            <li>Track income and expenses</li>
            <li>Calculate savings and savings rate</li>
            <li>Generate charts and reports</li>
            <li>Provide transaction history</li>
          </ul>

          <p className="text-foreground/80 mt-3">
            All calculations are performed entirely within your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Local Storage
          </h2>

          <p className="text-foreground/80">
            All financial information is stored exclusively in your browser's
            Local Storage.
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-foreground/80">
            <li>Your data never leaves your device.</li>
            <li>We cannot view or access your information.</li>
            <li>We cannot recover deleted data.</li>
            <li>
              Clearing your browser data or Local Storage will permanently
              remove your transactions.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            5. Cookies
          </h2>

          <p className="text-foreground/80">
            This application does not use cookies for advertising, analytics,
            or tracking purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            6. Third-Party Libraries
          </h2>

          <p className="text-foreground/80">
            This application may use open-source libraries to provide user
            interface components and charts. These libraries do not collect,
            store, or transmit your financial information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            7. Data Security
          </h2>

          <p className="text-foreground/80">
            Since your information remains on your device, its security depends
            on your browser and device security. We recommend keeping your
            browser updated and avoiding storing sensitive financial data on
            shared or public computers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            8. Children's Privacy
          </h2>

          <p className="text-foreground/80">
            This application is not intended for children under the age of 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            9. Changes to This Policy
          </h2>

          <p className="text-foreground/80">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page along with the updated revision
            date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            10. Important Notice
          </h2>

          <p className="text-foreground/80">
            This application does not automatically back up your financial data.
            If you clear your browser data, uninstall your browser, or switch
            to another device, your stored transactions will be permanently
            lost unless you manually back them up.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            11. Contact
          </h2>

          <p className="text-foreground/80">
            If you have any questions regarding this Privacy Policy, please
            contact the developer through the project's GitHub repository or
            other contact information provided with the application.
          </p>
        </section>
      </div>
    </main>
  );
}