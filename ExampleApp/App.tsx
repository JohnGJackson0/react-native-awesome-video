import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-awesome-video';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>{Video.getName()}</Text>
    </SafeAreaView>
  );
}

export default App;
