import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Book } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import Header from '@/components/Header';
import PatternBackground from '@/components/PatternBackground';

export default function AboutScreen() {
  return (
    <PatternBackground>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <Header 
          title="About"
          subtitle="How this app works"
        />
        
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Book size={28} color={colors.primary} />
            </View>
            
            <Text style={styles.title}>Random Quran Parts Generator</Text>
            
            <Text style={styles.paragraph}>
              This application helps you generate two random parts from the Quran for your reading and study.
            </Text>
            
            <View style={styles.ruleContainer}>
              <Text style={styles.ruleTitle}>How It Works:</Text>
              
              <Text style={styles.rule}>
                1. The app generates two random parts from Surahs 58-114 of the Quran.
              </Text>
              
              <Text style={styles.rule}>
                2. The parts are always presented in the order they appear in the Quran.
              </Text>
              
              <Text style={styles.rule}>
                3. For Surahs 78-114, the entire Surah is selected and only its name is displayed.
              </Text>
              
              <Text style={styles.rule}>
                4. For Surahs 58-77, a part not exceeding half a page is selected and its content is displayed.
              </Text>
            </View>
            
            <Text style={styles.paragraph}>
              Use this app as a way to incorporate more Quran reading into your daily routine or as a method to diversify your study.
            </Text>
            
            <Text style={styles.disclaimer}>
              Note: This is a simplified version. For accurate Quran text and interpretation, please refer to complete Quran resources.
            </Text>
          </View>
          
          <TouchableOpacity style={styles.usageCard}>
            <Text style={styles.usageTitle}>How to Use</Text>
            <Text style={styles.usageText}>
              Simply press the "Generate Random Parts" button at the bottom of the main screen to generate two random parts from the Quran. The app will display the parts according to the rules mentioned above.
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </PatternBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textPrimary,
    marginBottom: 16,
  },
  ruleContainer: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  ruleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  rule: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textPrimary,
    marginBottom: 8,
    paddingLeft: 8,
  },
  disclaimer: {
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  usageCard: {
    backgroundColor: colors.primaryLight,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  usageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textLight,
    marginBottom: 8,
  },
  usageText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textLight,
  },
});