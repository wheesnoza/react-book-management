import { Grid, Skeleton, Typography } from '@mui/material';

export const BookDetailLoading = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={4}>
        <Skeleton variant="rectangular" width={300} height={400} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography component="div" variant="h3">
          <Skeleton />
        </Typography>
        <Typography component="div" variant="subtitle1">
          <Skeleton />
        </Typography>
        <Skeleton
          variant="rectangular"
          width={320}
          height={334}
          sx={{ marginLeft: 3 }}
        />
      </Grid>
    </Grid>
  );
};

export default BookDetailLoading;
