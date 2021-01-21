import React,{useState,useEffect} from "react";
import { View, StyleSheet, Image, TouchableOpacity, Modal,Dimensions } from "react-native";

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Button,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import ImagePicker from "react-native-image-crop-picker";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default function DrawerContent({ navigation }, props) {
  const [image, setImage] = useState(
    "https://img4.thuthuatphanmem.vn/uploads/2020/05/13/hinh-anh-anime-nu-ngau-dep-nhat_020159971.jpg"
  );
  const [visible,setVisible]= useState({show:false})
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     compressImageMaxWidth: 300,
  //     compressImageMaxHeight: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //     this.bs.current.snapTo(1);
  //   });
  // }

  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7
  //   }).then(image => {
  //     console.log(image);
  //     setImage(image.path);
  //     this.bs.current.snapTo(1);
  //   });
  // }
  return (
    // <View style={{ flex: 1, backgroundColor:"#BED0A2" }}>
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Modal transparent={true} visible={visible.show}>
              <View
                style={{
                  backgroundColor: "#000000aa",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 10,
                    top: 15,
                  }}
                  onPress={() => {
                    setVisible({ show: false });
                  }}
                >
                 <Ionicons name="close" size={40} color="black" />
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "#f7f8f9",
                    margin: 50,
                    width: WIDTH * 0.85,
                    height: HEIGHT * 0.4,
                    padding: 25,
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    style={styles.panelButton}
                    onPress={pickImage}
                  >
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    style={styles.panelButton}
                    onPress={choosePhotoFromLibrary}
                  >
                    <Text style={styles.panelButtonTitle}>
                      Choose From Library
                    </Text>
                  </TouchableOpacity> */}
                </View>
              </View>
            </Modal>
            <TouchableOpacity
              onPress={() => navigation.closeDrawer()}
              style={{ width: 50, textAlign: "center", marginTop: 10 }}
            >
              <Ionicons name="close" size={40} color="black" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#f7f7f7",
                height: 120,
                marginTop: 10,
              }}
            >
              <TouchableOpacity onPress={()=>{setVisible({show:true})}}>
                <Image
                  source={{
                    uri:
                    image,
                  }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    marginLeft: 20,
                    marginTop: 20,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                  marginTop: 30,
                }}
              >
                <Title style={styles.title}>Quốc</Title>
                <Caption style={styles.caption}>@ht12345</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="home" size={25} color="black" />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate("home");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {},
  title: {
    fontSize: 18,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 15,
    color: "black",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
