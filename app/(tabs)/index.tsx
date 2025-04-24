import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  withSequence,
  withDelay,
  Easing
} from 'react-native-reanimated';
import { colors } from '@/constants/colors';
import Header from '@/components/Header';
import QuranCard from '@/components/QuranCard';
import GenerateButton from '@/components/GenerateButton';
import PatternBackground from '@/components/PatternBackground';
import { useRandomQuranParts } from '@/hooks/useRandomQuranParts';

export default function GeneratorScreen() {
  const { parts, isGenerating, generateRandomParts } = useRandomQuranParts();
  
  // Animation values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);
  const buttonOpacity = useSharedValue(0);
  
  useEffect(() => {
    // Initial animations
    opacity.value = withTiming(1, { duration: 800 });
    translateY.value = withTiming(0, { duration: 800 });
    buttonOpacity.value = withDelay(400, withTiming(1, { duration: 600 }));
  }, []);
  
  useEffect(() => {
    if (parts.length > 0 && !isGenerating) {
      // Reset animation values when we have new parts
      opacity.value = 0;
      translateY.value = 20;
      
      // Animate in
      opacity.value = withTiming(1, { duration: 500 });
      translateY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.cubic) });
    }
  }, [parts, isGenerating]);
  
  const animatedCardStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });
  
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });
  
  return (
    <PatternBackground>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <Header 
          title="Quran Random Generator" 
          subtitle="Generate random parts from the Quran"
        />
        
        <ScrollView 
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={[styles.cardsContainer, animatedCardStyle]}>
            {parts.map((part, index) => (
              <QuranCard key={`${part.surah}-${index}`} part={part} index={index} />
            ))}
            
            {parts.length === 0 && (
              <View style={styles.emptyState}>
                <View style={styles.emptyCard}>
                  <View style={styles.emptyCardContent} />
                </View>
                <View style={styles.emptyCard}>
                  <View style={styles.emptyCardContent} />
                </View>
              </View>
            )}
          </Animated.View>
        </ScrollView>
        
        <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
          <GenerateButton onPress={generateRandomParts} isGenerating={isGenerating} />
        </Animated.View>
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
    paddingBottom: 100,
  },
  cardsContainer: {
    marginVertical: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyState: {
    opacity: 0.5,
  },
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    height: 160,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  emptyCardContent: {
    flex: 1,
    backgroundColor: colors.border,
    opacity: 0.3,
    borderRadius: 8,
  },
});