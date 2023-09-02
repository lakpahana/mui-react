
import { Box, Button, Grid, Typography } from "@mui/material";

const HomePage = () => {
     return (
          // create a banner
          <div>
               <Box
                    sx={{
                         backgroundImage: 'url(https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1806&q=80)',
                         bgcolor: 'lightblue',
                         backgroundSize: 'cover',
                         pt: 8,
                         pb: 6,
                         height: '40vh',
                    }}
               >
                    <Grid container spacing={5}>
                         <Grid item md={6}>
                              <Typography
                                   sx={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: '2.5rem',
                                        textAlign: 'center',
                                        pt: 10,
                                   }}
                              >
                                   Book Store
                              </Typography>
                         </Grid>
                         <Grid item md={6}>
                              <Typography
                                   sx={{
                                        fontWeight: 'bold',
                                        color: 'white',
                                        fontSize: '2.5rem',
                                        textAlign: 'center',
                                        pt: 10,
                                   }}
                              >
                                   Book Store
                              </Typography>
                         </Grid>
                    </Grid>
               </Box>
               <Box
                    sx={{
                         fontWeight: 'bold',
                         width: '100%',
                         height: '100px',
                         bgcolor:'lightblue',
                         pt:8,
                         pb:10

                    }}

               >
                    <Grid container spacing={2}
                    >
                         <Grid item md={6}>

                         </Grid>
                         <Grid item md={6}
                         textAlign={"left"}

                         >
                         <Typography
                         variant="h4"
                         >
                              Start with us
                         </Typography>
                         <Typography>
                              sddsadas adsd assad jkdndjf sjandj njsadnj sad jkasd sakjhd kjhskjah dkjsah hdkjsahjk hdjhas hdha sa sadsa sa sa da a dw dasdwwwww sdwwwww asdwww sakdnksaj dsaj dksjadkajs dksaj dksaj dsa dksajdksajjdk jaskjdkjsa
                         </Typography>
                         <Button>
                              Continue Reading
                         </Button>
                         </Grid>
                    </Grid >
               </Box>
          </div>
     );
}

export default HomePage;