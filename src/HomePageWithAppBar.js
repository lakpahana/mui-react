import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Book } from "@mui/icons-material";
const Home2 = () => {
    return (<>
        <AppBar
            sx={{

                bgcolor: "lightblue"
            }}
        >
            <Toolbar>
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
            </Toolbar>
        </AppBar>
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
                height: "500px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
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



    </>);
}

export default Home2;