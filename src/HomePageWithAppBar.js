import { AppBar, Toolbar, Box, Typography, Container, TextField, CssBaseline, Divider, Grid } from "@mui/material";
import { Book } from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Home2 = () => {
    const bgUrl = require("./assets/banner.jpg");
    return (<>
        <AppBar
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgUrl}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
        >

            <Container maxWidth="md">
                <Toolbar
                    
                >
                  
                    <Box
                        sx={{
                            gap: 1,
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        <Book
                            sx={{
                                fontSize: '200'
                            }}
                        ></Book>
                        <Typography>Hello</Typography>
                    </Box>
                    <Box sx={{
                        ml: 20,
                        display: 'flex',
                        alignItems: 'flex-end',
                        bgcolor: "lightgray",
                        borderRadius: 50,
                        px: 1,
                        py: 0.3,

                    }}>
                        <SearchOutlinedIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
                        <TextField variant="standard"
                            placeholder="Search"

                            InputProps={{ disableUnderline: true }}
                        />
                    </Box>



                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mt: 5,
                            mb: 5,
                            ml: 20,
                        }}
                    >
                        
                        <FacebookRoundedIcon
                            sx={{
                                fontSize: "180",
                                color: "#fff",
                                "&:hover": {
                                    color: "#ffa902",
                                },
                                //round
                                borderRadius: "50%",
                            }}
                        ></FacebookRoundedIcon>
                        <TwitterIcon></TwitterIcon>
                        <InstagramIcon></InstagramIcon>
                        <YouTubeIcon></YouTubeIcon>


                    </Box>
                </Toolbar>
                {/* <CssBaseline /> */}
                <Divider variant="light" color="white"></Divider>           
                <Grid container>
                        {/* three equal columns */}
                        <Grid item xs={4}>
                        <Box
                        sx={{
                            gap: 1,
                            display: "flex",
                            flexDirection: "row"
                        }}
                    >
                        <Book
                            sx={{
                                fontSize: '200'
                            }}
                        ></Book>
                        <Typography>Hello</Typography>
                    </Box>
                            </Grid>
                        <Grid item xs={4}>
                        <Box sx={{
                        ml: 20,
                        display: 'flex',
                        alignItems: 'flex-end',
                        bgcolor: "lightgray",
                        borderRadius: 50,
                        px: 1,
                        py: 0.3,

                    }}>
                        <SearchOutlinedIcon sx={{ color: 'action.active', mx: 1, my: 0.5 }} />
                        <TextField variant="standard"
                            placeholder="Search"

                            InputProps={{ disableUnderline: true }}
                        />
                    </Box>
                            </Grid>
                        <Grid item xs={4}>
                        <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2,
                            mt: 5,
                            mb: 5,
                            ml: 20,
                        }}
                    >
                        
                        <FacebookRoundedIcon
                            sx={{
                                fontSize: "180",
                                color: "#fff",
                                "&:hover": {
                                    color: "#ffa902",
                                },
                                //round
                                borderRadius: "50%",
                            }}
                        ></FacebookRoundedIcon>
                        <TwitterIcon></TwitterIcon>
                        <InstagramIcon></InstagramIcon>
                        <YouTubeIcon></YouTubeIcon>


                    </Box>
                            </Grid>
                    </Grid>     
            </Container>

            <Box
                sx={{
                    height: "500px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "4rem",

                }}
            >
                sadsa
            </Box>
        </AppBar>



    </>);
}

export default Home2;