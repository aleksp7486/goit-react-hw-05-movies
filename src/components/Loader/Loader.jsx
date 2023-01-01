import { Grid } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Grid color="#ff5722" />
    </Box>
  );
};

export default Loader;
