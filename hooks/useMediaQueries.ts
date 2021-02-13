import { useMediaQuery } from 'react-responsive';

function useMediaQueries() {
  const isPhone = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1224 });
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1824 });
  const isPortrait = useMediaQuery({ orientation: 'portrait' });
  const isRetina = useMediaQuery({ minResolution: '2dppx' });

  return {
    isPhone,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isPortrait,
    isRetina,
  };
}

export default useMediaQueries;
