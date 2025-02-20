import React, { useState, useEffect } from 'react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Raghavendrabaheti/Certificates/main/certificates/certificates.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCertificates(data);
      })
      .catch(error => {
        console.error('Error fetching certificates:', error);
        setError('Error fetching certificates');
      });
  }, []);

  return (
    <section id="certificates" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-4">My Certificates</h2>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ul className="text-lg text-gray-300">
          {certificates.map((certificate, index) => (
            <li key={index} className="mb-2">
              {certificate.name.endsWith('.png') || certificate.name.endsWith('.jpeg') ? (
                <img src={certificate.url} alt={certificate.name} className="w-full h-auto mb-4" />
              ) : (
                <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                  {certificate.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Certificates;