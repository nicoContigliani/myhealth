// components/ProtectedRoute.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/Auth/Auth';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const getModulesServices: any | any[] = useAppSelector(selectAuth);
    const [isLogin,setIslogin]=useState<boolean>(false)
    useEffect(() => {  
      setIslogin(getModulesServices?.isLogin)
    }, [getModulesServices])
  

  const navigation = useNavigation();
  

  if (!isLogin) {
    return (
      <View>
        <Text>You need to log in to access this page.</Text>
        {/* <Button title="Go to Login" onPress={() => navigation.navigate('login')} /> */}
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
