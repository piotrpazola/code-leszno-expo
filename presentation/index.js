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
  logoWebtripBiale: require('../assets/webtrip-logo-biale.png'),
  logoWebtripCzarne: require('../assets/webtrip-logo-czarne.png'),
  fejs: require('../assets/fejs.jpg'),
  mapaJs: require('../assets/mapa-js.png'),
};

const code = {
  code0101: require('raw-loader!../assets/code/listing0101.code'),
  code0102: require('raw-loader!../assets/code/listing0102.code'),
  code0103: require('raw-loader!../assets/code/listing0103.code'),
  code0201: require('raw-loader!../assets/code/listing0201.code'),
  code0202: require('raw-loader!../assets/code/listing0202.code'),
  code0203: require('raw-loader!../assets/code/listing0203.code'),
  code0301: require('raw-loader!../assets/code/listing0301.code'),
  code0302: require('raw-loader!../assets/code/listing0302.code'),
  code0303: require('raw-loader!../assets/code/listing0303.code'),
}

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    /* ustawic te kolory zgodnie z kolorami webtrip */
    secondary: '#1F2022',
    tertiary: '#ed1941',
    quaternary: '#ed1941',
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
        transition={['zoom', 'slide', 'spin']}
        transitionDuration={750}
        theme={theme}
        contentWidth="85%"
        progress="pacman"
        showFullscreenControl={false}
      >

        <Slide transition={['spin']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Image style={{width: '55px', float: 'left'}} src={images.fejs} />
            <Heading style={{width: '400px', float: 'left'}} size={5} textColor="secondary">Piotr Pazoła</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Expo - React Native
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                czyli przełam się i oswój aplikacje mobilne
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Mięsisty kod na początek</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0101} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide style={{marginTop: '65px'}} transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Mięsisty kod na początek</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0102} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide style={{marginTop: '65px'}} transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Mięsisty kod na początek
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0103} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Komponent Expo: Skaner kodów kreskowych
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                tu efekty - z 2 skriny obok siebie z telefonu jak to dziala
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Po co nam natywne aplikacje?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                Ująć jakieś statystyki?
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Po co nam natywne aplikacje?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                PWA - ograniczenia? (brak niektorych API?)
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Aplikacje hybrydowe
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              - dostępne rozwiązania na rynku:
              Cordova (np. Ionic),
              NativeScript (np. z Vue)
              i React Native
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Aplikacje hybrydowe: Cordova
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                Cordova (np. Ionic)?
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Aplikacje hybrydowe: NativeScript
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                NativeScript (np. z Vue)?
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Aplikacje hybrydowe: React Native
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              info o RN
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              React
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              ogólnie skąd to się wzięło
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              React
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              z czym to się je
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              React Native
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              ogólnie skąd to się wzięło
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              React Native
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu już pokazać multiplatformowość
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              React Native
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
              <Image src={images.mapaJs} style={{width: '70%'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              React Native
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              logikę architektury
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Co to jest?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <BlockQuote>
              <Quote fit textColor="secondary" style={{borderLeft: '1px solid #ed1941'}}>The fastest way to build an app.
With Expo tools, services, and React Native, you can build, deploy, and quickly iterate on native iOS and Android apps from the same JavaScript codebase.</Quote>
              <Cite margin="10px 0 0 30px">Expo.io</Cite>
            </BlockQuote>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Co to jest?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              dlaczego o nim mówimy?
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Co to jest?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              zgłębić szczegóły
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Co to jest?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              z czego się składa
            </Text>
          </div>
        </Slide>

        <Slide bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0201} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0202} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0203} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu efekty pracy GPS 1
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu efekty pracy GPS 2
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu efekty pracy GPS 3
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu info o nowej wersji Expo w ktorej mozna odpalic funkcje GPS w tle
            </Text>
          </div>
        </Slide>

        <Slide bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0301} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0302} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0303} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu efekty pracy odtwarzacza muzyki 1
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu efekty pracy 2
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              tu efekty pracy 3
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              Wnioski...
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Ograniczenia
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              jakie są ograniczenia Expo?
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Ograniczenia
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              czy jest używany produkcyjnie? Nie – tak mówił programista Espeo
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Ograniczenia
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              nowości odnośnie Expo z konferencji z Krakowa? Może coś się zmieniło?
            </Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Podsumowanie
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              szybko porzucenie Expo z powodu ograniczeń
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Podsumowanie
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              nieoceniona rola Expo we wdrożeniu w środowisko React Native
            </Text>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Podsumowanie
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
                „tracimy sporo czasu na konfigurowanie gradli” - jak mówił Espeo, szybko to doświadczyłem, gdy cały dzień zajmowałem się konfigurowaniem kompilacji javy dla Androida
            </Text>
          </div>
        </Slide>

        <Slide bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Image style={{width: '55px', float: 'left'}} src={images.fejs} />
            <Heading style={{width: '400px', float: 'left'}} size={5} textColor="primary">Piotr Pazoła</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Text style={{fontSize: '70px'}} margin="0px 0 0" textColor="primary" bold>
                piotr@webtrip.pl
            </Text>
            <Text style={{fontSize: '70px'}} margin="30px 0 0" textColor="primary" bold>
                webtrip.pl
            </Text>
            <Text style={{fontSize: '60px'}} margin="100px 0 0" textColor="primary" bold>
                github.com/piotrpazola/code-leszno-expo
            </Text>
          </div>
        </Slide>

      </Deck>
    );
  }
}
