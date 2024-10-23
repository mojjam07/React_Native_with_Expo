import { useState } from "react";
import { View, Button, Text, Modal } from "react-native";

export default function ModalExample() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide" // or fade
        // presentationStyle="pageSheet" // for iOS
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
