import { Shield, Lock, Key, Hash, Zap, AlertTriangle, CheckCircle, Download, Eye } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const cryptoAlgorithms = [
  {
    name: "AES-256-CBC",
    type: "Symmetric Encryption",
    confidence: 98,
    instances: 12,
    icon: Lock,
    status: "secure",
    description: "Advanced Encryption Standard with 256-bit key in CBC mode"
  },
  {
    name: "RSA-2048",
    type: "Asymmetric Encryption", 
    confidence: 95,
    instances: 3,
    icon: Key,
    status: "secure",
    description: "RSA public-key cryptosystem with 2048-bit key size"
  },
  {
    name: "SHA-256",
    type: "Hash Function",
    confidence: 99,
    instances: 8,
    icon: Hash,
    status: "secure", 
    description: "Secure Hash Algorithm 256-bit cryptographic hash function"
  },
  {
    name: "ECDSA-P256",
    type: "Digital Signature",
    confidence: 92,
    instances: 5,
    icon: Shield,
    status: "secure",
    description: "Elliptic Curve Digital Signature Algorithm with P-256 curve"
  },
  {
    name: "XOR Cipher",
    type: "Stream Cipher",
    confidence: 87,
    instances: 2,
    icon: Zap,
    status: "weak",
    description: "Simple XOR-based encryption (potentially weak implementation)"
  }
];

const insights = [
  {
    type: "security",
    level: "high",
    title: "Strong Cryptographic Implementation",
    description: "The firmware uses industry-standard encryption algorithms with appropriate key sizes."
  },
  {
    type: "warning", 
    level: "medium",
    title: "Potential Weak Cipher Detected",
    description: "XOR cipher implementation found. Consider replacing with AES for better security."
  },
  {
    type: "info",
    level: "low", 
    title: "Protocol Analysis Complete",
    description: "Detected TLS 1.3 handshake patterns and secure key exchange mechanisms."
  }
];

export default function Results() {
  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analysis Results</h1>
            <p className="text-muted-foreground">iot_device_v2.bin • Analyzed 2 minutes ago</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <CyberButton variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View Raw Data
            </CyberButton>
            <CyberButton variant="cyber">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </CyberButton>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Algorithms Found</p>
              </div>
              <Shield className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-accent">30</p>
                <p className="text-sm text-muted-foreground">Total Instances</p>
              </div>
              <Zap className="h-8 w-8 text-accent" />
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-secondary">94%</p>
                <p className="text-sm text-muted-foreground">Avg Confidence</p>
              </div>
              <CheckCircle className="h-8 w-8 text-secondary" />
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-warning">1</p>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-warning" />
            </div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="algorithms" className="space-y-6">
          <TabsList className="bg-surface/50 border border-border">
            <TabsTrigger value="algorithms">Detected Algorithms</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="protocols">Protocol Analysis</TabsTrigger>
            <TabsTrigger value="logs">Analysis Logs</TabsTrigger>
          </TabsList>

          <TabsContent value="algorithms" className="space-y-6">
            <div className="grid gap-6">
              {cryptoAlgorithms.map((algo, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <algo.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{algo.name}</h3>
                        <p className="text-sm text-muted-foreground">{algo.type}</p>
                      </div>
                    </div>
                    <Badge variant={algo.status === "secure" ? "default" : "destructive"}>
                      {algo.status === "secure" ? "Secure" : "Weak"}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{algo.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Confidence</span>
                        <span className="text-foreground font-medium">{algo.confidence}%</span>
                      </div>
                      <Progress value={algo.confidence} className="h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Instances Found</span>
                      <span className="text-lg font-semibold text-primary">{algo.instances}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                      insight.type === "security" ? "bg-accent/20" :
                      insight.type === "warning" ? "bg-warning/20" : "bg-primary/20"
                    }`}>
                      {insight.type === "security" ? <Shield className="h-5 w-5 text-accent" /> :
                       insight.type === "warning" ? <AlertTriangle className="h-5 w-5 text-warning" /> :
                       <CheckCircle className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                    <Badge variant={
                      insight.level === "high" ? "default" :
                      insight.level === "medium" ? "secondary" : "outline"
                    }>
                      {insight.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="protocols" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Protocol Detection</h3>
                <div className="space-y-3">
                  {[
                    { name: "TLS 1.3", status: "Detected", confidence: "High" },
                    { name: "HTTPS", status: "Detected", confidence: "High" },
                    { name: "WPA3", status: "Detected", confidence: "Medium" },
                    { name: "SSH", status: "Not Found", confidence: "-" }
                  ].map((protocol, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface/30 border border-border">
                      <span className="text-sm font-medium text-foreground">{protocol.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant={protocol.status === "Detected" ? "default" : "outline"}>
                          {protocol.status}
                        </Badge>
                        {protocol.confidence !== "-" && (
                          <span className="text-xs text-muted-foreground">{protocol.confidence}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Exchange Analysis</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-surface/30 border border-border">
                    <h4 className="text-sm font-medium text-foreground mb-2">ECDHE Key Exchange</h4>
                    <p className="text-xs text-muted-foreground">
                      Ephemeral key exchange detected using Elliptic Curve Diffie-Hellman. Provides perfect forward secrecy.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface/30 border border-border">
                    <h4 className="text-sm font-medium text-foreground mb-2">Certificate Validation</h4>
                    <p className="text-xs text-muted-foreground">
                      X.509 certificate chain validation patterns found. RSA-2048 signatures verified.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="logs" className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Logs</h3>
              <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm space-y-1 max-h-96 overflow-y-auto">
                <div className="text-accent">[INFO] Starting cryptographic analysis...</div>
                <div className="text-foreground">[SCAN] Parsing firmware structure (ARM Cortex-M4)</div>
                <div className="text-primary">[DETECT] AES encryption constants found at 0x10004A20</div>
                <div className="text-primary">[DETECT] RSA public key modulus detected at 0x10006B40</div>
                <div className="text-secondary">[PATTERN] SHA-256 round constants identified</div>
                <div className="text-warning">[WARN] Weak XOR cipher implementation at 0x10008C10</div>
                <div className="text-primary">[DETECT] ECDSA signature verification routine found</div>
                <div className="text-accent">[AI] Analyzing cryptographic context and usage patterns...</div>
                <div className="text-accent">[AI] Generating security recommendations...</div>
                <div className="text-accent">[COMPLETE] Analysis finished in 28.4 seconds</div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}