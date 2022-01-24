import React from 'react';
import EntryScreen from './src/screens/SplashScreen';
import MainNavigationContainer from './src/screens/MainScreen';

const App = () => {
  // Display splash screen on app start
  const [ showSplashScreen, setShowSplashScreen ] = React.useState(false);  
  const hideSplashScreen = () => {
    setShowSplashScreen(true);
  };
  if(!showSplashScreen) {
    return <EntryScreen onContinue={hideSplashScreen} />;
  }

  // Render Main AppContainer
  return <MainNavigationContainer />;
};

export default App;
