
import React, { useState } from 'react';
import { FileText, Download, ExternalLink, X } from 'lucide-react';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const certifications = [
    {
      title: "Machine Learning Certification",
      issuer: "Stanford University",
      year: "2023",
      description: "Comprehensive ML algorithms and implementation",
      documentUrl: "/api/placeholder/800/600", // Sample certificate image
      documentType: "PDF",
      documentFormat: "pdf"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2023",
      description: "Neural networks and deep learning architectures",
      documentUrl: "/api/placeholder/800/600", // Sample certificate image
      documentType: "PDF",
      documentFormat: "pdf"
    },
    {
      title: "AWS Machine Learning",
      issuer: "Amazon Web Services",
      year: "2022",
      description: "Cloud-based ML solutions and deployment",
      documentUrl: "/api/placeholder/800/600", // Sample certificate image
      documentType: "JPG",
      documentFormat: "jpg"
    },
    {
      title: "TensorFlow Developer",
      issuer: "Google",
      year: "2022",
      description: "TensorFlow framework expertise and best practices",
      documentUrl: "/api/placeholder/800/600", // Sample certificate image
      documentType: "PDF",
      documentFormat: "pdf"
    }
  ];

  const handleCertificateView = (cert: any) => {
    setSelectedCertificate(cert);
  };

  const handleDownload = (cert: any) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = cert.documentUrl;
    link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.${cert.documentFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-400">Professional certifications and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2">{cert.issuer}</p>
                </div>
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {cert.year}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">{cert.documentType} Available</span>
                </div>
                
                <button
                  onClick={() => handleCertificateView(cert)}
                  className="group/btn flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500 hover:to-purple-500 px-4 py-2 rounded-lg transition-all duration-300 border border-cyan-500/30 hover:border-transparent"
                >
                  <span className="text-cyan-400 group-hover/btn:text-white transition-colors duration-300">View Certificate</span>
                  <ExternalLink className="w-4 h-4 text-cyan-400 group-hover/btn:text-white group-hover/btn:rotate-12 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 px-6 py-3 rounded-xl border border-gray-700/50 backdrop-blur-sm">
            <Download className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">Click on any certification to view or download</span>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/95 rounded-2xl border border-gray-700/50 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCertificate.title}</h3>
                <p className="text-gray-400">{selectedCertificate.issuer} - {selectedCertificate.year}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDownload(selectedCertificate)}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white p-2 rounded-lg transition-all duration-300"
                  title="Download Certificate"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">Sample Certificate</p>
                    <p className="text-gray-500 text-sm">{selectedCertificate.title}</p>
                    <p className="text-gray-500 text-sm">{selectedCertificate.issuer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
