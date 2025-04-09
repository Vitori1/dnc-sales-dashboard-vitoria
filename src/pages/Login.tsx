import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
} from '@/components'
import { Box, Container, Grid } from '@mui/material'
import { pxToRem } from '@/utils'

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}>
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email', disabled: true },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    children: 'Login',
                    disabled: true,
                  },
                ]}
                message={{
                  msg: 'Sucesso!!!',
                  type: 'success',
                }}
              />
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
