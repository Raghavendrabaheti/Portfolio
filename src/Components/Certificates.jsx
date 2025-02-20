import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Manually import each certificate
import certificate1 from '../assets/Certificates/CSS.png';
import certificate2 from '../assets/Certificates/js.png';
import certificate3 from '../assets/Certificates/MYSQL.png';
import certificate4  from '../assets/Certificates/Mernstack.jpg';
import certificate5 from '../assets/Certificates/ndr.jpeg';
import certificate6 from '../assets/Certificates/sql2.jpg';
import certificate7 from '../assets/Certificates/cybersecurity.jpg';
// import certificate3 from '../assets/certificates/certificate3.pdf';

const certificatesData = [
  { name: 'certificate1.png', url: certificate1, type: 'image' },
  { name: 'certificate2.png', url: certificate2, type: 'image' },
  { name: 'certificate3.png', url: certificate3, type: 'image' },
  { name: 'certificate4.jpg', url: certificate4, type: 'image' },
  { name: 'certificate5.jpeg', url: certificate5, type: 'image' },
  { name: 'certificate6.jpg', url: certificate6, type: 'image' },
  { name: 'certificate7.jpg', url: certificate7, type: 'image' },
  // { name: 'certificate3.pdf', url: certificate3, type: 'pdf' }
];

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setCertificates(certificatesData);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      setError('Error fetching certificates');
    }
  }, []);

  return (
    <section id="certificates" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-blue-500 mb-4 text-center">My Certificates</h2>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {certificates.map((certificate, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href={certificate.url} target="_blank" rel="noopener noreferrer">
                  {certificate.type === 'image' ? (
                    <CardMedia
                      component="img"
                      height="140"
                      image={certificate.url}
                      alt={certificate.name}
                    />
                  ) : (
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="text-center">
                        {certificate.name}
                      </Typography>
                    </CardContent>
                  )}
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} className="text-center">
                      {certificate.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </section>
  );
};

export default Certificates;