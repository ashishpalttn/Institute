import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularProgressIndicator() {
  return (
    <Box sx={{ justifyContent:'center', display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}