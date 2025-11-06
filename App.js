import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Student Profile</Text>

        <Text style={styles.label}>Name: <Text style={styles.info}>Alexander Jove Mikael A. Simpelo</Text></Text>
        <Text style={styles.label}>Age: <Text style={styles.info}>21</Text></Text>
        <Text style={styles.label}>Course/Year/Section: <Text style={styles.info}>BSCS 3-3</Text></Text>
        <Text style={styles.label}>About me: <Text style={styles.info}>I love watching movies and playing games</Text></Text>
        <Text style={styles.label}>Achievements: <Text style={styles.info}>Dean's Lister</Text></Text>
        <Text style={styles.label}>Skills: <Text style={styles.info}>Critical Thinking</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf7',
    paddingHorizontal: 20,
  },
   card: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#3498db', 
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#34495e',
    fontWeight: '600',
  },
  info: {
    fontWeight: 'normal',
    color: '#6f7275',
  },
});
