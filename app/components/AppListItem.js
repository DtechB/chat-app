import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

function AppListItem({ id, chatName, enterChat }) {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://atahlil.com/wp-content/uploads/2021/03/avatar-portrait-a-man-in-a-suit-vector-22999971.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "700" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          jdnjsvnjdvnskdjvnsv jsndvkjsdkvjsnd sdjnvdjsvndksdvjn
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppListItem;
