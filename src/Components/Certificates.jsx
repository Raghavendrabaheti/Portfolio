import React, { useState, useEffect } from 'react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Raghavendrabaheti/Certificates/Components/certificates')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        try {
          const certificateList = JSON.parse(atob(data.content));
          setCertificates(certificateList);
        } catch (e) {
          setError('Error decoding certificate data');
        }
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
            <li key={index}>✅ {certificate}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Certificates;