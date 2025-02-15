import { View, Text, StyleSheet, ScrollView } from "react-native"
import { useTheme } from "../contexts/ThemeContext"
import Card from "../components/Card"

const teamMembers = [
  {
    name: "Mohammad Yusof Al-Zmzmi",
    id: "443010592",
  },
  {
    name: "Bassam Mohammad Wayani",
    id: "443010573",
  },
  {
    name: "Abdullah Khalid Sendy",
    id: "443005619",
  },
]

const TeamScreen = () => {
  const { theme } = useTheme()

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Card title="Project Team">
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.memberCard}>
            <Text style={[styles.memberName, { color: theme.textColor }]}>{member.name}</Text>
            <Text style={[styles.memberId, { color: theme.textColor }]}>ID: {member.id}</Text>
          </View>
        ))}
      </Card>
      <Card title="Project Supervision">
        <View style={styles.supervisorCard}>
          <Text style={[styles.supervisorName, { color: theme.textColor }]}>Dr. Mohammed H. Sinky</Text>
          <Text style={[styles.supervisorRole, { color: theme.textColor }]}>Project Supervisor</Text>
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  memberCard: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  memberId: {
    fontSize: 14,
  },
  supervisorCard: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  supervisorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  supervisorRole: {
    fontSize: 16,
  },
})

export default TeamScreen

