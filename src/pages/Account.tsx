import { User, Settings, Key, Activity, Shield, Mail, Github } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const analysisHistory = [
  {
    filename: "iot_device_v2.bin",
    date: "2024-01-15 14:32",
    algorithms: 5, 
    status: "completed",
    size: "4.2 MB"
  },
  {
    filename: "router_firmware.hex", 
    date: "2024-01-14 09:15",
    algorithms: 8,
    status: "completed", 
    size: "7.1 MB"
  },
  {
    filename: "sensor_module.elf",
    date: "2024-01-12 16:45", 
    algorithms: 3,
    status: "completed",
    size: "2.8 MB"
  }
];

export default function Account() {
  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Account Settings</h1>
          <p className="text-muted-foreground">Manage your profile and analysis preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="lg:col-span-1 p-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="text-center space-y-4">
              <div className="h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                <User className="h-12 w-12 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Alex Chen</h2>
                <p className="text-muted-foreground">Security Researcher</p>
              </div>
              <Badge variant="default" className="bg-accent/20 text-accent">
                Pro Plan
              </Badge>
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Analyses This Month</span>
                  <span className="text-foreground font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Firmware Analyzed</span>
                  <span className="text-foreground font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="text-foreground font-medium">Dec 2023</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="bg-surface/50 border border-border">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Alex"
                          className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Chen"
                          className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="alex.chen@cryptofirm.com"
                        className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        defaultValue="CyberSec Labs Inc."
                        className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <CyberButton variant="hero">Update Profile</CyberButton>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Connected Accounts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface/30 border border-border">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Email</p>
                          <p className="text-xs text-muted-foreground">alex.chen@cryptofirm.com</p>
                        </div>
                      </div>
                      <Badge variant="default">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface/30 border border-border">
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium text-foreground">GitHub</p>
                          <p className="text-xs text-muted-foreground">alexchen-dev</p>
                        </div>
                      </div>
                      <CyberButton variant="outline" size="sm">Connect</CyberButton>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Password & Authentication</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <CyberButton variant="cyber">Update Password</CyberButton>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Authenticator App</p>
                      <p className="text-xs text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <CyberButton variant="outline">
                      <Key className="h-4 w-4 mr-2" />
                      Enable 2FA
                    </CyberButton>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Recent Analysis History</h3>
                  <div className="space-y-3">
                    {analysisHistory.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-surface/30 border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Activity className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{item.filename}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{item.date}</span>
                              <span>{item.algorithms} algorithms</span>
                              <span>{item.size}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="default">Completed</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-6">
                    <CyberButton variant="outline">View All History</CyberButton>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Default Architecture</p>
                        <p className="text-xs text-muted-foreground">
                          Pre-select architecture for faster analysis
                        </p>
                      </div>
                      <select className="rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none">
                        <option>Auto-detect</option>
                        <option>ARM Cortex</option>
                        <option>MIPS</option>
                        <option>RISC-V</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Email Notifications</p>
                        <p className="text-xs text-muted-foreground">
                          Receive updates when analysis completes
                        </p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded border-border bg-muted" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">Auto-generate Reports</p>
                        <p className="text-xs text-muted-foreground">
                          Automatically create PDF reports after analysis
                        </p>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded border-border bg-muted" />
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <CyberButton variant="cyber">Save Preferences</CyberButton>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}