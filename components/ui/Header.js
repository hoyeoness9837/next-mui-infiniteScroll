import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/'>InfiniteScroll Search</Link>
          </Typography>
          <Button color='inherit'>
            <Link href='https://www.unsplash.com'>
              Photos provided by Unsplash
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
