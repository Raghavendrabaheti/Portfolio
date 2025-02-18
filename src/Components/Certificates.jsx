import React, { useState, useEffect } from 'react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Raghavendrabaheti/Certificates/contents/certificates.json')
      .then(response => response.json())
      .then(data => {
        const certificateList = JSON.parse(atob(data.content));
        setCertificates(certificateList);
      })
      .catch(error => console.error('Error fetching certificates:', error));
  }, []);

  return (
    <section id="certificates" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-4">My Certificates</h2>
      <ul className="text-lg text-gray-300">
        {certificates.map((certificate, index) => (
          <li key={index}>✅ {certificate}</li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;