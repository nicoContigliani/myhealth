// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
// import { store } from '../redux//store';
// import { Text, View } from '@/components/Themed';



// import { useColorScheme } from '@/components/useColorScheme';
// import { Provider } from 'react-redux';
// import Login from './Screens/Logins/Logins';
// import { useAppSelector } from '@/redux/hooks';
// import { selectAuth } from '@/redux/Auth/Auth';

// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: '(tabs)',
// };

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//     ...FontAwesome.font,
//   });

//   // Expo Router uses Error Boundaries to catch errors in the navigation tree.
//   useEffect(() => {
//     if (error) throw error;
//   }, [error]);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return   <Provider store={store}><RootLayoutNav /></Provider>;
// }

// function RootLayoutNav() {
//   const colorScheme = useColorScheme();

//   const getModulesServices: any | any[] = useAppSelector(selectAuth);
//   const [isLogin,setIslogin]=useState<boolean>(false)
//   useEffect(() => {  
//     console.log("🚀 ~ TabLayout ~ getModulesServices:", getModulesServices?.isLogin)
//     setIslogin(getModulesServices?.isLogin)
//   }, [getModulesServices])






//   return (
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         {
//           isLogin ?
//             <Stack>
//               <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//               <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
//             </Stack>
//             :
//             <Login />
//         }
//       </ThemeProvider>

//   );
// }



import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { store } from '../redux//store';
import { Text, View } from '@/components/Themed';



import { useColorScheme } from '@/components/useColorScheme';
import { Provider } from 'react-redux';
import Login from './Screens/Logins/Logins';
import { useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/Auth/Auth';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return   <Provider store={store}><RootLayoutNav /></Provider>;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const getModulesServices: any | any[] = useAppSelector(selectAuth);
  const [isLogin,setIslogin]=useState<boolean>(false)
  useEffect(() => {  
    console.log("🚀 ~ TabLayout ~ getModulesServices:", getModulesServices?.isLogin)
    setIslogin(getModulesServices?.isLogin)
  }, [getModulesServices])






  return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {
          isLogin ?
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
              
            </Stack>
            :
            <Login />
        }
      </ThemeProvider>

  );
}
