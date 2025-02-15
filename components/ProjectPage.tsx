"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Fingerprint, CreditCard, Users, AlertTriangle, Activity, GitPullRequest } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Logo } from "./Logo"

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("overview")

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      {/* Header Section */}
      <div className="mb-12 relative">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center animate-fade-in">
          <Logo />
          <h1 className="text-4xl font-bold mt-6 mb-4 text-brand-teal dark:text-brand-gold">
            Hajj Authentication System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            A comprehensive authentication system designed to enhance security and streamline pilgrim verification
            during Hajj transportation
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {["overview", "problem", "workflow", "features", "technology", "implementation", "team"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105
                ${
                  activeTab === tab
                    ? "bg-brand-teal text-white dark:bg-brand-gold dark:text-gray-900"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto">
        {activeTab === "overview" && (
          <div className="grid gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The Hajj Authentication System (HAS) is designed to address unauthorized pilgrim access during Hajj
                  transportation. By implementing a dual authentication mechanism combining NFC cards and fingerprint
                  verification, along with AI-powered headcount validation, HAS ensures only authorized pilgrims can
                  access transportation services.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "problem" && (
          <div className="grid gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Problem Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  During Hajj, one of the largest annual gatherings in the world, the presence of unauthorized pilgrims
                  creates significant logistical and security challenges. These individuals find ways to enter Makkah
                  and participate in the pilgrimage without required permits, leading to:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertTriangle className="shrink-0 w-6 h-6 mr-3 text-red-500 dark:text-red-400" />
                    <span className="dark:text-gray-300">Overcrowding and strain on city resources</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="shrink-0 w-6 h-6 mr-3 text-red-500 dark:text-red-400" />
                    <span className="dark:text-gray-300">Security risks and safety concerns</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="shrink-0 w-6 h-6 mr-3 text-red-500 dark:text-red-400" />
                    <span className="dark:text-gray-300">Disruption of crowd management strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Key Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">External Entry</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Early arrival and blending with residents</li>
                      <li>• Checkpoint system exploitation</li>
                      <li>• Off-road vehicle transportation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Internal Movement</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Unauthorized bus boarding</li>
                      <li>• Driver compliance issues</li>
                      <li>• Peak hour exploitation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Solution Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Multi-Layer Authentication</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• NFC card verification</li>
                      <li>• Biometric (fingerprint) confirmation</li>
                      <li>• AI-powered headcount validation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">System Integration</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Real-time passenger tracking</li>
                      <li>• Automated violation detection</li>
                      <li>• Centralized monitoring system</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "workflow" && (
          <div className="grid gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">System Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-100">
                      <Activity className="w-6 h-6 mr-2 text-brand-teal dark:text-blue-400" />
                      Phase 1: Authentication
                    </h3>
                    <ol className="space-y-4 text-gray-600 dark:text-gray-300 ml-8 list-decimal">
                      <li>Pilgrim presents NFC card for scanning</li>
                      <li>System verifies card authenticity and permissions</li>
                      <li>Fingerprint scan required for biometric verification</li>
                      <li>System compares fingerprint with stored template</li>
                      <li>Upon successful verification, pilgrim is allowed to board</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center dark:text-gray-100">
                      <GitPullRequest className="w-6 h-6 mr-2 text-brand-teal dark:text-blue-400" />
                      Phase 2: Validation
                    </h3>
                    <ol className="space-y-4 text-gray-600 dark:text-gray-300 ml-8 list-decimal">
                      <li>Bus door closes after boarding completion</li>
                      <li>System performs AI-powered headcount</li>
                      <li>Headcount compared with successful authentications</li>
                      <li>Discrepancies trigger alerts for investigation</li>
                      <li>Trip data logged for tracking and analysis</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "features" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-6 h-6 text-brand-teal dark:text-blue-400" />
                  <CardTitle className="dark:text-gray-100">NFC Authentication</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Secure NFC card scanning using PN532 module with encryption for data protection. Validates pilgrim
                  identity and permissions instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Fingerprint className="w-6 h-6 text-brand-teal dark:text-blue-400" />
                  <CardTitle className="dark:text-gray-100">Fingerprint Verification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Secondary biometric authentication using R307 fingerprint scanner. Ensures the person matches their
                  provided credentials.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Camera className="w-6 h-6 text-brand-teal dark:text-blue-400" />
                  <CardTitle className="dark:text-gray-100">AI Headcount</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  YOLOv8-powered camera system automatically counts passengers and cross-references with authenticated
                  scans.
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-brand-teal dark:text-blue-400" />
                  <CardTitle className="dark:text-gray-100">User Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive admin interface for managing pilgrim records, monitoring system status, and viewing
                  authentication logs.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "technology" && (
          <div className="grid gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Technical Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Hardware</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Raspberry Pi 5 (Main Controller)</li>
                      <li>• PN532 NFC Module</li>
                      <li>• R307 Fingerprint Scanner</li>
                      <li>• 8MP Camera Module</li>
                      <li>• 10-inch Display</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Software</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Python with PySide6 for GUI</li>
                      <li>• YOLOv8 for Person Detection</li>
                      <li>• SQLite for Local Database</li>
                      <li>• AES Encryption for Data Security</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "implementation" && (
          <div className="grid gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Implementation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Phase 1: Authentication</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Handles NFC card scanning and fingerprint verification. The system first validates the pilgrim's
                      NFC card, then requires fingerprint confirmation before allowing access.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 dark:text-gray-100">Phase 2: Validation</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      After all pilgrims have boarded, the system performs an AI-powered headcount and cross-references
                      with the number of successful authentications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Testing & Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold mb-2 dark:text-gray-100">NFC Reader</h4>
                      <p className="text-gray-600 dark:text-gray-300">Reliable detection within 3-5cm range</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold mb-2 dark:text-gray-100">Fingerprint Scanner</h4>
                      <p className="text-gray-600 dark:text-gray-300">76-91 confidence scores achieved</p>
                    </div>
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold mb-2 dark:text-gray-100">Camera System</h4>
                      <p className="text-gray-600 dark:text-gray-300">Accurate headcount in varied lighting</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "team" && (
          <div className="grid gap-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Project Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600"
                    >
                      <h3 className="font-semibold text-lg mb-2 dark:text-gray-100">{member.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">ID: {member.id}</p>
                      {/* Removed role display */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">Project Supervision</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl mb-2 dark:text-gray-100">Dr. Mohammed H. Sinky</h3>
                  <p className="text-gray-600 dark:text-gray-300">Project Supervisor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectPage

