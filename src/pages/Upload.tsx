import { useState, useRef } from "react";
import { Upload as UploadIcon, File, Cpu, Play, Loader2, CheckCircle } from "lucide-react";
import { CyberButton } from "@/components/ui/cyber-button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const architectures = [
  { value: "arm", label: "ARM Cortex" },
  { value: "mips", label: "MIPS" },
  { value: "riscv", label: "RISC-V" },
  { value: "avr", label: "AVR" },
  { value: "x86", label: "x86/x64" },
  { value: "auto", label: "Auto-detect" },
];

export default function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [architecture, setArchitecture] = useState("auto");
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const startAnalysis = async () => {
    if (!file) return;
    
    setAnalyzing(true);
    setProgress(0);

    // Simulate analysis progress
    const intervals = [10, 25, 45, 65, 80, 95, 100];
    const messages = [
      "Initializing analysis engine...",
      "Parsing firmware structure...",
      "Detecting cryptographic patterns...",
      "Analyzing assembly code...",
      "Identifying algorithms...",
      "Generating insights...",
      "Analysis complete!"
    ];

    for (let i = 0; i < intervals.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(intervals[i]);
      
      if (i === intervals.length - 1) {
        setTimeout(() => {
          navigate("/results");
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Firmware Analysis</h1>
          <p className="text-muted-foreground">Upload your firmware file and configure analysis parameters</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Upload Firmware</h2>
            
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                dragActive 
                  ? "border-primary bg-primary/5 shadow-glow" 
                  : file 
                    ? "border-accent bg-accent/5" 
                    : "border-border hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileSelect}
                accept=".bin,.hex,.elf,.img,.rom"
              />
              
              {file ? (
                <div className="space-y-4">
                  <CheckCircle className="h-12 w-12 text-accent mx-auto" />
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <CyberButton 
                    variant="outline" 
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Choose Different File
                  </CyberButton>
                </div>
              ) : (
                <div className="space-y-4">
                  <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-foreground mb-2">
                      Drag and drop your firmware file
                    </p>
                    <p className="text-muted-foreground mb-4">
                      or click to browse files
                    </p>
                    <CyberButton 
                      variant="cyber" 
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Browse Files
                    </CyberButton>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: .bin, .hex, .elf, .img, .rom (Max 100MB)
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Configuration Section */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Analysis Configuration</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Target Architecture
                </label>
                <Select value={architecture} onValueChange={setArchitecture}>
                  <SelectTrigger className="bg-muted/50 border-border">
                    <Cpu className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {architectures.map((arch) => (
                      <SelectItem key={arch.value} value={arch.value}>
                        {arch.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Analysis Options
                </label>
                <div className="space-y-2">
                  {[
                    "Deep pattern analysis",
                    "Protocol detection", 
                    "Vulnerability scanning",
                    "Performance optimization hints"
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-3">
                      <input 
                        type="checkbox" 
                        defaultChecked 
                        className="rounded border-border bg-muted"
                      />
                      <span className="text-sm text-muted-foreground">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {!analyzing ? (
                <CyberButton
                  variant="hero"
                  size="lg"
                  disabled={!file}
                  onClick={startAnalysis}
                  className="w-full"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Analysis
                </CyberButton>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span className="text-sm text-foreground">Analyzing firmware...</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground text-center">
                    {progress}% complete
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Recent Files */}
        <Card className="mt-8 p-6 bg-card/30 backdrop-blur-sm border-border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Recent Analyses</h3>
          <div className="space-y-3">
            {[
              { name: "iot_device_v2.bin", date: "2 hours ago", status: "Completed" },
              { name: "router_firmware.hex", date: "Yesterday", status: "Completed" },
              { name: "sensor_module.elf", date: "3 days ago", status: "Completed" },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-surface/30 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <File className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
                <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}