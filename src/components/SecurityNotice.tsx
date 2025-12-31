import { ShieldAlert, Lock, FileCheck, Scale } from 'lucide-react';

export default function SecurityNotice() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-950 dark:to-gray-900 border-y border-red-200 dark:border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Security & Ethics Notice
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            This tool must be used responsibly and in accordance with all applicable laws and regulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Authorization Required
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Only perform scans on networks and systems where you have explicit written permission.
                  Unauthorized scanning may violate laws including the Computer Fraud and Abuse Act (CFAA)
                  and similar international regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Users are solely responsible for ensuring their scanning activities comply with all
                  applicable laws, regulations, and organizational policies. This includes obtaining proper
                  authorization and documenting consent.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Ethical Use
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This platform is designed for legitimate security assessment, penetration testing,
                  and network administration. Use it to improve security, not to compromise it. Respect
                  privacy and handle discovered vulnerabilities responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No Liability
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The developers and operators of this platform assume no liability for misuse or
                  unauthorized activities. By using this service, you agree to use it responsibly and
                  accept full responsibility for your actions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-100 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-800 rounded-xl p-6">
          <p className="text-center text-gray-900 dark:text-white font-semibold">
            By using this platform, you acknowledge that you have read, understood, and agree to comply with
            these security and ethical guidelines. Violations may result in legal consequences and immediate
            service termination.
          </p>
        </div>
      </div>
    </section>
  );
}
