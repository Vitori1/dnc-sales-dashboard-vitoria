import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent } from '@/components'
// item xs={12} sm={6}// item sm={6}
function Registration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
            <Container maxWidth="sm">
              <h1>CADASTRO</h1>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'ERRO!!!',
                  type: 'error',
                }}
              />
            </Container>
          </Grid>{' '}
          <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
