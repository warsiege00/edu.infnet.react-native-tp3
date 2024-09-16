import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../contexts/ThemeContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();
  const { toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        // Redireciona para a tela de login
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEditProfile = () => {
    // Redireciona para a tela de edição de perfil
    navigation.navigate('EditProfile');
  };
  useEffect(() => {
    console.log(user);
  })
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={100}
        source={{ uri: user?.photoURL || 'https://via.placeholder.com/100' }} // Imagem de placeholder se o usuário não tiver uma foto
      />

      {user ? (
        <View style={styles.userInfo}>
          <Text style={styles.infoText}>{user.displayName || 'Nome não disponível'}</Text>
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
      ) : (
        <Text>Carregando informações do usuário...</Text>
      )}

      <Button mode="contained" onPress={handleEditProfile} style={styles.editButton}>
        Editar Perfil
      </Button>
      <Button mode="outlined" onPress={toggleTheme} style={styles.toggleButton}>
        Toggle Theme
      </Button>
      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
        Sair
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    marginVertical: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  editButton: {
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default ProfileScreen;