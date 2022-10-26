import React, {useState} from 'react';

import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import {User} from './data';

import {useDispatch, useSelector} from 'react-redux';

// import {AsyncStorage, SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {addTodo, removeTodo} from '../redux/reducer/TodoSLice';

const Home = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const [todoText, setTodoText] = useState('');
  const [showModal, setShowModal] = useState(false);
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     text: 'this is mame of the low lorem lorem  loremlore mlo remlo reml oremlore mlorem loremlo remlorem',
  //   },
  //   {id: 2, text: 'this is mame of the low'},
  // ]);

  const {todoList} = useSelector(state => state.todoSlice);

  const toggleModal = (text) => {
     setShowModal(true);
    setTodoText(text)
  };

  const submit = () => {
    dispatch(addTodo(todo));
    setTodo('');
  };

  const deleteTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <View>
      <Container
        // justifyContent={'center'}
        mx="auto"
        w={'100%'}
        mt={2}>
        <ScrollView h="80%" w="100%">
          <Box>
            {todoList.map((data, i) => (
              <Pressable
                key={i}
                bg={'#fff'}
                borderBottom={5}
                px={4}
                // h="16"
                // w="100%"
                py="2"
                zIndex={0}
                borderBottomWidth={1}
                borderColor={'purple.300'}
                flexDirection="row"
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Pressable
                  flexDirection="row"
                  onPress={()=>toggleModal(data.text)}
                  alignItems={'center'}>
                  <View w={'85%'}>
                    <Text color={'purple.600'} fontSize={18}>
                      {data.text}
                    </Text>
                  </View>
                </Pressable>
                <View>
                  <Icon
                    onPress={() => deleteTodo(data.id)}
                    as={<MaterialIcons name="delete" />}
                    color="red.400"
                    size={6}></Icon>
                </View>
              </Pressable>
            ))}
          </Box>
        </ScrollView>
      </Container>
      <Modal isVisible={showModal}>
        <View position={'relative'} style={{flex: 1}}>
          <Pressable
            // bg={'amber.300'}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            h="100%"
            style={{
              elevation: 0, //remove shadow on Android
              shadowOpacity: 0.1, //remove shadow on iOS
            }}
            onPress={() => setShowModal(false)}></Pressable>
          <Box bg={'white'} px={8} py={4} justifyContent="center" m="auto">
            <Text>{todoText}</Text>
          </Box>
        </View>
      </Modal>


      {/* input box  */}
      <Box
        position={'absolute'}
        justifyContent="center"
        display={'flex'}
        bottom="0">
        <VStack>
          <Flex direction="row" m="1.5" justifyContent={'center'}>
            <Input
              placeholder="Add todo hehehe"
              w="70%"
              mr="2"
              rounded={6}
              borderColor="purple.200"
              focusOutlineColor={"purple.500"}
              value={todo}
              onChangeText={val => setTodo(val)}
            />
            <Button
              onPress={() => submit()}
              size="md"
              w="25%"
              color={'white'}
              bg={'purple.500'}>
              Add
            </Button>
          </Flex>
        </VStack>
      </Box>
    </View>
  );
};

export default Home;
