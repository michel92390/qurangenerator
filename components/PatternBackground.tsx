import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@/constants/colors';

interface PatternBackgroundProps {
  children: React.ReactNode;
}

export default function PatternBackground({ children }: PatternBackgroundProps) {
  return (
    <View style={styles.container}>
      <View style={styles.pattern} />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    backgroundColor: colors.primary,
    // This is a workaround for a simple pattern
    // In a production app, you might use an actual pattern image
    borderWidth: 20,
    borderColor: colors.primary,
    borderRadius: 2,
    margin: 20,
  },
  content: {
    flex: 1,
  },
});