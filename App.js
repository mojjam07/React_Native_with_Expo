import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ViewExample from "./core_components/ViewExample";
import TextExample from "./core_components/TextExample";
import ImageExample from "./core_components/ImageExample";
import ScrollViewExample from "./core_components/ScrollViewExample";
import ButtonExample from "./core_components/ButtonExample";
import PressableExample from "./core_components/PressableExample";
import ModalExample from "./core_components/ModalExample";
import StatusBarExample from "./core_components/StatusBarExample";
import ActivityIndicatorExample from "./core_components/ActivityIndicatorExample";
import AlertExample from "./core_components/AlertExample";
import Greet from "./core_components/CustomComponentExample";
import StylingExample from "./stylesheet_API/StylingExample";
import BoxApp from "./LayoutExample/BoxApp";
import FlexDirection from "./LayoutExample/FlexDirection";
import JustifyContent from "./LayoutExample/JustifyContent";
import AlignItems from "./LayoutExample/AlignItems";
import AlignSelf from "./LayoutExample/AlignSelf";
import FlexWrap from "./LayoutExample/FlexWrap";
import AlignContent from "./LayoutExample/AlignContent";
import Gap from "./LayoutExample/Gap";
import FlexBasis from "./LayoutExample/FlexBasis";
import FlexShrink from "./LayoutExample/FlexShrink";
import FlexGrow from "./LayoutExample/FlexGrow";
import RelativeAboluteLayout from "./LayoutExample/RelativeAbsoluteLayout";
import UserInterface from "./DynamicUI/UserInterface";
import DimensionAPI from "./DynamicUI/DimensionAPI";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>

    // Core Components

    // <ViewExample />
    // <TextExample />
    // <ImageExample />
    // <ScrollViewExample />
    // <ButtonExample />
    // <PressableExample />
    // <ModalExample />
    // <StatusBarExample />
    // <ActivityIndicatorExample />
    // <AlertExample />

    // Core Component : Custom Component

    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Greet name="John Doe" />
    //   <Greet name="Clarke Kent" />
    // </View>

    // // StyleSheet API
    // <StylingExample />

    // // Layout
    // <View style={styles.container}>
    //   <Box style={{ backgroundColor: "#8e9b00", flex: 1 }}>Box 1</Box>
    //   <Box style={{ backgroundColor: "#b65d1f", flex: 1 }}>Box 2</Box>
    //   <Box style={{ backgroundColor: "#1c4c56", flex: 1 }}>Box 3</Box>
    //   <Box style={{ backgroundColor: "#ab9156" }}>Box 4</Box>
    //   <Box style={{ backgroundColor: "#1c4c56" }}>Box 5</Box>
    //   <Box style={{ backgroundColor: "#b65d1f" }}>Box 6</Box>
    //   <Box style={{ backgroundColor: "#8e9b00" }}>Box 7</Box>
    //   <Box style={{ backgroundColor: "#b65d1f" }}>Box 8</Box>
    // </View>
    // <BoxApp />
    // <FlexDirection />
    // <JustifyContent />
    // <AlignItems />
    // <AlignSelf />
    // <FlexWrap />
    // <AlignContent />
    // <Gap />
    // <FlexBasis />
    // <FlexShrink />
    // <FlexGrow />
    // <RelativeAboluteLayout />
    // <UserInterface />
    // <DimensionAPI />
    <DimensionApiDrawback />
  );
}
