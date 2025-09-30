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
      duration: "4-6 weeks",
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
      duration: "8-10 weeks",
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
              An AI-powered fitness coaching platform that provides personalized training indistinguishable from human coaches. 
              Our system learns from expert trainers to deliver scalable, 24/7 coaching that adapts to each client's unique needs, 
              goals, and physical condition.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">The Value</h3>
            <p className="text-muted-foreground leading-relaxed">
              This platform transforms how fitness coaching is delivered, allowing expert trainers to scale their knowledge 
              to thousands of clients while maintaining quality and personalization. Partners gain a competitive edge with 
              AI-powered coaching, while clients receive affordable, expert-level guidance.
            </p>
          </div>
        </div>
        
        <div>
          <CalloutBox type="primary">
            <h4 className="font-semibold mb-3">Project Investment</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Development:</span>
                <span className="font-semibold">$180,000</span>
              </div>
              <div className="flex justify-between">
                <span>AI Training:</span>
                <span className="font-semibold">$45,000</span>
              </div>
              <div className="flex justify-between">
                <span>Infrastructure:</span>
                <span className="font-semibold">$25,000</span>
              </div>
              <hr className="border-primary/20" />
              <div className="flex justify-between font-bold">
                <span>Total Investment:</span>
                <span>$250,000</span>
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
                description: "Create AI coaching system that 95% of users cannot distinguish from human trainers in blind tests"
              },
              {
                title: "Multi-Stakeholder Platform", 
                description: "Seamlessly connect clients, coaches, and partners in a unified ecosystem"
              },
              {
                title: "Scalable Revenue Model",
                description: "Enable coaches to scale from 1:1 to 1:1000 client relationships while maintaining quality"
              },
              {
                title: "Data-Driven Personalization",
                description: "Leverage workout data, progress tracking, and biometric analysis for optimal results"
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
        <CalloutBox type="primary">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">AI Must Be Indistinguishable from Human Coaches</h3>
            <p className="text-lg text-muted-foreground">
              This is not just a feature—it's the core value proposition that differentiates us from every other fitness app in the market.
            </p>
          </div>
        </CalloutBox>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">What This Means</h4>
            <FeatureList 
              features={[
                {
                  title: "Natural Conversation",
                  description: "AI responds with human-like empathy, motivation, and coaching intuition"
                },
                {
                  title: "Contextual Memory", 
                  description: "Remembers client preferences, struggles, and progress across all interactions"
                },
                {
                  title: "Adaptive Personality",
                  description: "Matches coaching style to individual client personality and motivation triggers"
                },
                {
                  title: "Emotional Intelligence",
                  description: "Recognizes client mood, energy levels, and motivation to adjust approach"
                }
              ]}
              columns={1}
            />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Technical Requirements</h4>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h5 className="font-semibold mb-2">Advanced Language Model</h5>
                <p className="text-sm text-muted-foreground">Custom-trained LLM on 10,000+ hours of expert coaching sessions</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h5 className="font-semibold mb-2">Behavioral Analysis</h5>
                <p className="text-sm text-muted-foreground">Real-time analysis of client communication patterns and preferences</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h5 className="font-semibold mb-2">Continuous Learning</h5>
                <p className="text-sm text-muted-foreground">AI improves from every interaction while maintaining coach consistency</p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h5 className="font-semibold mb-2">Quality Assurance</h5>
                <p className="text-sm text-muted-foreground">Regular blind testing with real users to validate indistinguishability</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <CalloutBox type="warning">
            <h4 className="font-semibold mb-2">Critical Success Factor</h4>
            <p>If clients can easily identify they're talking to AI, the entire value proposition fails. 
            Every technical decision must be evaluated against this core requirement.</p>
          </CalloutBox>
        </div>
      </div>
    </ProposalSection>,

    // Scope of Work - Client Journey
    <ProposalSection
      key="scope-client"
      title="Scope of Work: Client Journey"
      subtitle="Seamless experience from subscription to results"
      backgroundPattern={true}
    >
      <div className="space-y-8">
        <div className="text-center text-muted-foreground">
          <em>[User Journey Flow Diagram Recommended Here]</em>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="text-lg font-semibold mb-4 text-primary">Onboarding & Setup</h3>
            <FeatureList 
              features={[
                {
                  title: "Goal Assessment",
                  description: "AI-guided questionnaire to understand fitness goals, experience level, and preferences"
                },
                {
                  title: "Health Screening",
                  description: "Medical history, injury assessment, and physical limitations evaluation"
                },
                {
                  title: "Coach Matching", 
                  description: "AI pairs client with coaching personality that matches their motivation style"
                },
                {
                  title: "Subscription Plans",
                  description: "Flexible pricing tiers with different levels of AI coaching intensity"
                }
              ]}
              columns={1}
            />
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="text-lg font-semibold mb-4 text-primary">Daily Interactions</h3>
            <FeatureList 
              features={[
                {
                  title: "AI Coaching Chat",
                  description: "24/7 conversational coaching that feels completely human and personalized"
                },
                {
                  title: "Smart Reminders",
                  description: "Contextual workout and nutrition reminders based on schedule and progress"
                },
                {
                  title: "Progress Tracking",
                  description: "Photo uploads, measurements, and performance data with AI analysis"
                },
                {
                  title: "Injury Prevention",
                  description: "Real-time form feedback and recovery recommendations"
                }
              ]}
              columns={1}
            />
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="text-lg font-semibold mb-4 text-primary">Advanced Features</h3>
            <FeatureList 
              features={[
                {
                  title: "Bloodwork Analysis",
                  description: "Upload lab results for personalized nutrition and supplement recommendations"
                },
                {
                  title: "Exclusive Content",
                  description: "Access to coach-created workout libraries and educational materials"
                },
                {
                  title: "Community Integration",
                  description: "Connect with other clients following similar coaches and programs"
                },
                {
                  title: "Wearable Sync",
                  description: "Integration with fitness trackers for comprehensive health monitoring"
                }
              ]}
              columns={1}
            />
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
      title="Scope of Work: Coach Journey" 
      subtitle="Empowering trainers to scale their expertise"
    >
      <div className="space-y-8">
        <div className="text-center text-muted-foreground">
          <em>[Coach Dashboard Mockup Recommended Here]</em>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Coach Dashboard</h3>
            <FeatureList 
              features={[
                {
                  title: "AI Training Interface",
                  description: "Tools to train AI on coaching style, methodologies, and client interaction preferences"
                },
                {
                  title: "Client Portfolio Management",
                  description: "Overview of all AI-coached clients with progress summaries and key metrics"
                },
                {
                  title: "Content Creation Tools",
                  description: "Create workout templates, educational content, and coaching scripts for AI use"
                },
                {
                  title: "Performance Analytics",
                  description: "Detailed insights into client success rates, engagement, and retention metrics"
                },
                {
                  title: "Revenue Tracking",
                  description: "Real-time earnings dashboard with subscription and commission breakdowns"
                },
                {
                  title: "Quality Control",
                  description: "Review AI interactions, provide feedback, and maintain coaching standards"
                }
              ]}
              columns={1}
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Coach Tools & Features</h3>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">AI Personality Customization</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Define coaching voice, motivation style, and client interaction approach
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Motivational</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Analytical</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Supportive</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Direct</span>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Workout Template Builder</h4>
                <p className="text-muted-foreground text-sm">
                  Create reusable workout templates with exercise variations, progressions, and modifications
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border shadow-subtle">
                <h4 className="font-semibold mb-3 text-primary">Client Intervention System</h4>
                <p className="text-muted-foreground text-sm">
                  Receive alerts for clients needing human intervention and seamlessly take over conversations
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <CalloutBox type="success">
          <h4 className="font-semibold mb-3">Coach Benefits</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Revenue Scaling</h5>
              <p className="text-sm text-muted-foreground">
                Transform from 1:1 coaching ($50-100/session) to 1:1000 AI coaching with passive income potential
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">Brand Building</h5>
              <p className="text-sm text-muted-foreground">
                Build personal brand through AI that represents coaching style to thousands of clients
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">Data Insights</h5>
              <p className="text-sm text-muted-foreground">
                Access unprecedented data on what coaching methods work best for different client types
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-2">Time Freedom</h5>
              <p className="text-sm text-muted-foreground">
                Focus on high-value activities while AI handles routine coaching interactions
              </p>
            </div>
          </div>
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
                description: "5+ years developing conversational AI systems with human-like interactions"
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
                <div>• 2 AI Engineers</div>
                <div>• 3 Full-Stack Developers</div>
                <div>• 1 Mobile Specialist</div>
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
            { value: "50+", label: "Apps Delivered", description: "Cross-platform solutions" },
            { value: "99.9%", label: "Uptime Record", description: "Production systems" },
            { value: "15M+", label: "Active Users", description: "Across our platforms" },
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
                <span className="font-semibold">4-6 weeks</span>
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
              <div className="text-sm text-muted-foreground">calendly.com/vionex-discovery</div>
            </div>
            <div className="bg-card p-4 rounded-lg border shadow-subtle">
              <div className="font-semibold">Email Us</div>
              <div className="text-sm text-muted-foreground">projects@vionex.com</div>
            </div>
            <div className="bg-card p-4 rounded-lg border shadow-subtle">
              <div className="font-semibold">Call Direct</div>
              <div className="text-sm text-muted-foreground">(555) 123-VIONEX</div>
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
          Vionex Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="font-semibold mb-4 text-primary">Primary Contact</h3>
            <div className="space-y-2 text-sm">
              <div>John Smith, Project Director</div>
              <div>john.smith@vionex.com</div>
              <div>(555) 123-4567</div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="font-semibold mb-4 text-primary">Technical Lead</h3>
            <div className="space-y-2 text-sm">
              <div>Sarah Johnson, CTO</div>
              <div>sarah.johnson@vionex.com</div>
              <div>(555) 123-4568</div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-subtle border">
            <h3 className="font-semibold mb-4 text-primary">Sales & Partnerships</h3>
            <div className="space-y-2 text-sm">
              <div>Mike Rodriguez, VP Sales</div>
              <div>mike.rodriguez@vionex.com</div>
              <div>(555) 123-4569</div>
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
          <p>© 2024 Vionex Technologies. All rights reserved.</p>
          <p>This proposal is confidential and proprietary to Vionex Technologies.</p>
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
