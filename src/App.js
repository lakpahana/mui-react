import { AppBar, Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      {/* //create navbar */}
      <AppBar position="static">
        <Typography variant="h6">MUI</Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Contact</Typography>
        </Box>

        <Typography variant="h6">MUI</Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Contact</Typography>
        </Box>
      </AppBar>
      {/* //create content */}
    </Container>
  );
}

export default App;
