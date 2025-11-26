'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Lock,
  RefreshCw,
  Star,
  ChevronRight,
  MapPin,
  Bed,
  Bath,
  DollarSign,
  Briefcase,
  Building2,
  Clock,
  Heart,
  MessageSquare,
  Eye,
  Phone,
  Mail,
  ThumbsUp,
  Users,
} from 'lucide-react';

// ============================================
// WEBSITE SCENARIO DEFINITIONS
// ============================================

interface WebsiteScenario {
  id: string;
  category: string;
  url: string;
  accentColor: string;
  items: ScenarioItem[];
  fields: string[];
  dataKey: string; // Key for JSON output (e.g., "products", "listings", "jobs")
}

interface ScenarioItem {
  id: number;
  color: string;
  data: Record<string, string | number>;
}

const websiteScenarios: WebsiteScenario[] = [
  // E-COMMERCE
  {
    id: 'ecommerce',
    category: 'E-commerce',
    url: 'techstore.com/products',
    accentColor: '#3B82F6',
    dataKey: 'products',
    fields: ['name', 'price', 'rating', 'stock'],
    items: [
      {
        id: 1,
        color: '#3B82F6',
        data: {
          name: 'Wireless Headphones Pro',
          price: 89.99,
          rating: 4.5,
          stock: 'In Stock',
        },
      },
      {
        id: 2,
        color: '#8B5CF6',
        data: {
          name: 'Smart Watch Ultra',
          price: 299.99,
          rating: 4.8,
          stock: 'Low Stock',
        },
      },
      {
        id: 3,
        color: '#10B981',
        data: {
          name: 'Portable Charger 20K',
          price: 49.99,
          rating: 4.3,
          stock: 'In Stock',
        },
      },
    ],
  },
  // REAL ESTATE
  {
    id: 'realestate',
    category: 'Real Estate',
    url: 'homefinder.com/listings',
    accentColor: '#10B981',
    dataKey: 'listings',
    fields: ['address', 'price', 'beds', 'sqft'],
    items: [
      {
        id: 1,
        color: '#10B981',
        data: {
          address: '742 Evergreen Terrace',
          price: 485000,
          beds: 4,
          sqft: 2400,
        },
      },
      {
        id: 2,
        color: '#059669',
        data: {
          address: '123 Oak Street',
          price: 325000,
          beds: 3,
          sqft: 1850,
        },
      },
      {
        id: 3,
        color: '#047857',
        data: {
          address: '456 Maple Avenue',
          price: 599000,
          beds: 5,
          sqft: 3200,
        },
      },
    ],
  },
  // JOB BOARD
  {
    id: 'jobs',
    category: 'Job Board',
    url: 'jobhunt.io/search',
    accentColor: '#8B5CF6',
    dataKey: 'jobs',
    fields: ['title', 'company', 'salary', 'location'],
    items: [
      {
        id: 1,
        color: '#8B5CF6',
        data: {
          title: 'Senior Software Engineer',
          company: 'TechCorp Inc.',
          salary: '$150k - $180k',
          location: 'San Francisco, CA',
        },
      },
      {
        id: 2,
        color: '#7C3AED',
        data: {
          title: 'Product Manager',
          company: 'StartupXYZ',
          salary: '$130k - $160k',
          location: 'Remote',
        },
      },
      {
        id: 3,
        color: '#6D28D9',
        data: {
          title: 'Data Scientist',
          company: 'AI Solutions',
          salary: '$140k - $175k',
          location: 'New York, NY',
        },
      },
    ],
  },
  // NEWS & SOCIAL
  {
    id: 'news',
    category: 'News & Social',
    url: 'socialfeed.com/trending',
    accentColor: '#EC4899',
    dataKey: 'posts',
    fields: ['headline', 'author', 'engagement', 'timestamp'],
    items: [
      {
        id: 1,
        color: '#EC4899',
        data: {
          headline: 'Breaking: Tech Giants Report Q4 Earnings',
          author: '@techreporter',
          engagement: '12.5K',
          timestamp: '2h ago',
        },
      },
      {
        id: 2,
        color: '#DB2777',
        data: {
          headline: 'New Study Reveals AI Productivity Gains',
          author: '@datascience',
          engagement: '8.2K',
          timestamp: '4h ago',
        },
      },
      {
        id: 3,
        color: '#BE185D',
        data: {
          headline: 'Startup Raises $50M in Series B',
          author: '@vcnews',
          engagement: '5.1K',
          timestamp: '6h ago',
        },
      },
    ],
  },
  // LEAD GENERATION
  {
    id: 'leads',
    category: 'Lead Generation',
    url: 'bizdir.com/search',
    accentColor: '#F59E0B',
    dataKey: 'businesses',
    fields: ['business', 'phone', 'email', 'address'],
    items: [
      {
        id: 1,
        color: '#F59E0B',
        data: {
          business: 'Acme Plumbing Services',
          phone: '(555) 123-4567',
          email: 'info@acmeplumb.com',
          address: '123 Main St, Austin',
        },
      },
      {
        id: 2,
        color: '#D97706',
        data: {
          business: 'Elite Auto Repair',
          phone: '(555) 987-6543',
          email: 'contact@eliteauto.com',
          address: '456 Oak Blvd, Dallas',
        },
      },
      {
        id: 3,
        color: '#B45309',
        data: {
          business: 'Green Lawn Care',
          phone: '(555) 246-8135',
          email: 'hello@greenlawn.com',
          address: '789 Park Ave, Houston',
        },
      },
    ],
  },
  // MARKET RESEARCH
  {
    id: 'reviews',
    category: 'Market Research',
    url: 'reviewhub.com/products',
    accentColor: '#06B6D4',
    dataKey: 'reviews',
    fields: ['product', 'rating', 'sentiment', 'reviewCount'],
    items: [
      {
        id: 1,
        color: '#06B6D4',
        data: {
          product: 'iPhone 15 Pro Max',
          rating: 4.7,
          sentiment: 'Positive',
          reviewCount: 15420,
        },
      },
      {
        id: 2,
        color: '#0891B2',
        data: {
          product: 'Samsung Galaxy S24',
          rating: 4.5,
          sentiment: 'Positive',
          reviewCount: 12350,
        },
      },
      {
        id: 3,
        color: '#0E7490',
        data: {
          product: 'Google Pixel 8',
          rating: 4.4,
          sentiment: 'Mixed',
          reviewCount: 8720,
        },
      },
    ],
  },
];

