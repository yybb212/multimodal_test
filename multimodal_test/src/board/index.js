import { Grid, Box, Paper } from "@mui/material";

const Board = () => {

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'primary.dark',
            display: 'flex', 
            justifyContent: 'center'
          }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper>Content 1</Paper>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Paper>Content 2</Paper>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Paper>Content 3</Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper>Content 4</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>Content 5</Paper>
                </Grid>
            </Grid>
        </Box>
      );
}

export default Board;