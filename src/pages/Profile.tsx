import { useContext } from 'react'
import { AppThemeContext } from '@/contexts/AppThemeContext'
//components
import { CardComponent, Header, StyledH2, StyledButton } from '@/components'
import { Container, Grid } from '@mui/material'
//services
import { logout } from '@/services'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid>
            <CardComponent>Seus dados...</CardComponent>
          </Grid>
          <Grid>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema{' '}
                {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
              </StyledButton>
              <StyledButton className="alert" onClick={logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
