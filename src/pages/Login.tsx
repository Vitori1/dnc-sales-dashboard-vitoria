import { BannerImage } from '@/components'
import { Box, Container, Grid } from '@mui/material'

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
            <Container maxWidth="sm">
              <h1>LOGIN</h1>
            </Container>
          </Grid>
          <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Login
