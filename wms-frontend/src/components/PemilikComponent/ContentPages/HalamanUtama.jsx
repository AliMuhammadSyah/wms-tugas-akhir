import { Box, Typography, Grid } from '@mui/material';
import { Assignment, Inbox, Outbox } from '@mui/icons-material'; // Mengganti ikon sesuai permintaan

const HalamanUtama = () => {
  return (
    <div className="container">
      <style>
        {`
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fdfcfc;
          }
        `}
      </style>
      <h1 className="text-2xl mb-6 font-semibold tracking-wider">
        Halaman Utama
      </h1>
      <Grid container spacing={2} justifyContent="center">
        {/* Box 1 - Data Bahan */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#0808a3',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
              p: 2,
              border: 1,
              borderColor: '#0808a3',
              borderRadius: 2,
              width: 200,
              height: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              boxShadow: 5,
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Assignment fontSize="large" sx={{ color: 'white', fontSize: 40 }} /> {/* Mengganti ikon */}
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Data Bahan
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              12
            </Typography>
          </Box>
        </Grid>
        {/* Box 2 - Bahan Masuk */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#0f8731',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
              p: 2,
              border: 1,
              borderColor: '#0f8731',
              borderRadius: 2,
              width: 200,
              height: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              boxShadow: 5,
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Inbox fontSize="large" sx={{ color: 'white', fontSize: 40 }} /> {/* Mengganti ikon */}
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Bahan Masuk
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              8
            </Typography>
          </Box>
        </Grid>
        {/* Box 3 - Bahan Keluar */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#870f13',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
              p: 2,
              border: 1,
              borderColor: '#870f13',
              borderRadius: 2,
              width: 200,
              height: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              boxShadow: 5,
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Outbox fontSize="large" sx={{ color: 'white', fontSize: 40 }} /> {/* Mengganti ikon */}
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Bahan Keluar
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              15
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HalamanUtama;
