import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '@/constants/colors';
import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, Easing } from 'react-native-reanimated';

interface GenerateButtonProps {
  onPress: () => void;
  isGenerating: boolean;
}

export default function GenerateButton({ onPress, isGenerating }: GenerateButtonProps) {
  const scale = useSharedValue(1);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  const handlePress = () => {
    // Button press animation
    scale.value = withSequence(
      withTiming(0.95, { duration: 100, easing: Easing.inOut(Easing.ease) }),
      withTiming(1, { duration: 100, easing: Easing.inOut(Easing.ease) })
    );
    
    // Call the actual onPress handler
    onPress();
  };
  
  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        disabled={isGenerating}
        activeOpacity={0.7}
      >
        {isGenerating ? (
          <ActivityIndicator color={colors.textLight} size="small" />
        ) : (
          <Text style={styles.buttonText}>Generate Random Parts</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: colors.secondaryDark,
  },
  buttonText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});