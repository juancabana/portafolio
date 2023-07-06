import AppRouter from "./routes/AppRoutes";
import { styled } from '@mui/material/styles';


function App() {

  const AppContainer = styled('div')(({ theme }) => ({
    backgroundColor: '#0a192f',
    margin: '0%',
  }));

  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;
