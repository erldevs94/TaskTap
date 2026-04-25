import * as React from 'react';
import { Paper, Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import {
    HomeOutlined,
    BuildOutlined,
    SettingsOutlined,
} from '@mui/icons-material';

export function BottomNav() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <>
            <CssBaseline />
            {isMobile && <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        activeProps={{
          style: {
            backgroundColor: '#f0f7ff',
            color: '#0066ff',
          },
        }}
                    >
                        <BottomNavigationActionLink label="Home" icon={<HomeOutlined />} />
                        <BottomNavigationActionLink label="About" icon={<BuildOutlined />} />
                        <BottomNavigationActionLink label="Settings" icon={<SettingsOutlined />} />
                    </BottomNavigation>
                </Paper>
            </Box>}
        </>
    );
}

function BottomNavigationActionLink({ label, icon }: { label: string, icon: React.ReactNode }) {
    return (
        <BottomNavigationAction component="button" label={label} icon={icon} />
    )
}


