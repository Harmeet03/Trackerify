export default function TermsAndConditions() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold font-mono mb-2">
        Terms & Conditions
      </h1>

      <p className="text-foreground/60 mb-10">
        Last Updated: July 2026
      </p>

      <div className="space-y-8 leading-7">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            1. Acceptance of Terms
          </h2>

          <p className="text-foreground/80">
            By accessing or using this Personal Finance Tracker, you agree to
            comply with and be bound by these Terms & Conditions. If you do not
            agree with any part of these terms, please discontinue using the
            application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. Purpose of the Application
          </h2>

          <p className="text-foreground/80">
            This application is intended solely as a personal finance management
            tool. It allows users to record income and expenses, visualize
            spending patterns, and monitor savings.
          </p>

          <p className="text-foreground/80 mt-3">
            The application is provided for informational and organizational
            purposes only and should not be considered financial, investment,
            tax, or legal advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. User Responsibility
          </h2>

          <p className="text-foreground/80">
            You are solely responsible for:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-foreground/80">
            <li>Entering accurate financial information.</li>
            <li>Maintaining backups of important financial records.</li>
            <li>Protecting access to your device and browser.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. Data Storage
          </h2>

          <p className="text-foreground/80">
            All application data is stored locally in your browser using Local
            Storage. No financial information is uploaded to external servers.
          </p>

          <p className="text-foreground/80 mt-3">
            If your browser data or Local Storage is cleared, your information
            will be permanently removed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            5. No Warranty
          </h2>

          <p className="text-foreground/80">
            This application is provided "as is" without warranties of any kind,
            either express or implied. We do not guarantee uninterrupted
            availability, accuracy, reliability, or error-free operation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            6. Limitation of Liability
          </h2>

          <p className="text-foreground/80">
            The developer shall not be liable for any direct, indirect,
            incidental, consequential, or financial losses arising from the use
            of this application, including but not limited to data loss,
            incorrect calculations, or browser-related issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            7. Third-Party Libraries
          </h2>

          <p className="text-foreground/80">
            This application may use third-party open-source libraries for
            interface components, icons, and charts. Their respective licenses
            remain the property of their owners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            8. Intellectual Property
          </h2>

          <p className="text-foreground/80">
            Unless otherwise stated, the application's design, source code,
            branding, and original content are the intellectual property of the
            developer and may not be copied, redistributed, or modified without
            permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            9. Updates
          </h2>

          <p className="text-foreground/80">
            Features, functionality, and these Terms & Conditions may be updated
            at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            10. Termination of Use
          </h2>

          <p className="text-foreground/80">
            You may stop using the application at any time. Since all data is
            stored locally, uninstalling the application or clearing browser
            storage will permanently remove your financial records.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            11. Governing Law
          </h2>

          <p className="text-foreground/80">
            These Terms & Conditions shall be governed by and interpreted in
            accordance with the applicable laws of your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            12. Contact
          </h2>

          <p className="text-foreground/80">
            If you have any questions regarding these Terms & Conditions, please
            contact the developer through the project's GitHub repository or any
            contact information provided with the application.
          </p>
        </section>
      </div>
    </main>
  );
}