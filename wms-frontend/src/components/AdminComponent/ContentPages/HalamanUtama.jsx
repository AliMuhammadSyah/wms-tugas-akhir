import { Box, Typography, Grid } from '@mui/material';
import { Category, Label, Straighten, Group } from '@mui/icons-material';

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
            
          .box {
            background-color: #323ca8;
            background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
            padding: 20px;
            border: 1px solid #323ca8;
            border-radius: 8px;
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .box2 {
            background-color: #32a852;
            background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
            padding: 20px;
            border: 1px solid #32a852;
            border-radius: 8px;
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .box3 {
            background-color: #cf1329;
            background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
            padding: 20px;
            border: 1px solid #cf1329;
            border-radius: 8px;
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
          .box4 {
            background-color: #eded11;
            background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
            padding: 20px;
            border: 1px solid #eded11;
            border-radius: 8px;
            width: 200px;
            height: 100px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
      
      <h1 className="text-2xl mb-6 font-semibold tracking-wider">
        Halaman Utama 
      </h1>
      <Grid container spacing={2} justifyContent="center">
        {/* Box 1 */}
        <Grid item>
          <Box className="box">
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
          <Box className="box2">
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
          <Box className="box3">
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
          <Box className="box4">
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
