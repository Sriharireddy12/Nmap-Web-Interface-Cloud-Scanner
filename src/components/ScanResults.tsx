import { Server, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ScanResultsProps {
  target: string;
}

const mockResults = {
  hosts: [
    { ip: '192.168.1.1', status: 'up', os: 'Linux 3.x/4.x', ports: 5 },
    { ip: '192.168.1.10', status: 'up', os: 'Windows 10', ports: 3 },
    { ip: '192.168.1.15', status: 'up', os: 'macOS', ports: 2 },
  ],
  openPorts: [
    { port: 22, service: 'SSH', state: 'open', protocol: 'TCP' },
    { port: 80, service: 'HTTP', state: 'open', protocol: 'TCP' },
    { port: 443, service: 'HTTPS', state: 'open', protocol: 'TCP' },
    { port: 3306, service: 'MySQL', state: 'open', protocol: 'TCP' },
    { port: 8080, service: 'HTTP-Proxy', state: 'open', protocol: 'TCP' },
  ],
  vulnerabilities: [
    { severity: 'high', description: 'Outdated SSH version detected', affected: 'Port 22' },
    { severity: 'medium', description: 'HTTP server header disclosure', affected: 'Port 80' },
    { severity: 'low', description: 'Missing security headers', affected: 'Port 443' },
  ],
};

export default function ScanResults({ target }: ScanResultsProps) {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700">
      <div className="p-8 space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Scan Results for {target}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {mockResults.hosts.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Hosts Discovered</div>
              </div>
              <Server className="w-10 h-10 text-green-600 dark:text-green-400 opacity-50" />
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {mockResults.openPorts.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Open Ports</div>
              </div>
              <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400 opacity-50" />
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {mockResults.vulnerabilities.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Findings</div>
              </div>
              <AlertTriangle className="w-10 h-10 text-orange-600 dark:text-orange-400 opacity-50" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Discovered Hosts</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    IP Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    OS Detection
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Open Ports
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockResults.hosts.map((host, index) => (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-900 dark:text-white">
                      {host.ip}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {host.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{host.os}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{host.ports}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Open Ports & Services</h4>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Port
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Protocol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    State
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockResults.openPorts.map((port, index) => (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono font-bold text-gray-900 dark:text-white">
                      {port.port}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{port.protocol}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{port.service}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {port.state}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Security Findings</h4>
          <div className="space-y-3">
            {mockResults.vulnerabilities.map((vuln, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  vuln.severity === 'high'
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    : vuln.severity === 'medium'
                    ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800'
                    : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <AlertTriangle
                    className={`w-5 h-5 mt-0.5 ${
                      vuln.severity === 'high'
                        ? 'text-red-600 dark:text-red-400'
                        : vuln.severity === 'medium'
                        ? 'text-orange-600 dark:text-orange-400'
                        : 'text-yellow-600 dark:text-yellow-400'
                    }`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-semibold uppercase ${
                          vuln.severity === 'high'
                            ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                            : vuln.severity === 'medium'
                            ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
                        }`}
                      >
                        {vuln.severity}
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {vuln.description}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Affected: {vuln.affected}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
