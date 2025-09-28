import { useState } from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import { 
  Shield, 
  Upload, 
  BarChart3, 
  FileText, 
  User, 
  Menu, 
  X,
  Activity,
  Lock,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CyberButton } from "@/components/ui/cyber-button";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Upload & Analyze", href: "/upload", icon: Upload },
  { name: "Results", href: "/results", icon: Activity },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Account", href: "/account", icon: User },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-surface/95 backdrop-blur-xl border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-3 px-6 border-b border-border">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold text-foreground">CryptoFirm</h1>
              <p className="text-xs text-muted-foreground">AI Firmware Analyzer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary",
                    isActive 
                      ? "bg-primary/20 text-primary shadow-glow border border-primary/20" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className={cn(
                    "h-4 w-4 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Status indicator */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 rounded-lg bg-surface/50 p-3 border border-border">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
              <div className="text-xs">
                <p className="text-foreground font-medium">System Online</p>
                <p className="text-muted-foreground">AI Engine Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navigation */}
        <div className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-surface/95 backdrop-blur-xl px-6">
          <CyberButton
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </CyberButton>

          <div className="flex-1" />

          {/* Search */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search algorithms..."
                className="w-64 rounded-lg bg-muted/50 border border-border pl-10 pr-4 py-2 text-sm placeholder-muted-foreground focus:bg-muted focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <CyberButton variant="cyber" size="icon">
              <Lock className="h-4 w-4" />
            </CyberButton>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}