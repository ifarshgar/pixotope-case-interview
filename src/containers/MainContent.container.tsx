import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PixotopeLogoIcon from 'Images/pixotope.svg';
import PixotopeBgIcon from 'Images/p5.webp';
import { SelectorContainer } from './Selector.container';

export const MainContentContainer = () => {
  return (
    <Stack direction={{ sm: 'column', md: 'row' }} className="main-content" width="100%">
      <Stack
        width={{ sm: '100%', md: '50%' }}
        pl={{ sm: 0, md: 10 }}
        pt={5}
        order={{ xs: 1, md: 1 }}
      >
        <Typography variant="h3" className="white banner">
          Pixotope Case Interview
        </Typography>
        <SelectorContainer />
      </Stack>

      <Stack width={{ sm: '100%', md: '50%' }} mt={4} order={{ xs: 2, md: 2 }}>
        <Stack className="logo-section">
          <img src={PixotopeLogoIcon} alt="encrypt" className="pixotope-logo" />
          <img src={PixotopeBgIcon} alt="encrypt" className="pixotope-icon" />
        </Stack>
      </Stack>
    </Stack>
  );
};
