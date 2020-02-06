import React, { createRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Canvas from 'react-native-canvas';
import F2 from '@antv/f2';

export default function App() {
  const canvasRef = createRef<Canvas>();

  useEffect(() => {
    (async () => {
      const data = [
        { name: "芳华", percent: 0.4, a: "1" },
        { name: "妖猫传", percent: 0.2, a: "1" },
        { name: "机器之血", percent: 0.18, a: "1" },
        { name: "心理罪", percent: 0.15, a: "1" },
        { name: "寻梦环游记", percent: 0.05, a: "1" },
        { name: "其他", percent: 0.02, a: "1" }
      ];
      const context = await canvasRef.current.getContext('2d');
      const chart = new F2.Chart({
        context,
        width: 200,
        height: 200,
        padding: [0, "auto", "auto"]
      });
      chart.source(data, {
        percent: {
          formatter(val) {
            return val * 100 + "%";
          }
        }
      });
      // 少了下面这句
      chart.interval().position('name*percent');
      chart.render();
    })();
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app</Text>
      <Canvas ref={canvasRef} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
