import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const certificatesData = [
  { name: 'certificate1.png', type: 'image' },
  { name: 'certificate2.jpeg', type: 'image' },
  { name: 'certificate3.pdf', type: 'pdf' }
];

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const certificateList = certificatesData.map(file => ({
        name: file.name,
        url: `../assets/Certificates/${file.name}`,
        type: file.type
      }));
      setCertificates(certificateList);
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