import { Toolbar,Box, Typography,MenuItem, Stack, Button } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
const Header = () => {
    const Links = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Contact",
            url: "/contact"
        }


    ]
    return (
        <Toolbar sx={{
            bgColor: "black",
        }}>
            <Box
            sx={{
                display: "flex",
                bgColor: "black",
                gap: "10px"
            }}
            >
                <BookIcon sx={{
                      bgColor: "white"
                }
                }/>
                <Typography>
                    Book Store
                </Typography>
            </Box>
               {/* right aligned links */}
               <Box
                sx={{
                    marginLeft: "auto",
                    display: "flex",
                    gap: "20px",
                    bgColor: "black",
                }}
                >
                    {
                        Links.map((link) => {
                            return <MenuItem
                                
                                key={link.name}
                                onClick={() => {
                                    window.location.href = link.url;
                                }
                                }
                                sx={{
                                    color: "black",
                                    "&:hover": {
                                       
                                        textDecoration: "underline",
                                        color: "gray",
                                        cursor: "pointer"

                                    }
                                }}
                            >
                                {link.name}
                            </MenuItem>
                        })
                    }

                    <Stack
                    spacing={2}
                    direction={"row"}
                    sx={
                        {
                            color: "white",                           
                        }
                    }
                    
                    >
                       <Button
                       variant="outlined"
                        
                       >
                            Login
                       </Button>
                       <Button
                       variant="outlined">
                            SignUp
                       </Button>
                       
                       <Button
                       variant="outlined">
                            LogOut
                       </Button>
                    </Stack>

                </Box>

                {/* create a Login/SinguP button */}
                
        </Toolbar>
             

    );
}

export default Header;