// ============================================
// MAIN COMPONENT
// ============================================

interface LiveExtractionDemoProps {
  className?: string;
}

export function LiveExtractionDemo({ className }: LiveExtractionDemoProps) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [extractingField, setExtractingField] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState<Record<string, unknown>[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [scannerPosition, setScannerPosition] = useState(0);
  const [showBeam, setShowBeam] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const extractionRef = useRef<boolean>(false);

  const currentScenario = websiteScenarios[scenarioIndex];

  // Run extraction animation for current scenario
  const runExtraction = useCallback(async () => {
    if (extractionRef.current) return;
    extractionRef.current = true;

    const scenario = websiteScenarios[scenarioIndex];
    setIsExtracting(true);
    setExtractedData([]);

    // Extract 2 items per scenario
    for (let itemIdx = 0; itemIdx < Math.min(scenario.items.length, 2); itemIdx++) {
      setCurrentItemIndex(itemIdx);
      setScannerPosition(itemIdx);

      // Scan animation
      await new Promise((r) => setTimeout(r, 500));

      // Extract each field
      for (const field of scenario.fields) {
        setExtractingField(field);
        setShowBeam(true);
        await new Promise((r) => setTimeout(r, 350));

        // Add to extracted data
        setExtractedData((prev) => {
          const newData = [...prev];
          if (!newData[itemIdx]) {
            newData[itemIdx] = {};
          }
          const item = scenario.items[itemIdx];
          newData[itemIdx][field] = item.data[field];
          return newData;
        });

        setShowBeam(false);
        await new Promise((r) => setTimeout(r, 150));
      }

      setExtractingField(null);
      await new Promise((r) => setTimeout(r, 400));
    }

    setIsExtracting(false);

    // Hold for 2 seconds then move to next scenario
    await new Promise((r) => setTimeout(r, 2000));

    // Reset and cycle to next scenario
    setExtractedData([]);
    setCurrentItemIndex(0);
    setScannerPosition(0);
    setScenarioIndex((prev) => (prev + 1) % websiteScenarios.length);

    extractionRef.current = false;
  }, [scenarioIndex]);

  // Auto-cycle through scenarios
  useEffect(() => {
    const timer = setTimeout(() => {
      runExtraction();
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [runExtraction, scenarioIndex]);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Category indicator */}
      <div className="flex items-center justify-center gap-2 mb-4">
        {websiteScenarios.map((scenario, idx) => (
          <motion.div
            key={scenario.id}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              idx === scenarioIndex ? 'w-6' : ''
            )}
            style={{
              backgroundColor: idx === scenarioIndex ? scenario.accentColor : '#3f3f46',
            }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Left: Website Mockup */}
        <div className="relative">
          <WebsiteMockup
            scenario={currentScenario}
            currentItemIndex={currentItemIndex}
            extractingField={extractingField}
            scannerPosition={scannerPosition}
          />

          {/* Extraction beam */}
          <AnimatePresence>
            {showBeam && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-1/2 right-0 h-0.5 z-20"
                style={{
                  width: '50px',
                  transformOrigin: 'left',
                  background: `linear-gradient(to right, ${currentScenario.accentColor}, #0A84FF)`,
                }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Right: JSON Output */}
        <div className="relative">
          <JsonOutput
            extractedData={extractedData}
            isExtracting={isExtracting}
            dataKey={currentScenario.dataKey}
            accentColor={currentScenario.accentColor}
          />
        </div>
      </div>

      {/* Status bar */}
      <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-1.5">
          <div
            className={cn('w-2 h-2 rounded-full', isExtracting && 'animate-pulse')}
            style={{ backgroundColor: isExtracting ? currentScenario.accentColor : '#52525b' }}
          />
          <span>{isExtracting ? `Extracting ${currentScenario.category}...` : 'Ready'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <RefreshCw className={cn('w-3 h-3', isExtracting && 'animate-spin')} />
          <span>Cycling through use cases</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// WEBSITE MOCKUP COMPONENT
// ============================================

interface WebsiteMockupProps {
  scenario: WebsiteScenario;
  currentItemIndex: number;
  extractingField: string | null;
  scannerPosition: number;
}

function WebsiteMockup({
  scenario,
  currentItemIndex,
  extractingField,
  scannerPosition,
}: WebsiteMockupProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scenario.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden"
      >
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800/80 border-b border-zinc-700">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-600" />
            <div className="w-3 h-3 rounded-full bg-zinc-600" />
            <div className="w-3 h-3 rounded-full bg-zinc-600" />
          </div>

          {/* URL bar */}
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 rounded-lg ml-2">
            <Lock className="w-3 h-3 text-emerald-400" />
            <span className="text-xs text-zinc-400 font-mono">{scenario.url}</span>
          </div>

          {/* Category badge */}
          <div
            className="px-2 py-0.5 rounded text-xs font-mono text-white"
            style={{ backgroundColor: scenario.accentColor }}
          >
            {scenario.category}
          </div>
        </div>

        {/* Website Content */}
        <div className="p-4 relative">
          {/* Scanner overlay */}
          <motion.div
            className="absolute left-0 right-0 h-24 pointer-events-none z-10 rounded"
            animate={{
              top: `${scannerPosition * 88 + 8}px`,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: `linear-gradient(to bottom, ${scenario.accentColor}15, transparent)`,
            }}
          />

          {/* Items */}
          <div className="space-y-2">
            {scenario.items.map((item, idx) => (
              <ItemCard
                key={item.id}
                scenario={scenario}
                item={item}
                isActive={idx === currentItemIndex}
                extractingField={idx === currentItemIndex ? extractingField : null}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ============================================
// ITEM CARD COMPONENT
// ============================================

interface ItemCardProps {
  scenario: WebsiteScenario;
  item: ScenarioItem;
  isActive: boolean;
  extractingField: string | null;
}

function ItemCard({ scenario, item, isActive, extractingField }: ItemCardProps) {
  return (
    <motion.div
      className={cn(
        'flex gap-3 p-3 rounded-lg border transition-all duration-300',
        isActive
          ? 'border-opacity-50 bg-zinc-800/50'
          : 'border-zinc-700/50 bg-zinc-800/30'
      )}
      style={{
        borderColor: isActive ? scenario.accentColor : undefined,
      }}
    >
      {/* Image/Icon placeholder */}
      <div
        className={cn(
          'w-14 h-14 rounded-lg flex items-center justify-center text-white transition-all duration-300 flex-shrink-0'
        )}
        style={{
          backgroundColor: item.color,
          boxShadow:
            extractingField === scenario.fields[scenario.fields.length - 1]
              ? `0 0 0 2px ${scenario.accentColor}`
              : undefined,
        }}
      >
        {getScenarioIcon(scenario.id)}
      </div>

      {/* Details - render based on scenario type */}
      <div className="flex-1 min-w-0 space-y-1">
        {renderItemFields(scenario, item, extractingField)}
      </div>

      {/* Arrow */}
      <ChevronRight className="w-4 h-4 text-zinc-600 self-center flex-shrink-0" />
    </motion.div>
  );
}

// Get icon for scenario type
function getScenarioIcon(scenarioId: string) {
  switch (scenarioId) {
    case 'ecommerce':
      return <DollarSign className="w-5 h-5" />;
    case 'realestate':
      return <Building2 className="w-5 h-5" />;
    case 'jobs':
      return <Briefcase className="w-5 h-5" />;
    case 'news':
      return <MessageSquare className="w-5 h-5" />;
    case 'leads':
      return <Phone className="w-5 h-5" />;
    case 'reviews':
      return <ThumbsUp className="w-5 h-5" />;
    default:
      return <Eye className="w-5 h-5" />;
  }
}

// Render fields based on scenario type
function renderItemFields(
  scenario: WebsiteScenario,
  item: ScenarioItem,
  extractingField: string | null
) {
  switch (scenario.id) {
    case 'ecommerce':
      return (
        <>
          <div
            className={cn(
              'text-sm font-medium text-white truncate transition-all duration-300',
              extractingField === 'name' && 'text-blue-400 bg-blue-400/10 px-1 -mx-1 rounded'
            )}
          >
            {item.data.name}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={cn(
                'text-base font-bold text-emerald-400 transition-all duration-300',
                extractingField === 'price' && 'text-blue-400 bg-blue-400/10 px-1 -mx-1 rounded'
              )}
            >
              ${item.data.price}
            </span>
            <span
              className={cn(
                'text-xs text-zinc-500 transition-all duration-300',
                extractingField === 'stock' && 'text-blue-400 bg-blue-400/10 px-1 rounded'
              )}
            >
              {item.data.stock}
            </span>
          </div>
          <div
            className={cn(
              'flex items-center gap-1 transition-all duration-300',
              extractingField === 'rating' && 'bg-blue-400/10 px-1 -mx-1 rounded'
            )}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(item.data.rating as number)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-zinc-600'
                )}
              />
            ))}
            <span className="text-xs text-zinc-400 ml-1">{item.data.rating}</span>
          </div>
        </>
      );

    case 'realestate':
      return (
        <>
          <div
            className={cn(
              'text-sm font-medium text-white truncate transition-all duration-300',
              extractingField === 'address' && 'text-emerald-400 bg-emerald-400/10 px-1 -mx-1 rounded'
            )}
          >
            <MapPin className="w-3 h-3 inline mr-1" />
            {item.data.address}
          </div>
          <div
            className={cn(
              'text-lg font-bold text-emerald-400 transition-all duration-300',
              extractingField === 'price' && 'text-emerald-300 bg-emerald-400/10 px-1 -mx-1 rounded'
            )}
          >
            ${(item.data.price as number).toLocaleString()}
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span
              className={cn(
                'flex items-center gap-1 transition-all duration-300',
                extractingField === 'beds' && 'text-emerald-400 bg-emerald-400/10 px-1 rounded'
              )}
            >
              <Bed className="w-3 h-3" /> {item.data.beds} beds
            </span>
            <span
              className={cn(
                'flex items-center gap-1 transition-all duration-300',
                extractingField === 'sqft' && 'text-emerald-400 bg-emerald-400/10 px-1 rounded'
              )}
            >
              {(item.data.sqft as number).toLocaleString()} sqft
            </span>
          </div>
        </>
      );

    case 'jobs':
      return (
        <>
          <div
            className={cn(
              'text-sm font-medium text-white truncate transition-all duration-300',
              extractingField === 'title' && 'text-purple-400 bg-purple-400/10 px-1 -mx-1 rounded'
            )}
          >
            {item.data.title}
          </div>
          <div
            className={cn(
              'text-xs text-zinc-400 transition-all duration-300',
              extractingField === 'company' && 'text-purple-400 bg-purple-400/10 px-1 -mx-1 rounded'
            )}
          >
            <Building2 className="w-3 h-3 inline mr-1" />
            {item.data.company}
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span
              className={cn(
                'text-emerald-400 font-medium transition-all duration-300',
                extractingField === 'salary' && 'text-purple-400 bg-purple-400/10 px-1 rounded'
              )}
            >
              {item.data.salary}
            </span>
            <span
              className={cn(
                'text-zinc-500 transition-all duration-300',
                extractingField === 'location' && 'text-purple-400 bg-purple-400/10 px-1 rounded'
              )}
            >
              <MapPin className="w-3 h-3 inline" /> {item.data.location}
            </span>
          </div>
        </>
      );

    case 'news':
      return (
        <>
          <div
            className={cn(
              'text-sm font-medium text-white line-clamp-2 transition-all duration-300',
              extractingField === 'headline' && 'text-pink-400 bg-pink-400/10 px-1 -mx-1 rounded'
            )}
          >
            {item.data.headline}
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span
              className={cn(
                'transition-all duration-300',
                extractingField === 'author' && 'text-pink-400 bg-pink-400/10 px-1 rounded'
              )}
            >
              {item.data.author}
            </span>
            <span
              className={cn(
                'flex items-center gap-1 transition-all duration-300',
                extractingField === 'engagement' && 'text-pink-400 bg-pink-400/10 px-1 rounded'
              )}
            >
              <Heart className="w-3 h-3" /> {item.data.engagement}
            </span>
            <span
              className={cn(
                'transition-all duration-300',
                extractingField === 'timestamp' && 'text-pink-400 bg-pink-400/10 px-1 rounded'
              )}
            >
              <Clock className="w-3 h-3 inline" /> {item.data.timestamp}
            </span>
          </div>
        </>
      );

    case 'leads':
      return (
        <>
          <div
            className={cn(
              'text-sm font-medium text-white truncate transition-all duration-300',
              extractingField === 'business' && 'text-amber-400 bg-amber-400/10 px-1 -mx-1 rounded'
            )}
          >
            {item.data.business}
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span
              className={cn(
                'flex items-center gap-1 transition-all duration-300',
                extractingField === 'phone' && 'text-amber-400 bg-amber-400/10 px-1 rounded'
              )}
            >
              <Phone className="w-3 h-3" /> {item.data.phone}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span
              className={cn(
                'flex items-center gap-1 transition-all duration-300',
                extractingField === 'email' && 'text-amber-400 bg-amber-400/10 px-1 rounded'
              )}
            >
              <Mail className="w-3 h-3" /> {item.data.email}
            </span>
          </div>
        </>
      );

    case 'reviews':
      return (
        <>
          <div
            className={cn(
              'text-sm font-medium text-white truncate transition-all duration-300',
              extractingField === 'product' && 'text-cyan-400 bg-cyan-400/10 px-1 -mx-1 rounded'
            )}
          >
            {item.data.product}
          </div>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'flex items-center gap-1 transition-all duration-300',
                extractingField === 'rating' && 'bg-cyan-400/10 px-1 -mx-1 rounded'
              )}
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'w-3 h-3',
                    i < Math.floor(item.data.rating as number)
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-zinc-600'
                  )}
                />
              ))}
              <span className="text-xs text-zinc-400 ml-1">{item.data.rating}</span>
            </div>
            <span
              className={cn(
                'text-xs px-1.5 py-0.5 rounded transition-all duration-300',
                item.data.sentiment === 'Positive'
                  ? 'bg-emerald-400/20 text-emerald-400'
                  : 'bg-amber-400/20 text-amber-400',
                extractingField === 'sentiment' && 'ring-1 ring-cyan-400'
              )}
            >
              {item.data.sentiment}
            </span>
          </div>
          <div
            className={cn(
              'flex items-center gap-1 text-xs text-zinc-400 transition-all duration-300',
              extractingField === 'reviewCount' && 'text-cyan-400 bg-cyan-400/10 px-1 -mx-1 rounded'
            )}
          >
            <Users className="w-3 h-3" /> {(item.data.reviewCount as number).toLocaleString()} reviews
          </div>
        </>
      );

    default:
      return null;
  }
}

