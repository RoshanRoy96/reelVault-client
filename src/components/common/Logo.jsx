import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      REEL<span style={{ color: theme.palette.primary.main }}>VAULT</span>
    </Typography>
  );
};

export default Logo;