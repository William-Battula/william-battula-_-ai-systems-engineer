import { Project, Experience, Skill } from '../types/index';
import chatbotImage from '../assets/chatbot.png';
import AgenticRAGimage from '../assets/agentic_rag.png';
import MicroservicesImage from '../assets/microservices.png';

export const INITIAL_SKILLS: Skill[] = [
  // AI & Cloud
  { name: 'Azure AI', category: 'ai_cloud' },
  { name: 'GCP', category: 'ai_cloud' },
  { name: 'AWS', category: 'ai_cloud' },
  { name: 'Hugging Face', category: 'ai_cloud' },
  { name: 'Anthropic API', category: 'ai_cloud' },
  { name: 'Agentic RAG', category: 'ai_cloud' },
  // Languages
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'HTML/CSS', category: 'languages' },
  // Middleware
  { name: 'Oracle WebLogic', category: 'middleware' },
  { name: 'WebSphere', category: 'middleware' },
  { name: 'Apache Tomcat', category: 'middleware' },
  { name: 'IIS Web Server', category: 'middleware' },
  // Tools
  { name: 'Docker', category: 'tools' },
  { name: 'Jenkins', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Kubernetes', category: 'tools' },
  { name: 'NetScaler', category: 'tools' },
  { name: 'Jira', category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Conversational Chatbot',
    description: 'Developed an AI chatbot using fuzzy search (Fuse.js) and Hugging Face models to interpret user inputs and retrieve relevant responses in a conversational format.',
    techStack: ['Python', 'FastAPI', 'Hugging Face', 'Firestore'],
    image: chatbotImage,
  },
  {
    id: '2',
    title: 'Agentic RAG System',
    description: 'Implemented a demo Agentic RAG (Retrieval-Augmented Generation) using Azure Microsoft Foundry resources and services for intelligent document processing.',
    techStack: ['Azure AI', 'Python', 'RAG', 'Vector DB'],
    image: AgenticRAGimage,
    link: 'https://ai.azure.com/nextgen/r/GGLXBbiISuSfzVrGVqKiIQ,rg-ai-demo-agentic-rag,,ms-foundry-ai-demo-agentic-rag,proj-ai-demo-agentic-rag/agents/ebook-agent/preview?version=3',
  },
  {
    id: '3',
    title: 'Microservices Architecture',
    description: 'Designed and deployed critical microservices for AT&T running on Microsoft Azure and using Kubernetes for high-scale telecommunications operations.',
    techStack: ['Java', 'Azure', 'Kubernetes', 'Docker'],
    image: MicroservicesImage,
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'AI Systems Engineer',
    company: 'IT Advanz, LLC / Prism Software Solutions',
    period: 'Dec 2025 - Present',
    description: [
      'Developed an AI chatbot using fuzzy search and Hugging Face models for conversational retrieval.',
      'Built FastAPI backend services to process user requests and manage chatbot logic.',
      'Implemented Anthropic API fallback for low-confidence FAQ matches with logging-based feedback loops.',
      'Utilized GitHub Copilot MCP Server for AI-assisted development (AIAE).'
    ]
  },
  {
    id: '2',
    role: 'Software Systems Engineer',
    company: 'Tech Mahindra (Client: AT&T)',
    period: 'Aug 2013 - Dec 2025',
    description: [
      'Managed critical microservices running on Microsoft Azure and Kubernetes for AT&T FAST BPM.',
      'Handled application environment creation, installation, and configuration of WebLogic domains.',
      'Automated admin tasks using WLST (Java scripting) and configured NetScaler Load Balancers.',
      'Led production support for mission-critical telecom services with Azure monitoring.'
    ]
  },
  {
    id: '3',
    role: 'Senior Middle Tier Engineer',
    company: 'Homeward Residential',
    period: 'Oct 2008 - Aug 2013',
    description: [
      'Performed WebLogic Server administration including installation, configuration, and performance tuning.',
      'Managed migration of application websites from Irvine Data Centre to Addison Data Centre (Project SAHARA).',
      'Configured and administered JDBC Connection Pools and JVM heap size tuning.',
      'Upgraded legacy applications from WebLogic 8.x to 11g.'
    ]
  }
];
