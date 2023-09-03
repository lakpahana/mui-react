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
                    <Grid container
                        sx={{
                            alignItems: "center",

                        }}
                    >
                        {/* three equal columns */}
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    gap: 1,
                                    display: "flex",
                                    flexDirection: "row"
                                }}
                            >
                                {/* <Book
                                    sx={{
                                        fontSize: '200'
                                    }}
                                ></Book> */}
                                <Typography
                                    fontFamily={"Poppins, sans-serif"}
                                    fontWeight={"700"}
                                    fontSize={"2rem"}
                                    sx={{
                                        color: "#ffa902"
                                    }}
                                >Galli</Typography>
                                <Typography
                                    sx={{
                                        ml: -1.2,
                                    }}
                                    fontFamily={"Poppins, sans-serif"}
                                    fontWeight={"700"}
                                    fontSize={"2rem"}
                                >vant</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{
                                // ml: 20,
                                width: '100%',
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
                                    justifyContent: "flex-end",
                                    gap: 2
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
                </Toolbar>
                {/* <CssBaseline /> */}
                <Divider variant="light" color="white"></Divider>

            </Container>

            <Box
                sx={{
                    height: "500px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "4rem",


                }}
            >
                <Typography
                    fontFamily={"Poppins, sans-serif"}
                    fontWeight={"800"}
                    fontSize={"4rem"}
                >
                    Where will you go next ?
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </Typography>   
            </Box>
        </AppBar>



    </>);
}

export default Home2;