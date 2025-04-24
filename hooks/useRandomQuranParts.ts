import { useState, useCallback } from 'react';
import { Platform } from 'react-native';
import { surahs, sampleVerses } from '@/data/surahs';
import * as Haptics from 'expo-haptics';

export interface QuranPart {
  surah: number;
  numero: number;
  name: string;
  arabicName: string;
  content?: string;
  isFullSurah: boolean;
}

export const useRandomQuranParts = () => {
  const [parts, setParts] = useState<QuranPart[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandomParts = useCallback(() => {
    setIsGenerating(true);

    // Trigger haptic feedback on iOS/Android
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    const availableSurahs = surahs
      .map((surah) => surah.number)
      .sort((a, b) => a - b);

    // Select two random, distinct surahs
    const selectedIndices: number[] = [];

    while (selectedIndices.length < 2) {
      const randomIndex = Math.floor(Math.random() * availableSurahs.length);
      if (!selectedIndices.includes(randomIndex)) {
        selectedIndices.push(randomIndex);
      }
    }

    // Sort indices to maintain Quran order
    selectedIndices.sort();

    // Map to surah numbers
    const selectedSurahNumbers = selectedIndices.map(
      (index) => availableSurahs[index]
    );

    const newParts = selectedSurahNumbers.map((surahNumber) => {
      const surahData = surahs.find((s) => s.number === surahNumber);

      if (!surahData) {
        throw new Error(`Surah number ${surahNumber} not found`);
      }

      const isFullSurah = surahNumber >= 100 && surahNumber < 137;

      return {
        surah: surahNumber,
        numero: surahData.numero,
        name: surahData.name,
        arabicName: surahData.arabicName,
        content: isFullSurah
          ? undefined
          : sampleVerses[surahNumber as keyof typeof sampleVerses],
        isFullSurah,
      };
    });

    setParts(newParts);

    // Simulate a slight delay for animation
    setTimeout(() => {
      setIsGenerating(false);
    }, 800);
  }, []);

  return {
    parts,
    isGenerating,
    generateRandomParts,
  };
};
