import { Cloud, Activity, BarChart3, Network, FileText, Shield } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud-Based Scanning',
    description: 'Perform network scans from anywhere without local Nmap installation. Secure cloud infrastructure handles all processing.',
  },
  {
    icon: Activity,
    title: 'Real-Time Progress',
    description: 'Monitor scan progress with live updates, percentage completion, and real-time discovery of hosts and services.',
  },
  {
    icon: BarChart3,
    title: 'Interactive Charts',
    description: 'Visualize open ports, detected services, and OS fingerprints through dynamic charts and graphs.',
  },
  {
    icon: Network,
    title: 'Network Topology',
    description: 'Interactive network maps showing discovered hosts, their relationships, and security posture at a glance.',
  },
  {
    icon: FileText,
    title: 'Export Reports',
    description: 'Download comprehensive scan reports in multiple formats including PDF, JSON, and XML for compliance and documentation.',
  },
  {
    icon: Shield,
    title: 'Secure & Authorized',
    description: 'Built-in safeguards ensure scans are performed only on authorized targets with proper authentication and logging.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need for professional network reconnaissance and security assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
