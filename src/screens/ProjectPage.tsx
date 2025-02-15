"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { useTheme } from "../contexts/ThemeContext"
import Logo from "../components/Logo"
import Card from "../components/Card"
import { AlertTriangle, Activity, GitPullRequest, CreditCard, Fingerprint, Camera, Users } from "../components/Icons"

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const { theme, toggleTheme } = useTheme()

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

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <Card title="Project Overview">
            <Text style={styles.cardText}>
              The Hajj Authentication System (HAS) is designed to address unauthorized pilgrim access during Hajj
              transportation. By implementing a dual authentication mechanism combining NFC cards and fingerprint
              verification, along with AI-powered headcount validation, HAS ensures only authorized pilgrims can access
              transportation services.
            </Text>
          </Card>
        )
      case "problem":
        return (
          <>
            <Card title="Problem Statement">
              <Text style={styles.cardText}>
                During Hajj, one of the largest annual gatherings in the world, the presence of unauthorized pilgrims
                creates significant logistical and security challenges. These individuals find ways to enter Makkah and
                participate in the pilgrimage without required permits, leading to:
              </Text>
              <View style={styles.listItem}>
                <AlertTriangle size={24} color={theme.colors.error} />
                <Text style={styles.listItemText}>Overcrowding and strain on city resources</Text>
              </View>
              <View style={styles.listItem}>
                <AlertTriangle size={24} color={theme.colors.error} />
                <Text style={styles.listItemText}>Security risks and safety concerns</Text>
              </View>
              <View style={styles.listItem}>
                <AlertTriangle size={24} color={theme.colors.error} />
                <Text style={styles.listItemText}>Disruption of crowd management strategies</Text>
              </View>
            </Card>
            <Card title="Key Challenges">
              <View style={styles.challengeSection}>
                <Text style={styles.challengeTitle}>External Entry</Text>
                <Text style={styles.cardText}>• Early arrival and blending with residents</Text>
                <Text style={styles.cardText}>• Checkpoint system exploitation</Text>
                <Text style={styles.cardText}>• Off-road vehicle transportation</Text>
              </View>
              <View style={styles.challengeSection}>
                <Text style={styles.challengeTitle}>Internal Movement</Text>
                <Text style={styles.cardText}>• Unauthorized bus boarding</Text>
                <Text style={styles.cardText}>• Driver compliance issues</Text>
                <Text style={styles.cardText}>• Peak hour exploitation</Text>
              </View>
            </Card>
            <Card title="Solution Approach">
              <View style={styles.solutionSection}>
                <Text style={styles.solutionTitle}>Multi-Layer Authentication</Text>
                <Text style={styles.cardText}>• NFC card verification</Text>
                <Text style={styles.cardText}>• Biometric (fingerprint) confirmation</Text>
                <Text style={styles.cardText}>• AI-powered headcount validation</Text>
              </View>
              <View style={styles.solutionSection}>
                <Text style={styles.solutionTitle}>System Integration</Text>
                <Text style={styles.cardText}>• Real-time passenger tracking</Text>
                <Text style={styles.cardText}>• Automated violation detection</Text>
                <Text style={styles.cardText}>• Centralized monitoring system</Text>
              </View>
            </Card>
          </>
        )
      case "workflow":
        return (
          <Card title="System Workflow">
            <View style={styles.workflowSection}>
              <View style={styles.workflowHeader}>
                <Activity size={24} color={theme.colors.primary} />
                <Text style={styles.workflowTitle}>Phase 1: Authentication</Text>
              </View>
              <Text style={styles.cardText}>1. Pilgrim presents NFC card for scanning</Text>
              <Text style={styles.cardText}>2. System verifies card authenticity and permissions</Text>
              <Text style={styles.cardText}>3. Fingerprint scan required for biometric verification</Text>
              <Text style={styles.cardText}>4. System compares fingerprint with stored template</Text>
              <Text style={styles.cardText}>5. Upon successful verification, pilgrim is allowed to board</Text>
            </View>
            <View style={styles.workflowSection}>
              <View style={styles.workflowHeader}>
                <GitPullRequest size={24} color={theme.colors.primary} />
                <Text style={styles.workflowTitle}>Phase 2: Validation</Text>
              </View>
              <Text style={styles.cardText}>1. Bus door closes after boarding completion</Text>
              <Text style={styles.cardText}>2. System performs AI-powered headcount</Text>
              <Text style={styles.cardText}>3. Headcount compared with successful authentications</Text>
              <Text style={styles.cardText}>4. Discrepancies trigger alerts for investigation</Text>
              <Text style={styles.cardText}>5. Trip data logged for tracking and analysis</Text>
            </View>
          </Card>
        )
      case "features":
        return (
          <>
            <Card title="NFC Authentication">
              <View style={styles.featureHeader}>
                <CreditCard size={24} color={theme.colors.primary} />
                <Text style={styles.featureTitle}>NFC Authentication</Text>
              </View>
              <Text style={styles.cardText}>
                Secure NFC card scanning using PN532 module with encryption for data protection. Validates pilgrim
                identity and permissions instantly.
              </Text>
            </Card>
            <Card title="Fingerprint Verification">
              <View style={styles.featureHeader}>
                <Fingerprint size={24} color={theme.colors.primary} />
                <Text style={styles.featureTitle}>Fingerprint Verification</Text>
              </View>
              <Text style={styles.cardText}>
                Secondary biometric authentication using R307 fingerprint scanner. Ensures the person matches their
                provided credentials.
              </Text>
            </Card>
            <Card title="AI Headcount">
              <View style={styles.featureHeader}>
                <Camera size={24} color={theme.colors.primary} />
                <Text style={styles.featureTitle}>AI Headcount</Text>
              </View>
              <Text style={styles.cardText}>
                YOLOv8-powered camera system automatically counts passengers and cross-references with authenticated
                scans.
              </Text>
            </Card>
            <Card title="User Management">
              <View style={styles.featureHeader}>
                <Users size={24} color={theme.colors.primary} />
                <Text style={styles.featureTitle}>User Management</Text>
              </View>
              <Text style={styles.cardText}>
                Comprehensive admin interface for managing pilgrim records, monitoring system status, and viewing
                authentication logs.
              </Text>
            </Card>
          </>
        )
      case "technology":
        return (
          <Card title="Technical Stack">
            <View style={styles.techSection}>
              <Text style={styles.techTitle}>Hardware</Text>
              <Text style={styles.cardText}>• Raspberry Pi 5 (Main Controller)</Text>
              <Text style={styles.cardText}>• PN532 NFC Module</Text>
              <Text style={styles.cardText}>• R307 Fingerprint Scanner</Text>
              <Text style={styles.cardText}>• 8MP Camera Module</Text>
              <Text style={styles.cardText}>• 10-inch Display</Text>
            </View>
            <View style={styles.techSection}>
              <Text style={styles.techTitle}>Software</Text>
              <Text style={styles.cardText}>• Python with PySide6 for GUI</Text>
              <Text style={styles.cardText}>• YOLOv8 for Person Detection</Text>
              <Text style={styles.cardText}>• SQLite for Local Database</Text>
              <Text style={styles.cardText}>• AES Encryption for Data Security</Text>
            </View>
          </Card>
        )
      case "implementation":
        return (
          <>
            <Card title="Implementation Process">
              <View style={styles.implementationSection}>
                <Text style={styles.implementationTitle}>Phase 1: Authentication</Text>
                <Text style={styles.cardText}>
                  Handles NFC card scanning and fingerprint verification. The system first validates the pilgrim's NFC
                  card, then requires fingerprint confirmation before allowing access.
                </Text>
              </View>
              <View style={styles.implementationSection}>
                <Text style={styles.implementationTitle}>Phase 2: Validation</Text>
                <Text style={styles.cardText}>
                  After all pilgrims have boarded, the system performs an AI-powered headcount and cross-references with
                  the number of successful authentications.
                </Text>
              </View>
            </Card>
            <Card title="Testing & Results">
              <View style={styles.testingSection}>
                <Text style={styles.testingTitle}>NFC Reader</Text>
                <Text style={styles.cardText}>Reliable detection within 3-5cm range</Text>
              </View>
              <View style={styles.testingSection}>
                <Text style={styles.testingTitle}>Fingerprint Scanner</Text>
                <Text style={styles.cardText}>76-91 confidence scores achieved</Text>
              </View>
              <View style={styles.testingSection}>
                <Text style={styles.testingTitle}>Camera System</Text>
                <Text style={styles.cardText}>Accurate headcount in varied lighting</Text>
              </View>
            </Card>
          </>
        )
      case "team":
        return (
          <>
            <Card title="Project Team">
              {teamMembers.map((member, index) => (
                <View key={index} style={styles.teamMember}>
                  <Text style={styles.memberName}>{member.name}</Text>
                  <Text style={styles.memberId}>ID: {member.id}</Text>
                </View>
              ))}
            </Card>
            <Card title="Project Supervision">
              <View style={styles.supervisor}>
                <Text style={styles.supervisorName}>Dr. Mohammed H. Sinky</Text>
                <Text style={styles.supervisorRole}>Project Supervisor</Text>
              </View>
            </Card>
          </>
        )
      default:
        return null
    }
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Logo />
        <Text style={[styles.title, { color: theme.colors.text }]}>Hajj Authentication System (HAS)</Text>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>
          A comprehensive authentication system designed to enhance security and streamline pilgrim verification during
          Hajj transportation
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        {["overview", "problem", "workflow", "features", "technology", "implementation", "team"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.card },
            ]}
          >
            <Text style={[styles.tabText, { color: activeTab === tab ? theme.colors.background : theme.colors.text }]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.content}>{renderContent()}</View>

      <TouchableOpacity style={styles.themeToggle} onPress={toggleTheme}>
        <Text style={{ color: theme.colors.text }}>Toggle Theme</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  tabText: {
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  listItemText: {
    marginLeft: 10,
    flex: 1,
  },
  challengeSection: {
    marginBottom: 15,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  solutionSection: {
    marginBottom: 15,
  },
  solutionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  workflowSection: {
    marginBottom: 15,
  },
  workflowHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  workflowTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  featureHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  techSection: {
    marginBottom: 15,
  },
  techTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  implementationSection: {
    marginBottom: 15,
  },
  implementationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  testingSection: {
    marginBottom: 15,
  },
  testingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  teamMember: {
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  memberId: {
    fontSize: 14,
  },
  supervisor: {
    alignItems: "center",
  },
  supervisorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  supervisorRole: {
    fontSize: 16,
  },
  themeToggle: {
    alignItems: "center",
    padding: 10,
    marginTop: 20,
  },
})

export default ProjectPage

