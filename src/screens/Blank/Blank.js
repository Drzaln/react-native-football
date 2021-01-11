import React from 'react'
import { Animated, Easing, StyleSheet, Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Svg, { Circle, G } from 'react-native-svg'

const data = [{
    percentage: 75,
    color: '#FFC93C',
    max: 100
  }]

const Blank = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingVertical: 16,
				backgroundColor: '#030610',
				justifyContent: 'center',
                alignItems: 'center',
                flex: 1
			}}
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<Text style={{ fontFamily: 'JuventusFans-Bold', color: '#3E4346', fontSize: 64 }}>J</Text>
            {/* {data.map((p, i) => {
                return <Donut key={i} percentage={p.percentage} color={p.color} delay={500 + 100 * i} max={p.max} strokeWidth={6} radius={40} />
            })} */}
		</ScrollView>
	)
}

export default Blank

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Donut = ({
    percentage = 75,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = "tomato",
    delay = 0,
    textColor,
    max = 100
  }) => {
    const animated = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef();
    const inputRef = React.useRef();
    const circumference = 2 * Math.PI * radius;
    const halfCircle = radius + strokeWidth;
  
    const animation = (toValue) => {
      return Animated.timing(animated, {
        delay: 2000,
        toValue,
        duration,
        useNativeDriver: true,
      }).start();
    };
  
    React.useEffect(() => {
      animation(percentage);
      animated.addListener((v) => {
        const maxPerc = 100 * v.value / max;
        const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${Math.round(v.value)}%`,
          });
        }
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      }, [max, percentage]);
  
      return () => {
        animated.removeAllListeners();
      };
    });
  
    return (
      <View style={{ width: radius * 2, height: radius * 2 }}>
        <Svg
          height={radius * 2}
          width={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
          <G
            rotation="-90"
            origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              ref={circleRef}
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="square"
              strokeDashoffset={circumference}
              strokeDasharray={circumference}
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeOpacity=".1"
            />
          </G>
        </Svg>
        <AnimatedTextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          style={[
            StyleSheet.absoluteFillObject,
            { fontSize: radius / 2, color: textColor ?? color },
            styles.text,
          ]}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: { fontWeight: '900', textAlign: 'center' },
  });
  