// ============================================
// JSON OUTPUT COMPONENT
// ============================================

interface JsonOutputProps {
  extractedData: Record<string, unknown>[];
  isExtracting: boolean;
  dataKey: string;
  accentColor: string;
}

function JsonOutput({ extractedData, isExtracting, dataKey, accentColor }: JsonOutputProps) {
  const jsonObject: Record<string, unknown> = {};
  jsonObject[dataKey] = extractedData;
  const jsonString = JSON.stringify(jsonObject, null, 2);
  const lines = jsonString.split('\n');

  return (
    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-800/80 border-b border-zinc-700">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-emerald-400" />
          <span className="text-xs font-mono text-zinc-400">extracted_data.json</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
          <span style={{ color: isExtracting ? accentColor : '#10B981' }}>
            {extractedData.length} items
          </span>
        </div>
      </div>

      {/* Code content */}
      <div className="p-4 font-mono text-xs overflow-auto max-h-80">
        <pre className="text-zinc-300">
          <AnimatePresence mode="wait">
            <motion.div
              key={dataKey + extractedData.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.015 }}
                  className="leading-relaxed"
                >
                  <span className="text-zinc-600 select-none mr-3">
                    {String(idx + 1).padStart(2, ' ')}
                  </span>
                  <SyntaxHighlight line={line} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </pre>
      </div>
    </div>
  );
}

// Simple syntax highlighting
function SyntaxHighlight({ line }: { line: string }) {
  // Highlight keys
  let highlighted = line.replace(/"([^"]+)":/g, '<span class="text-purple-400">"$1"</span>:');
  // Highlight string values
  highlighted = highlighted.replace(/: "([^"]+)"/g, ': <span class="text-emerald-400">"$1"</span>');
  // Highlight numbers
  highlighted = highlighted.replace(/: (\d+\.?\d*)/g, ': <span class="text-amber-400">$1</span>');
  // Highlight brackets
  highlighted = highlighted.replace(/(\[|\]|\{|\})/g, '<span class="text-zinc-500">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
}

export default LiveExtractionDemo;
