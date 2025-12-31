import { useState } from 'react';
import { Play, Download, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import ScanResults from './ScanResults';

type ScanType = 'quick' | 'full' | 'custom';
type ScanStatus = 'idle' | 'scanning' | 'completed' | 'error';

export default function Dashboard() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState<ScanType>('quick');
  const [scanStatus, setScanStatus] = useState<ScanStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleStartScan = () => {
    if (!target) return;

    setScanStatus('scanning');
    setProgress(0);
    setShowResults(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanStatus('completed');
          setShowResults(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleExport = (format: 'pdf' | 'json') => {
    console.log(`Exporting as ${format}`);
  };

  return (
    <section id="dashboard" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Scan Dashboard
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Configure and execute authorized network scans
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Target IP / Domain
                </label>
                <input
                  type="text"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  placeholder="e.g., 192.168.1.1 or example.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  disabled={scanStatus === 'scanning'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Scan Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['quick', 'full', 'custom'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setScanType(type as ScanType)}
                      disabled={scanStatus === 'scanning'}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        scanType === type
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                      } ${scanStatus === 'scanning' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="font-semibold text-gray-900 dark:text-white capitalize mb-1">
                        {type} Scan
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {type === 'quick' && 'Fast port scan'}
                        {type === 'full' && 'Comprehensive scan'}
                        {type === 'custom' && 'Custom options'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {scanStatus === 'scanning' && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Loader className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Scanning in progress...
                      </span>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-bold">{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {scanStatus === 'completed' && (
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="font-semibold text-green-900 dark:text-green-100">
                      Scan completed successfully
                    </span>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleStartScan}
                  disabled={!target || scanStatus === 'scanning'}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
                >
                  <Play className="w-5 h-5" />
                  <span>Start Scan</span>
                </button>

                {scanStatus === 'completed' && (
                  <>
                    <button
                      onClick={() => handleExport('pdf')}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Export PDF</span>
                    </button>
                    <button
                      onClick={() => handleExport('json')}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Export JSON</span>
                    </button>
                  </>
                )}
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-900 dark:text-yellow-100">
                    <span className="font-semibold">Authorization Required:</span> Only scan networks and systems you have explicit permission to test.
                    Unauthorized scanning may be illegal and unethical.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showResults && <ScanResults target={target} />}
        </div>
      </div>
    </section>
  );
}
