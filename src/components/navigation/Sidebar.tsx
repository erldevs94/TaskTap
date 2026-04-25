import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
} from '@mui/material';
import {
  HomeOutlined,
  BuildOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from '@mui/icons-material';
import { Link } from '@tanstack/react-router';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DRAWER_WIDTH = 280;

export function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {
        !isMobile &&

        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: DRAWER_WIDTH,
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid #f0f0f0',
            },
          }}
        >
          {/* Profile Header */}
          <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src="https://i.pravatar.cc/150?u=1" sx={{ width: 48, height: 48 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                John Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                john@example.com
              </Typography>
            </Box>
          </Box>

          {/* Navigation */}
          <Box sx={{ flexGrow: 1, px: 2 }}>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {/* Use "to" matching your code routes */}
              <NavButton to="/" icon={<HomeOutlined />} label="Home" />
              <NavButton to="/about" icon={<BuildOutlined />} label="About" />
              <NavButton to="/settings" icon={<SettingsOutlined />} label="Account Settings" />
            </List>
          </Box>

          {/* Logout at bottom */}
          <Box sx={{ mt: 'auto', p: 2 }}>
            <Divider sx={{ mb: 2 }} />
            <ListItemButton sx={{ borderRadius: '12px' }}>
              <ListItemIcon sx={{ minWidth: 40 }}><LogoutOutlined /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Box>
        </Drawer>
      }
    </>
  );
}

function NavButton({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={to} 
        activeProps={{
          style: {
            backgroundColor: '#f0f7ff',
            color: '#0066ff',
          },
        }}
        sx={{
          borderRadius: '12px',
          color: '#475467',
          '&:hover': { backgroundColor: '#f9fafb' }, 
          '&.active .MuiListItemIcon-root': { color: '#0066ff' },
        }}
      >
        <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={label}
        />
      </ListItemButton>
    </ListItem>
  );
}