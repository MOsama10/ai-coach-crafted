import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu, Download } from "lucide-react";
import ProposalCover from "@/components/ProposalCover";
import ProposalSection from "@/components/ProposalSection";
import CalloutBox from "@/components/CalloutBox";
import ProposalTimeline from "@/components/ProposalTimeline";
import StatsGrid from "@/components/StatsGrid";
import FeatureList from "@/components/FeatureList";
import vionexLogo from "@/assets/vionex-logo.png";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const timelinePhases = [
    {
      phase: "Phase 1",
      title: "AI Prototype & Validation",
      duration: "4-6 days",
      deliverables: [
        "AI model training and testing",
        "Indistinguishability demo",
        "Core coaching algorithms",
        "Technical proof of concept"
      ],
      milestone: "AI system that can convincingly replace human coach interactions"
    },
    {
      phase: "Phase 2", 
      title: "Core App Development",
      duration: "8-12 weeks",
      deliverables: [
        "Client mobile app (iOS/Android)",
        "Coach dashboard web platform",
        "Partner management portal",
        "Basic payment integration"
      ],
      milestone: "Functional MVP with all three user journeys"
    },
    {
      phase: "Phase 3",
      title: "Advanced Features",
      duration: "6-8 weeks", 
      deliverables: [
        "Advanced analytics and reporting",
        "Exclusive content management",
        "Bloodwork data parsing",
        "Enhanced personalization"
      ],
      milestone: "Production-ready platform with premium features"
    },
    {
      phase: "Phase 4",
      title: "Launch & Scale",
      duration: "4-6 weeks",
      deliverables: [
        "App store deployment",
        "Marketing integrations",
        "Performance monitoring",
        "User onboarding optimization"
      ],
      milestone: "Market launch with growth tracking systems"
    }
  ];

  const marketStats = [
    {
      value: "$96B",
      label: "Global Fitness Market",
      description: "Expected by 2027"
    },
    {
      value: "73%",
      label: "Mobile Fitness Growth",
      description: "Year-over-year increase"
    },
    {
      value: "$4.4B",
      label: "AI Fitness Market",
      description: "Projected by 2026"
    },
    {
      value: "2.8x",
      label: "Better Retention",
      description: "With AI coaching"
    }
  ];

  const coreFeatures = [
    {
      title: "AI Indistinguishability",
      description: "AI coaching that clients cannot distinguish from human trainers through advanced NLP and personalization.",
      highlight: true
    },
    {
      title: "Multi-Platform Access", 
      description: "Native mobile apps for clients and web dashboards for coaches and partners."
    },
    {
      title: "Subscription Management",
      description: "Automated billing, plan management, and revenue sharing between coaches and partners."
    },
    {
      title: "Injury Tracking & Prevention",
      description: "AI-powered injury detection, recovery plans, and prevention strategies."
    },
    {
      title: "Bloodwork Integration",
      description: "Parse and analyze lab results to provide personalized nutrition and training recommendations."
    },
    {
      title: "Revenue Sharing",
      description: "Transparent revenue distribution system between coaches, partners, and platform."
    }
  ];

  const pages = [
    // Cover Page
    <ProposalCover key="cover" />,
    
    // Executive Summary
    <ProposalSection 
      key="summary"
      title="Executive Summary"
      subtitle="Revolutionizing fitness coaching through indistinguishable AI"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              The fitness industry faces a critical shortage of qualified personal trainers, with demand far exceeding supply. 
              Current fitness apps lack personalization and human connection, leading to poor user retention and ineffective results. 
              Fitness coaches struggle to scale their expertise beyond 1-on-1 sessions, limiting their income potential.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Solution</h3>
            <p className="text-muted-foreground leading-relaxed">
              A focused, non-distracting coaching app where trainees get only what they need to hit their goals, 
              while coaches and partners operate efficiently using AI agents. The AI performs everything inside the app: 
              plan building, plan updates, and client communications—with outputs that are an identical replica of the 
              coach's voice, style, and decision logic.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">The Value</h3>
            <p className="text-muted-foreground leading-relaxed">
              Trainees will have 0% doubt that anyone other than their subscribed coach built/edited the plan or is 
              chatting with them. This platform enables scalable, personalized coaching through extensible journeys 
              for clients, coaches, and partners—all powered by indistinguishable AI.
            </p>
          </div>
        </div>
        
        <div>
          <CalloutBox type="primary">
            <h4 className="font-semibold mb-3">Project Investment</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Development:</span>
                <span className="font-semibold">$30,000</span>
              </div>
              <div className="flex justify-between">
                <span>AI Training:</span>
                <span className="font-semibold">$25,000</span>
              </div>
              <div className="flex justify-between">
                <span>Infrastructure:</span>
                <span className="font-semibold">$25,000</span>
              </div>
              <hr className="border-primary/20" />
              <div className="flex justify-between font-bold">
                <span>Total Investment:</span>
                <span>$80,000</span>
              </div>
            </div>
          </CalloutBox>
        </div>
      </div>
    </ProposalSection>,

    // Objectives
    <ProposalSection 
      key="objectives"
      title="Project Objectives"
      subtitle="Clear, measurable goals for success"
      backgroundPattern={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">Primary Objectives</h3>
          <FeatureList 
            features={[
              {
                title: "AI Indistinguishability",
                description: "AI that performs all tasks with 0% trainee doubt—perfectly matching coach voice and style"
              },
              {
                title: "Focused Experience", 
                description: "Non-distracting platform where trainees get only what they need to achieve goals"
              },
              {
                title: "Extensible Journeys",
                description: "Scalable, modular paths for clients, coaches, and partners to grow efficiently"
              },
              {
                title: "Automated Operations",
                description: "AI handles plan building, updates, communications, and revenue distribution"
              }
            ]}
            columns={1}
          />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">Success Metrics</h3>
          <StatsGrid 
            stats={[
              { value: "95%", label: "AI Indistinguishability", description: "User blind test score" },
              { value: "85%", label: "User Retention", description: "6-month retention rate" },
              { value: "50%", label: "Cost Reduction", description: "vs traditional coaching" },
              { value: "24/7", label: "Availability", description: "AI coaching access" }
            ]}
          />
          
          <CalloutBox type="success" className="mt-6">
            <h4 className="font-semibold mb-2">Key Performance Indicators</h4>
            <ul className="space-y-1 text-sm">
              <li>• Client satisfaction score: &gt;4.7/5.0</li>
              <li>• Coach productivity increase: &gt;300%</li>
              <li>• Partner revenue growth: &gt;40%</li>
              <li>• Platform uptime: &gt;99.9%</li>
            </ul>
          </CalloutBox>
        </div>
      </div>
    </ProposalSection>,

    // Core Non-Negotiable Requirement
    <ProposalSection
      key="core-requirement" 
      title="Core Non-Negotiable Requirement"
      subtitle="The foundation of our competitive advantage"
    >
      <div className="max-w-4xl mx-auto">
        <CalloutBox type="warning">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Core Goal: AI Performs Everything</h3>
            <p className="text-lg text-muted-foreground">
              The AI must handle all plan building, plan updates, and client communications inside the app.
            </p>
          </div>
        </CalloutBox>
        
        <div className="space-y-6 mt-8">
          <div className="bg-card p-6 rounded-lg border-2 border-primary/20">
            <h4 className="text-lg font-semibold mb-4 text-primary">Exact Match Standard</h4>
            <FeatureList 
              features={[
                {
                  title: "Identical Replica",
                  description: "Outputs must be an exact match of the coach's voice, style, and decision logic"
                },
                {
                  title: "Zero Doubt - Plans", 
                  description: "Trainees have 0% doubt that anyone other than the subscribed coach built/edited the plan"
                },
                {
                  title: "Zero Doubt - Communications",
                  description: "Trainees have 0% doubt that anyone other than the subscribed coach is chatting with them"
                },
                {
                  title: "Full Autonomy",
                  description: "AI handles all interactions without requiring human coach intervention"
                }
              ]}
              columns={1}
            />
          </div>
          
          <CalloutBox type="warning">
            <h4 className="font-semibold mb-2">Contract Gate</h4>
            <p>
              <strong>No agreement will be signed with any vendor until this indistinguishability is demonstrated 
              in a prototype and user tests.</strong> This is the non-negotiable foundation of the entire platform.
            </p>
          </CalloutBox>
        </div>
      </div>
    </ProposalSection>,

    // Scope of Work - Client Journey
    <ProposalSection
      key="scope-client"
      title="Scope of Work: Client Journey — Extensible"
      subtitle="Focused experience from landing to goal achievement"
      backgroundPattern={true}
    >
      <div className="space-y-8">
        <div className="text-center text-muted-foreground">
          <em>[User Journey Flow Diagram Recommended Here]</em>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-subtle border">
          <h3 className="text-xl font-semibold mb-6 text-primary">Client Flow</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">1</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Landing → Subscription → Download</h4>
                <p className="text-sm text-muted-foreground">Clear landing page → subscription selection → app download → plan selection → payment</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">2</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Smart Intake & AI Plan Generation</h4>
                <p className="text-sm text-muted-foreground">Post-payment smart intake (2-4 min) → AI designs training (and optional nutrition) from intake data</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">3</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Daily Dashboard</h4>
                <p className="text-sm text-muted-foreground">Home shows plan summary, today's focus, and renewal countdown</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">4</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Progress Tracking & Reminders</h4>
                <p className="text-sm text-muted-foreground">Reminders to log weight/steps/photos; send workout videos to coach</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">5</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Injury Detection & Flagging</h4>
                <p className="text-sm text-muted-foreground">AI collects pain/injury data and flags to coach with suggested actions</p>
              </div>
            </div>
          </div>
        </div>
        
        <CalloutBox type="primary">
          <h4 className="font-semibold mb-3">Client Value Proposition</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Accessibility:</strong> 24/7 expert coaching at a fraction of personal trainer costs
            </div>
            <div>
              <strong>Personalization:</strong> AI adapts to individual needs, preferences, and progress
            </div>
            <div>
              <strong>Results:</strong> Data-driven approach with continuous optimization for maximum effectiveness
            </div>
          </div>
        </CalloutBox>
      </div>
    </ProposalSection>,

    // Scope of Work - Coach Journey
    <ProposalSection
      key="scope-coach"
      title="Scope of Work: Coach Journey — Extensible" 
      subtitle="Efficient tools for coaches and supervisors"
    >
      <div className="space-y-8">
        <div className="text-center text-muted-foreground">
          <em>[Coach Dashboard Mockup Recommended Here]</em>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-subtle border">
          <h3 className="text-xl font-semibold mb-6 text-primary">Coach Features</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dashboard & Task Management</h4>
                <p className="text-sm text-muted-foreground">Coach dashboard for tasks, due dates, and escalations; tasks auto-generated from supervisors or client requests</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Attendance & Check-ins</h4>
                <p className="text-sm text-muted-foreground">Coach attendance/adherence tracking and meeting check-ins</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Team Templates</h4>
                <p className="text-sm text-muted-foreground">Team-specific templates (Yazeed Team, Abu Masoud Team, Rehab/Pro, etc.)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Athlete Summaries & Reports</h4>
                <p className="text-sm text-muted-foreground">Ready summaries per athlete with monthly reports and trends</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Supervisor Console</h4>
                <p className="text-sm text-muted-foreground">Supervisor console to triage issues and push updates to partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProposalSection>,

    // Scope of Work - Partner Journey
    <ProposalSection
      key="scope-partner"
      title="Scope of Work: Partner Journey — Extensible"
      subtitle="Revenue-generating tools for fitness partners"
      backgroundPattern={true}
    >
      <div className="space-y-8">
        <div className="bg-card p-8 rounded-lg shadow-subtle border">
          <h3 className="text-xl font-semibold mb-6 text-primary">Partner Features</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Account Onboarding</h4>
                <p className="text-sm text-muted-foreground">Partner account onboarding with required business/profile data</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Assets Management</h4>
                <p className="text-sm text-muted-foreground">Assets page: exercise media, voice notes, and specific requests</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">AI-Assisted Social Media</h4>
                <p className="text-sm text-muted-foreground">AI-assisted social media section proposing campaigns per partner</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Analytics & Insights</h4>
                <p className="text-sm text-muted-foreground">Analytics highlighting standout trainee segments and KPIs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">•</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Revenue Share</h4>
                <p className="text-sm text-muted-foreground">Automatic monthly revenue-share deduction from the partner account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProposalSection>,

    // Side Utilities
    <ProposalSection
      key="utilities"
      title="Side Utilities — Extensible"
      subtitle="Additional features to enhance the platform"
    >
      <div className="space-y-8">
        <div className="bg-card p-8 rounded-lg shadow-subtle border">
          <h3 className="text-xl font-semibold mb-6 text-primary">Platform Utilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Calendar & Reminders</h4>
                  <p className="text-sm text-muted-foreground">Global calendar and seasonal reminders</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Payment Integration</h4>
                  <p className="text-sm text-muted-foreground">Payments → CRM link; per-partner results files</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Documentation</h4>
                  <p className="text-sm text-muted-foreground">In-app walkthroughs and documentation</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Alumni Reactivation</h4>
                  <p className="text-sm text-muted-foreground">Alumni contact (3 months post-exit) for reactivation flows</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Exclusive Content</h4>
                  <p className="text-sm text-muted-foreground">Exclusive content area per partner to differentiate subscribers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-semibold">•</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bloodwork Parsing</h4>
                  <p className="text-sm text-muted-foreground">AI bloodwork parsing and summaries for coaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CalloutBox type="info">
          <h4 className="font-semibold mb-2">📊 Visual: Platform Ecosystem Diagram</h4>
          <p className="text-sm">
            Comprehensive diagram showing how all utilities integrate with client, coach, and partner journeys
          </p>
        </CalloutBox>
      </div>
    </ProposalSection>,

    // Technical Approach
    <ProposalSection
      key="technical"
      title="Technical Approach"
      subtitle="Cutting-edge architecture for scalable AI coaching"
      backgroundPattern={true}
    >
      <div className="space-y-8">
        <div className="text-center text-muted-foreground">
          <em>[System Architecture Diagram Recommended Here]</em>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">AI Engine Architecture</h3>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Core Language Model</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom-trained transformer model on fitness coaching conversations</li>
                  <li>• Fine-tuned on 10,000+ hours of expert trainer interactions</li>
                  <li>• Continuous learning from user interactions with quality filters</li>
                  <li>• Multi-modal support for text, images, and voice interactions</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Personalization Engine</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time adaptation to user preferences and behavior</li>
                  <li>• Contextual memory spanning entire client relationship</li>
                  <li>• Emotion detection and response optimization</li>
                  <li>• Learning rate adjustment based on client progress</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Knowledge Base</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Comprehensive exercise database with form videos</li>
                  <li>• Nutrition guidelines and meal planning algorithms</li>
                  <li>• Injury prevention and recovery protocols</li>
                  <li>• Coach-specific methodologies and preferences</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Platform Infrastructure</h3>
            
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Mobile Application</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React Native for iOS and Android development</li>
                  <li>• Real-time chat with AI coaching system</li>
                  <li>• Offline workout capability with sync</li>
                  <li>• Integrated camera for form analysis and progress photos</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Backend Services</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Microservices architecture on AWS/Azure</li>
                  <li>• Auto-scaling containers for AI inference</li>
                  <li>• Real-time messaging with WebSocket support</li>
                  <li>• Secure data encryption and HIPAA compliance</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Integration Layer</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Stripe for subscription and payment processing</li>
                  <li>• Wearable device APIs (Apple Health, Google Fit)</li>
                  <li>• Third-party lab integration for bloodwork analysis</li>
                  <li>• Social media sharing and community features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <CalloutBox type="primary">
          <h4 className="font-semibold mb-3">Security & Compliance</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Data Privacy:</strong> End-to-end encryption for all client communications and health data
            </div>
            <div>
              <strong>HIPAA Compliance:</strong> Full compliance for handling sensitive health information
            </div>
            <div>
              <strong>Performance:</strong> Sub-200ms response times with 99.9% uptime SLA
            </div>
          </div>
        </CalloutBox>
      </div>
    </ProposalSection>,

    // Timeline
    <ProposalSection
      key="timeline"
      title="Project Timeline"
      subtitle="Strategic phases for systematic delivery"
    >
      <ProposalTimeline phases={timelinePhases} />
      
      <div className="mt-8">
        <CalloutBox type="info">
          <h4 className="font-semibold mb-3">Timeline Considerations</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Phase Dependencies:</strong> Each phase builds on previous deliverables with some parallel development possible
            </div>
            <div>
              <strong>Quality Gates:</strong> Comprehensive testing and validation before proceeding to next phase
            </div>
            <div>
              <strong>Flexibility:</strong> Timeline can adjust based on feedback and requirements refinement
            </div>
            <div>
              <strong>Early Access:</strong> Beta testing begins in Phase 2 with select coaches and clients
            </div>
          </div>
        </CalloutBox>
      </div>
    </ProposalSection>,

    // Why Us
    <ProposalSection
      key="why-us"
      title="Why Choose Vionex?"
      subtitle="Your trusted partner for AI innovation"
      backgroundPattern={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">Our Expertise</h3>
          <FeatureList 
            features={[
              {
                title: "AI & Machine Learning",
                description: "3+ years developing conversational AI systems with human-like interactions"
              },
              {
                title: "Fitness Industry Knowledge", 
                description: "Deep understanding of coaching methodologies and client psychology"
              },
              {
                title: "Scalable Platform Development",
                description: "Proven track record building apps that scale to millions of users"
              },
              {
                title: "Mobile-First Design",
                description: "Award-winning mobile apps with exceptional user experience"
              }
            ]}
            columns={1}
          />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">Our Commitment</h3>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border shadow-subtle">
              <h4 className="font-semibold mb-3">Dedicated Team</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Full-time team of senior developers, AI specialists, and fitness industry experts
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>• 7 AI Engineers</div>
                <div>• 3 Full-Stack Developers</div>
                <div>• 2 Mobile Specialist</div>
                <div>• 1 Fitness Industry Consultant</div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border shadow-subtle">
              <h4 className="font-semibold mb-3">Quality Assurance</h4>
              <p className="text-sm text-muted-foreground">
                Rigorous testing protocols including automated testing, user acceptance testing, 
                and continuous AI model validation to ensure indistinguishability
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border shadow-subtle">
              <h4 className="font-semibold mb-3">Ongoing Support</h4>
              <p className="text-sm text-muted-foreground">
                6 months post-launch support included, with options for extended maintenance 
                and feature development partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <StatsGrid 
          stats={[
            { value: "15+", label: "Apps Delivered", description: "Cross-platform solutions" },
            { value: "99.9%", label: "Uptime Record", description: "Production systems" },
            { value: "3k+", label: "Active Users", description: "Across our products" },
            { value: "4.8/5", label: "Client Rating", description: "Average satisfaction" }
          ]}
        />
      </div>
    </ProposalSection>,

    // Next Steps
    <ProposalSection
      key="next-steps"
      title="Next Steps"
      subtitle="Ready to transform fitness coaching together"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold mb-2 text-primary">Discovery Workshop</h3>
            <p className="text-sm text-muted-foreground">
              2-day intensive session to define requirements, validate AI approach, and finalize scope
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold mb-2 text-primary">Contract & NDA</h3>
            <p className="text-sm text-muted-foreground">
              Formalize partnership with comprehensive agreements protecting both parties' interests
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-brand">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold mb-2 text-primary">Prototype Development</h3>
            <p className="text-sm text-muted-foreground">
              Begin Phase 1 with AI indistinguishability proof of concept and technical validation
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CalloutBox type="primary">
            <h4 className="font-semibold mb-4">Project Kick-off Package</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Discovery Workshop (2 days):</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>Technical Architecture:</span>
                <span className="font-semibold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>AI Prototype Demo:</span>
                <span className="font-semibold">4-6 days</span>
              </div>
              <div className="flex justify-between">
                <span>Progress Reviews:</span>
                <span className="font-semibold">Weekly</span>
              </div>
            </div>
          </CalloutBox>
          
          <CalloutBox type="success">
            <h4 className="font-semibold mb-4">Success Guarantees</h4>
            <div className="space-y-2 text-sm">
              <div>✓ AI indistinguishability validation or full refund on Phase 1</div>
              <div>✓ Mobile app store approval guarantee</div>
              <div>✓ 99.9% uptime SLA with credits for downtime</div>
              <div>✓ Security audit completion with compliance certification</div>
              <div>✓ 6-month warranty on all deliverables</div>
            </div>
          </CalloutBox>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Ready to Begin?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's schedule your discovery workshop and take the first step toward revolutionizing 
            fitness coaching with indistinguishable AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-card p-4 rounded-lg border shadow-subtle">
              <div className="font-semibold">Schedule Workshop</div>
              <div className="text-sm text-muted-foreground">info@vionex.digital</div>
            </div>
            <div className="bg-card p-4 rounded-lg border shadow-subtle">
              <div className="font-semibold">Email Us</div>
              <div className="text-sm text-muted-foreground">vio@vionex.digital</div>
            </div>
            <div className="bg-card p-4 rounded-lg border shadow-subtle">
              <div className="font-semibold">Call Direct</div>
              <div className="text-sm text-muted-foreground">+20 1098408989</div>
            </div>
          </div>
        </div>
      </div>
    </ProposalSection>,

    // Contact Page
    <ProposalSection
      key="contact"
      title="Contact Information"
      subtitle="Let's bring this vision to life"
      backgroundPattern={true}
    >
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src={vionexLogo} 
          alt="Vionex Logo" 
          className="w-24 h-24 mx-auto mb-8"
        />
        
        <h2 className="text-3xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Vionex Digtal Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="font-semibold mb-4 text-primary">Primary Contact</h3>
            <div className="space-y-2 text-sm">
              <div>Yousef Zaghloul, CEO</div>
              <div>yousef.zaghloul@vionex.digital</div>
              <div>+20 1556916955</div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="font-semibold mb-4 text-primary">Technical Lead</h3>
            <div className="space-y-2 text-sm">
              <div>Mohamed Osama, CTO</div>
              <div>mohamed.osama@vionex.digital</div>
              <div>+20 1098408989</div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="font-semibold mb-4 text-primary">Sales & Partnerships</h3>
            <div className="space-y-2 text-sm">
              <div>VP Sales</div>
              <div>sales@vionex.digital</div>
              <div></div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-primary text-white p-8 rounded-lg shadow-elevation">
          <h3 className="text-2xl font-bold mb-4">Thank You</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We're excited about the opportunity to partner with you in creating the future of AI-powered fitness coaching. 
            This proposal represents our commitment to delivering exceptional results that will transform your business.
          </p>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>© 2025 Vionex Digtal Solutions. All rights reserved.</p>
          <p>This proposal is confidential and proprietary to Vionex Digtal Solutions.</p>
        </div>
      </div>
    </ProposalSection>
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-subtle border p-2 flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <span className="text-sm font-medium px-3">
            {currentPage + 1} / {pages.length}
          </span>
          
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="p-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <button className="p-2 bg-card/80 backdrop-blur-sm rounded-lg shadow-subtle border hover:bg-card transition-colors">
          <Download className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Page Content */}
      <div className="relative">
        {pages[currentPage]}
      </div>

      {/* Page Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-card/80 backdrop-blur-sm rounded-full shadow-subtle border p-2 flex gap-1">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
