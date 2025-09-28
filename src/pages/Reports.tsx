import { FileText, Download, Eye, Calendar, Filter, Search } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reports = [
  {
    id: "RPT-001",
    filename: "iot_device_v2_analysis.pdf",
    date: "2024-01-15",
    time: "14:32",
    algorithms: 5,
    status: "completed",
    fileSize: "2.4 MB",
    severity: "medium"
  },
  {
    id: "RPT-002", 
    filename: "router_firmware_security.pdf",
    date: "2024-01-14",
    time: "09:15",
    algorithms: 8,
    status: "completed",
    fileSize: "3.1 MB",
    severity: "high"
  },
  {
    id: "RPT-003",
    filename: "sensor_module_crypto.pdf", 
    date: "2024-01-12",
    time: "16:45",
    algorithms: 3,
    status: "completed",
    fileSize: "1.8 MB",
    severity: "low"
  },
  {
    id: "RPT-004",
    filename: "smart_lock_analysis.pdf",
    date: "2024-01-10", 
    time: "11:20",
    algorithms: 6,
    status: "completed",
    fileSize: "2.9 MB",
    severity: "high"
  }
];

export default function Reports() {
  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analysis Reports</h1>
            <p className="text-muted-foreground">Download and manage your cryptographic analysis reports</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <CyberButton variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </CyberButton>
            <CyberButton variant="cyber">
              <Download className="h-4 w-4 mr-2" />
              Bulk Export
            </CyberButton>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-border">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search reports by filename or ID..."
                className="w-full rounded-lg bg-muted/50 border border-border pl-10 pr-4 py-2 text-sm placeholder-muted-foreground focus:bg-muted focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="flex gap-2">
              <select className="rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none">
                <option>All Dates</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <select className="rounded-lg bg-muted/50 border border-border px-3 py-2 text-sm focus:border-primary/30 focus:outline-none">
                <option>All Severity</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </Card>

        {/* Reports Grid */}
        <div className="grid gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all hover:shadow-glow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground truncate">
                        {report.filename}
                      </h3>
                      <Badge 
                        variant={
                          report.severity === "high" ? "destructive" :
                          report.severity === "medium" ? "secondary" : "outline"
                        }
                      >
                        {report.severity}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {report.date} at {report.time}
                      </div>
                      <span>ID: {report.id}</span>
                      <span>{report.algorithms} algorithms detected</span>
                      <span>{report.fileSize}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <CyberButton variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </CyberButton>
                  <CyberButton variant="cyber" size="sm">
                    <Download className="h-4 w-4" />
                  </CyberButton>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Report Preview Panel */}
        <Card className="mt-8 p-8 bg-card/30 backdrop-blur-sm border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">Report Preview</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Executive Summary</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  This comprehensive cryptographic analysis report covers the security assessment 
                  of the embedded firmware sample. The analysis identified multiple cryptographic 
                  implementations and provides detailed insights into their security posture.
                </p>
                <p>
                  Key findings include strong AES-256 encryption implementation, proper RSA key 
                  usage, and potential areas for security improvement in XOR cipher usage.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">Report Sections</h3>
              <div className="space-y-2">
                {[
                  "Executive Summary",
                  "Methodology & Scope", 
                  "Detected Algorithms",
                  "Security Analysis",
                  "Vulnerability Assessment",
                  "Recommendations",
                  "Technical Appendix"
                ].map((section, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded bg-surface/30 border border-border">
                    <span className="text-sm text-foreground">{section}</span>
                    <span className="text-xs text-muted-foreground">Page {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <CyberButton variant="hero" size="lg">
              <Download className="h-4 w-4 mr-2" />
              Download Sample Report
            </CyberButton>
          </div>
        </Card>
      </div>
    </div>
  );
}