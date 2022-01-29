import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import useAuth from '../../hooks/useAuth';
import './Header.css'
import userImg from '../../../images/user.jpg'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const Header = () => {
    const { user, logout } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container className='pe-0'>
                    <Navbar.Brand className='w-25'>
                        <img className='w-50' src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar>
                        <Nav className='ms-lg-auto'>
                            {user.email ? < Box sx={{
                                flexGrow: 0, marginRight: {
                                    xs: '10px',
                                    lg: '0px'
                                }
                            }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        {user.photoURL ? <Avatar alt={user.displayName} src={user.photoURL} /> : <Avatar alt={user.displayName} src={userImg} />}
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

                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography sx={{ width: '200px' }} textAlign="center">
                                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                                {user.photoURL ? <Avatar
                                                    alt={user.displayName}
                                                    src={user.photoURL}
                                                    sx={{ width: 70, height: 70 }}
                                                /> : <Avatar
                                                    alt={user.displayName}
                                                    src={userImg}
                                                    sx={{ width: 70, height: 70 }}
                                                />}
                                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                    {user.displayName}
                                                </Typography>
                                                <Typography sx={{ fontSize: '14px' }}>
                                                    {user.email}
                                                </Typography>
                                            </Box>
                                        </Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Account</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">My Cart</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Dashboard</Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem sx={{ display: 'flex', justifyContent: 'center' }} onClick={handleCloseUserMenu, logout}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box> : <><NavLink className='fw-bolder text-decoration-none me-lg-4 me-2 text-black' to="/login">Login</NavLink>
                                <NavLink className='fw-bolder text-decoration-none text-black me-lg-0 me-4' to='/register'>Sign Up</NavLink></>}
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar >
        </div >
    );
};

export default Header;