// import React, {useState} from 'react';
// import {View, Text, Linking, Dimensions, StyleSheet} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import ModalWebView from '../components/ModalWebView';

// export default function QRCodeScreen() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [success, setSuccess] = useState(null);
//   const [url, setUrl] = useState('');

//   function openLink = () => {
//     Linking.openURL(url).catch((err) => alert('An error occured', err));
//     setSuccess({success: false});
//   };

//   function handleButton = () => {
//     setModalVisible({modalVisible: !modalVisible, success: false});
//     scanner.reactivate();
//   };

//   function onSuccess = async (e) => {
//     await setSuccess({success: true, modalVisible: true, url: e.data});
//   };

//   return (
//     <View style={styles.container}>
//       <QRCodeScanner
//         onRead={onSuccess}
//         showMarker={true}
//         checkAndroid6Permissions={true}
//         ref={(elem) => {
//           scanner = elem;
//         }}
//         cameraStyle={styles.cameraContainer}
//         bottomContent={
//           <View style={styles.touchable}>
//             {success && <Text style={styles.text}>OK. Got it!</Text>}
//           </View>
//         }
//       />

//       <ModalWebView
//         handleButton={handleButton}
//         modalVisible={modalVisible}
//         url={url}
//         openLink={openLink}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },

//   touchable: {
//     padding: 16,
//   },

//   text: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },

//   cameraContainer: {
//     height: Dimensions.get('window').height,
//   },
// });
