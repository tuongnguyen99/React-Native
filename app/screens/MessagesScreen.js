import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import Screen from '../components/Screen';
import Separator from '../components/lists/Separator';

function MessagesScreen(props) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/tuong.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/tuong.jpg'),
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(
      messages.filter((m) => {
        return m.id != message.id;
      })
    );
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => {
          return (
            <ListItem
              image={item.image}
              title={item.title}
              subTitle={item.description}
              showChevrons
              renderRightActions={() => {
                return (
                  <ListItemDeleteAction
                    onPress={() => {
                      handleDelete(item);
                    }}
                  />
                );
              }}
            />
          );
        }}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/tuong.jpg'),
            },
          ]);
        }}
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
}

export default MessagesScreen;
