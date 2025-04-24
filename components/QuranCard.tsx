import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QuranPart } from '@/hooks/useRandomQuranParts';
import { colors } from '@/constants/colors';

interface QuranCardProps {
  part: QuranPart;
  index: number;
}

export default function QuranCard({ part, index }: QuranCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.cardTitle}>Rak'aa {index + 1}</Text>
        <Text style={styles.surahInfo}>
          Surah {part.name} ({part.numero})
        </Text>
      </View>

      <View style={styles.contentContainer}>
        {part.isFullSurah ? (
          <View style={styles.fullSurahContainer}>
            <Text style={styles.arabicFullSurah}>{part.arabicName}</Text>
            <Text style={styles.fullSurahNote}>Full Surah</Text>
          </View>
        ) : (
          <View style={styles.mushafContainer}>
            <Text style={styles.arabicContent}>{part.content}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  surahInfo: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
  },
  contentContainer: {
    minHeight: 100,
    justifyContent: 'center',
  },
  mushafContainer: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 16,
    minHeight: 60,
  },
  arabicContent: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'right',
    fontFamily: 'ScheherazadeNew-Regular',
    color: colors.textPrimary,
  },
  fullSurahContainer: {
    alignItems: 'center',
    padding: 16,
  },
  arabicFullSurah: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Amiri-Bold',
    color: colors.primary,
    marginBottom: 8,
  },
  fullSurahNote: {
    fontSize: 14,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
});
