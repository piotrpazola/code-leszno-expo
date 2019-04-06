// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  CodePane,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  logoWebtrip: require('../assets/webtrip.jpg'),
  codeleszno: require('../assets/codeleszno.png'),
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    /* ustawic te kolory zgodnie z kolorami webtrip */
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    code: '#1e1e1e'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={750}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary"></Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtrip} />
          </div>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Expo - React Native
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
              czyli przełam się i oswój aplikacje mobilne
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} color="white" textColor="secondary">Mięsitny kod na początek</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtrip} />
          </div>
          <CodePane source="import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class App extends React.Component {
  state = {
   hasCameraPermission: null,
 }
 async componentDidMount() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({ hasCameraPermission: status === 'granted' });
}
handleBarCodeScanned = ({ type, data }) => {
  alert(`Bar code with type ${type} and data ${data} has been scanned!`);
}
" lang="js" style={{fontSize: '28px'}}/>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} color="white" textColor="secondary">Mięsitny kod na początek</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtrip} />
          </div>
          <CodePane source="
  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    " lang="js" style={{fontSize: '28px'}}/>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane source="<Deck
            transition={['zoom', 'slide']}
            transitionDuration={500}
            theme={theme}
          >" lang="js" style={{fontSize: '32px'}}/>
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
