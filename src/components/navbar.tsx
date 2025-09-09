'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const pages = [
    {label: 'Home', path: '/home'}, 
    // {label: 'About Us', path: '/about-us'}, 
    {label: 'Meet the Execs', path: '/meet-the-execs-2526'}, 
    // {label: 'Events/Workshops', path: '/events-workshops'}, 
    // {label: 'Past Events', path: '/past-events'}, 
    // {label: 'Join Us', path: '/join-us'}, {
    // label: 'FAQ', path: '/faq'}, 
    // {label: 'Contact Us',  path: '/contact-us'}
  ];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static" sx={{backgroundColor: "transparent"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color: 'gray'}} /> */}
          <Box
            component="img"
            src='/UTKDC_logo.svg'
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , color: 'gray', width: 60, height: 60}}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'gray',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>  */}
          {/* full screen logo title */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'gray'}}> {/* minimized screen drop down */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, color: 'gray'}}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                    <Link href={page.path}>
                        <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                    </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'gray' }} /> logo */}
          {/* <Box
            component="img"
            src='/UTKDC_logo.svg'
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'gray', width: 60, height: 60, justifyContent: 'center', alignItems: 'center'}}
          /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'gray',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>  */}
          {/* minimized screen logo title */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'gray', justifyContent: 'center', alignItems: 'center' }}> {/* page titles */}
            {pages.map((page) => (
                <Link key={page.label} href={page.path} passHref>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'gray', display: 'block' }}
                    >
                        {page.label}
                    </Button>
                </Link>
            ))}
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
