import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import type { QuoteState, PriceEstimate } from './types';
import { PROJECT_TYPES, COMPLEXITY_OPTIONS, TIMELINE_OPTIONS } from './constants';
import { formatPrice, getFeatureNames } from './pricing';

// Register fonts (using system fonts as fallback)
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiJ-Ek-_EeA.woff2', fontWeight: 700 },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#1a1a1a',
  },
  header: {
    marginBottom: 30,
    borderBottom: '2 solid #0A84FF',
    paddingBottom: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    color: '#0A84FF',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 10,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 8,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    color: '#0A84FF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  label: {
    width: 140,
    color: '#666',
  },
  value: {
    flex: 1,
    fontWeight: 600,
  },
  priceBox: {
    backgroundColor: '#0A84FF',
    padding: 20,
    borderRadius: 8,
    marginBottom: 24,
  },
  priceLabel: {
    color: 'white',
    fontSize: 12,
    marginBottom: 4,
    opacity: 0.9,
  },
  priceValue: {
    color: 'white',
    fontSize: 28,
    fontWeight: 700,
  },
  priceTimeline: {
    color: 'white',
    fontSize: 11,
    marginTop: 8,
    opacity: 0.9,
  },
  featureList: {
    marginTop: 8,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
  },
  featureBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0A84FF',
    marginRight: 8,
  },
  featureText: {
    flex: 1,
  },
  breakdownTable: {
    marginTop: 12,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottom: '1 solid #eee',
  },
  breakdownLabel: {
    color: '#666',
  },
  breakdownValue: {
    fontWeight: 600,
  },
  breakdownTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginTop: 8,
    borderTop: '2 solid #1a1a1a',
  },
  totalLabel: {
    fontWeight: 700,
    fontSize: 12,
  },
  totalValue: {
    fontWeight: 700,
    fontSize: 12,
    color: '#0A84FF',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    borderTop: '1 solid #eee',
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 9,
    color: '#999',
  },
  contactBox: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginTop: 12,
  },
  nextSteps: {
    marginTop: 12,
  },
  stepItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepNumber: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0A84FF',
    color: 'white',
    textAlign: 'center',
    lineHeight: 20,
    marginRight: 10,
    fontSize: 10,
    fontWeight: 600,
  },
  stepText: {
    flex: 1,
    paddingTop: 2,
  },
  disclaimer: {
    fontSize: 8,
    color: '#999',
    marginTop: 20,
    lineHeight: 1.4,
  },
});

interface QuotePDFProps {
  state: QuoteState;
  estimate: PriceEstimate;
  quoteId: string;
}

export function QuotePDF({ state, estimate, quoteId }: QuotePDFProps) {
  const projectType = PROJECT_TYPES.find((p) => p.id === state.projectType);
  const complexity = COMPLEXITY_OPTIONS.find((c) => c.id === state.complexity);
  const timeline = TIMELINE_OPTIONS.find((t) => t.id === state.timeline);
  const featureNames = getFeatureNames(state.features);
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Princeton AI Partners</Text>
          <Text style={styles.tagline}>Custom Software Built for You</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Project Quote & Brief</Text>
        <Text style={styles.subtitle}>
          Prepared for {state.contact.firstName} {state.contact.lastName}
          {state.contact.company && ` at ${state.contact.company}`} • {date}
        </Text>

        {/* Price Box */}
        <View style={styles.priceBox}>
          <Text style={styles.priceLabel}>Estimated Investment</Text>
          <Text style={styles.priceValue}>
            {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
          </Text>
          <Text style={styles.priceTimeline}>
            Estimated delivery: {estimate.timeline.minWeeks}-{estimate.timeline.maxWeeks} weeks
          </Text>
        </View>

        {/* Project Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Overview</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Project Type:</Text>
            <Text style={styles.value}>{projectType?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Complexity:</Text>
            <Text style={styles.value}>{complexity?.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Timeline:</Text>
            <Text style={styles.value}>{timeline?.name} ({timeline?.duration})</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Quote ID:</Text>
            <Text style={styles.value}>{quoteId}</Text>
          </View>
          {state.contact.description && (
            <View style={[styles.row, { marginTop: 8 }]}>
              <Text style={styles.label}>Description:</Text>
              <Text style={styles.value}>{state.contact.description}</Text>
            </View>
          )}
        </View>

        {/* Features Included */}
        {featureNames.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features Included</Text>
            <View style={styles.featureList}>
              {featureNames.map((name) => (
                <View key={name} style={styles.featureItem}>
                  <View style={styles.featureBullet} />
                  <Text style={styles.featureText}>{name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Price Breakdown */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price Breakdown</Text>
          <View style={styles.breakdownTable}>
            <View style={styles.breakdownRow}>
              <Text style={styles.breakdownLabel}>
                Base ({projectType?.name}, {complexity?.name})
              </Text>
              <Text style={styles.breakdownValue}>
                {formatPrice(estimate.breakdown.base)}
              </Text>
            </View>
            {estimate.breakdown.features > 0 && (
              <View style={styles.breakdownRow}>
                <Text style={styles.breakdownLabel}>Feature Add-ons</Text>
                <Text style={styles.breakdownValue}>
                  +{formatPrice(estimate.breakdown.features)}
                </Text>
              </View>
            )}
            {estimate.breakdown.timelineAdjustment !== 0 && (
              <View style={styles.breakdownRow}>
                <Text style={styles.breakdownLabel}>
                  Timeline Adjustment ({timeline?.name})
                </Text>
                <Text style={styles.breakdownValue}>
                  {estimate.breakdown.timelineAdjustment > 0 ? '+' : ''}
                  {formatPrice(estimate.breakdown.timelineAdjustment)}
                </Text>
              </View>
            )}
            <View style={styles.breakdownTotal}>
              <Text style={styles.totalLabel}>Total Estimate</Text>
              <Text style={styles.totalValue}>
                {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
              </Text>
            </View>
          </View>
        </View>

        {/* Next Steps */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next Steps</Text>
          <View style={styles.nextSteps}>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>1</Text>
              <Text style={styles.stepText}>
                Schedule a discovery call to discuss your project in detail
              </Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>2</Text>
              <Text style={styles.stepText}>
                We'll prepare a detailed scope document and proposal
              </Text>
            </View>
            <View style={styles.stepItem}>
              <Text style={styles.stepNumber}>3</Text>
              <Text style={styles.stepText}>
                Once approved, we'll begin development with weekly updates
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <View style={styles.contactBox}>
            <View style={styles.row}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>hello@princeton-ai.com</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Website:</Text>
              <Text style={styles.value}>princeton-ai.com</Text>
            </View>
          </View>
        </View>

        {/* Disclaimer */}
        <Text style={styles.disclaimer}>
          This quote is an estimate based on the information provided and is valid for 30 days.
          Final pricing may vary based on detailed requirements discovered during the discovery phase.
          All prices are in USD.
        </Text>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Quote ID: {quoteId}</Text>
          <Text style={styles.footerText}>Generated on {date}</Text>
        </View>
      </Page>
    </Document>
  );
}
