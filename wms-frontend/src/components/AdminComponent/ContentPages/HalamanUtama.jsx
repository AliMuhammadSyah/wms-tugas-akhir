import { Box, Typography, Grid } from '@mui/material';
import { Category, Label, Straighten, Group } from '@mui/icons-material';

const HalamanUtama = () => {
  return (
    <div className="container" style={{ padding: '20px' }}>
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
        {/* Box 1 */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#323ca8',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")', // Pattern URL
              p: 2,
              border: 1,
              borderColor: '#323ca8',
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
              <Group fontSize="large" sx={{ color: 'white', fontSize: 40 }} />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Pemilik
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              12
            </Typography>
          </Box>
        </Grid>
        {/* Box 2 */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#32a852',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
              p: 2,
              border: 1,
              borderColor: '#32a852',
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
              <Category fontSize="large" sx={{ color: 'white', fontSize: 40 }} />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Jenis Bahan
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              8
            </Typography>
          </Box>
        </Grid>
        {/* Box 3 */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#cf1329',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
              p: 2,
              border: 1,
              borderColor: '#cf1329',
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
              <Label fontSize="large" sx={{ color: 'white', fontSize: 40 }} />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Nama Bahan
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              15
            </Typography>
          </Box>
        </Grid>
        {/* Box 4 */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: '#eded11',
              backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
              p: 2,
              border: 1,
              borderColor: '#eded11',
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
              <Straighten fontSize="large" sx={{ color: 'white', fontSize: 40 }} />
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                Satuan Bahan
              </Typography>
            </Box>
            <Typography variant="h6" fontWeight="bold" color="white">
              5
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HalamanUtama;
