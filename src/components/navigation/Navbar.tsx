import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Typography,
  Divider
} from '@mui/material';
import { 
  Dashboard as DashboardIcon, 
  People as PeopleIcon, 
  Settings as SettingsIcon, 
  Analytics as AnalyticsIcon 
} from '@mui/icons-material';
import { Link } from '@tanstack/react-router';

const DRAWER_WIDTH = 240; 

const MENU_ITEMS = [
  { label: 'Dashboard', icon: <DashboardIcon />, to: '/dashboard' },
  { label: 'Users', icon: <PeopleIcon />, to: '/dashboard/users' },
  { label: 'Analytics', icon: <AnalyticsIcon />, to: '/dashboard/analytics' },
  { label: 'Settings', icon: <SettingsIcon />, to: '/dashboard/settings' },
];

export function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: DRAWER_WIDTH, 
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: '#f8f9fa' // Subtle background color
        },
      }}
    >
      {/* Branding Area */}
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          MY DASHBOARD
        </Typography>
      </Toolbar>
      
      <Divider />

      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List component="nav">
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'block', mb: 0.5 }}>
              {/* 
                The Link component from TanStack Router makes 
                this type-safe and handles the active state.
              */}
              <ListItemButton
                component={Link}
                to={item.to}
                // This applies styles automatically when the route matches
                activeProps={{
                  style: {
                    backgroundColor: 'rgba(25, 118, 210, 0.08)', // Theme primary with opacity
                    color: '#1976d2',
                    borderRight: '4px solid #1976d2'
                  }
                }}
                sx={{
                  minHeight: 48,
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    minWidth: 0, 
                    mr: 3, 
                    justifyContent: 'center',
                    color: 'inherit' // Inherits color from activeProps if active
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: 1 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}