import React from 'react';
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
import Terminal from "spectacle-terminal";
import createTheme from 'spectacle/lib/themes/default';

import './style.css';

const images = {
  logoWebtripBiale: require('../assets/webtrip-logo-biale.png'),
  logoWebtripCzarne: require('../assets/webtrip-logo-czarne.png'),
  fejs: require('../assets/fejs.jpg'),
  mapaJs: require('../assets/mapa-js.png'),
  nodejsEventloop: require('../assets/node-event-loop.png'),
  appDevTime: require('../assets/appDevTime.jpg'),
  expoZiomek: require('../assets/ziomek-expo.png'),
  hybridApp01: require('../assets/hybridApp01.png'),
  hybridApp02: require('../assets/hybridApp02.png'),
  androidVsIos: require('../assets/android-vs-apple.gif'),
  expoWorkflows: require('../assets/expo-lifecycle-workflows.png'),
};

const screens = {
  expo01: require('../assets/screens/expo01.jpg'),
  expo02: require('../assets/screens/expo02.jpg'),
  nodejs: require('../assets/screens/nodejs.jpg'),
  filesExpo: require('../assets/screens/filesExpo.jpg'),
  expoMetro01: require('../assets/screens/expoMetro01.jpg'),
  expoMetro02: require('../assets/screens/expoMetro02.jpg'),
  expoMetro03: require('../assets/screens/expoMetro03.jpg'),
  expoMetro02Mobile: require('../assets/screens/expoMetro02-mobile.jpg'),
  expoMetro03Mobile: require('../assets/screens/expoMetro03-mobile.jpg'),
  caseDone00: require('../assets/screens/caseDone00.jpg'),
  caseDone01: require('../assets/screens/caseDone01.jpg'),
  caseDone02: require('../assets/screens/caseDone02.jpg'),
  caseDone03: require('../assets/screens/caseDone03.jpg'),
  case02Done01: require('../assets/screens/case02Done01.jpg'),
  case02Done02: require('../assets/screens/case02Done02.jpg'),
}

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
  code0401: require('raw-loader!../assets/code/listing0401.code'),
  code0501: require('raw-loader!../assets/code/listing0501.code'),
  code0502: require('raw-loader!../assets/code/listing0502.code'),
  code0503: require('raw-loader!../assets/code/listing0503.code'),
  code0601: require('raw-loader!../assets/code/listing0601.code'),
  code0602: require('raw-loader!../assets/code/listing0602.code'),
  code0603: require('raw-loader!../assets/code/listing0603.code'),
}

const theme = createTheme(
  {
    primary: 'white',
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
            <Quote fit textColor="secondary" style={{fontSize: '80px', borderLeft: '1px solid #ed1941'}}>The fastest way to build an app.
            </Quote>
            <Cite style={{fontSize: '55px'}} margin="10px 0 0 30px">Expo.io</Cite>
          </BlockQuote>
        </div>
      </Slide>

      <Slide bgColor="primary">
        <div style={{position: 'absolute',top: '5%',left: '5%'}}>
          <Heading size={5} textColor="secondary">
            Aplikacje mobilne
          </Heading>
        </div>
        <div style={{position: 'absolute',top: '5%',right: '5%'}}>
          <Image src={images.logoWebtripCzarne} />
        </div>
        <div style={{marginTop: '65px'}}>
          <Image src={images.androidVsIos} fit />
        </div>
      </Slide>

      <Slide transition={['fade']}  bgColor="primary">
        <div style={{position: 'absolute',top: '5%',left: '5%'}}>
          <Heading size={5} textColor="secondary">
            Aplikacje mobilne
          </Heading>
        </div>
        <div style={{position: 'absolute',top: '5%',right: '5%'}}>
          <Image src={images.logoWebtripCzarne} />
        </div>
        <div style={{marginTop: '65px'}}>
          <BlockQuote>
            <Quote fit textColor="secondary" style={{borderLeft: '1px solid #ed1941', fontSize: '65px'}}>
             3rd quarter of 2018<br /><br />Android users were able to choose between 2.1 million apps. App Store remained the second-largest app store with almost 2 million available apps.
            </Quote>
            <Cite style={{fontSize: '50px'}} margin="10px 0 0 30px">statista.com</Cite>
          </BlockQuote>
        </div>
      </Slide>

      <Slide transition={['fade']} bgColor="primary">
        <div style={{position: 'absolute',top: '5%',left: '5%'}}>
          <Heading size={5} textColor="secondary">
            Aplikacje mobilne
          </Heading>
        </div>
        <div style={{position: 'absolute',top: '5%',right: '5%'}}>
          <Image src={images.logoWebtripCzarne} />
        </div>
        <div style={{marginTop: '65px'}}>
        <Image src={images.appDevTime} fit />
        <BlockQuote>
          <Quote fit textColor="secondary" style={{borderLeft: '1px solid #ed1941', fontSize: '50px'}}>
          About 48% of mobile apps take 4 to 6 months of development time.
          </Quote>
          <Cite style={{fontSize: '40px'}} margin="10px 0 0 30px">MobileAppDaily.com</Cite>
        </BlockQuote>
        </div>
      </Slide>

      <Slide bgColor="primary">
        <div style={{position: 'absolute',top: '5%',left: '5%'}}>
          <Heading size={5} textColor="secondary">
            Aplikacje hybrydowe vs. natywne
          </Heading>
        </div>
        <div style={{position: 'absolute',top: '5%',right: '5%'}}>
          <Image src={images.logoWebtripCzarne} />
        </div>
        <div style={{marginTop: '65px'}}>
        <Image src={images.hybridApp01} fit />
        <BlockQuote>
          <Quote fit textColor="secondary" style={{borderLeft: '1px solid #ed1941', fontSize: '40px'}}>
          Web applications can run on a mobile device and have access to the device, such as the camera or GPS features. When a hybrid app is built, it will be compiled, transforming your web application into a native app.
          </Quote>
          <Cite style={{fontSize: '40px'}} margin="10px 0 0 30px">TechMagic.co</Cite>
        </BlockQuote>
        </div>
      </Slide>

      <Slide transition={['fade']} bgColor="primary">
        <div style={{position: 'absolute',top: '5%',left: '5%'}}>
          <Heading size={5} textColor="secondary">
            Hybrydowe: Ionic vs. React Native
          </Heading>
        </div>
        <div style={{position: 'absolute',top: '5%',right: '5%'}}>
          <Image src={images.logoWebtripCzarne} />
        </div>
        <div style={{marginTop: '65px'}}>
        <Image src={images.hybridApp02} fit style={{width: '1050px'}}/>
          <Text style={{fontSize: '20px', textAlign: 'right'}}>źródło: TechMagic.co</Text>
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
              Wymagania: Node.js
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <BlockQuote>
              <Quote fit textColor="secondary" style={{borderLeft: '1px solid #ed1941', fontSize: '60px'}}>
                We do about 40% of annual revenues on Black Friday. 55% came on mobile... that 55% percent of traffic went 100% through Node.
                <br /><br />We were able to deliver this massive traffic with the equivalent of two CPUs and 30 GB of RAM.
              </Quote>
              <Cite style={{fontSize: '45px'}} margin="10px 0 0 30px">Eran Hammer, Senior Architect, Walmart Labs</Cite>
            </BlockQuote>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Instalacja Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Terminal showFirstEntry="true" title="Terminal" output={[
              <div>
                <div># npm install expo-cli --global</div>
                <div style={{marginTop: '30px',marginBottom: '30px'}}><i>(...)</i></div>
                <div>+ expo-cli@2.14.0</div>
                <div>added 596 packages from 434 contributors, removed 3 packages,</div>
                <div>updated 28 packages and moved 4 packages in 1031.079s</div>
              </div>,
            ]}
            />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Inicjalizacja nowego projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Terminal showFirstEntry="true" title="Terminal" output={[
              <div style={{marginTop: '30px'}}>
                <div># expo init moja-pierwsza-apka</div>
                <div> </div>
                <div><span style={{color: '#008000'}}>?</span> Choose a template:</div>
                <div>  ----- Managed workflow -----</div>
                <div style={{color: '#00ffff'}}>> blank         minimal dependencies to run and an empty root component</div>
                <div>  tabs          several example screens and tabs using react-navigation</div>
                <div>  ----- Bare workflow -----</div>
                <div>  bare-minimum  minimal setup for using unimodules</div>
              </div>,
            ]}
            />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Inicjalizacja nowego projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Terminal showFirstEntry="true" title="Terminal" output={[
              <div>
              <div><span style={{color: '#008000'}}>?</span> Choose a template: <span style={{color: '#00ffff'}}>expo-template-blank</span></div>
              <div>
                <div><span style={{color: '#00ffff'}}>?</span> Please enter a few initial configuration values.</div>
                <div>  Read more: https://docs.expo.io/versions/latest/workflow/configuration/</div>
                <div>  » <span style={{color: '#808000'}}>50% completed</span></div>
                <div> &#123;</div>
                <div>   "expo": &#123;</div>
                <div>     "name": "<span style={{color: '#00ffff'}}>&lt;The name of your app visible on the home screen&gt;</span>",</div>
                <div>     "slug": "moja-pierwsza-apka"</div>
                <div>   &#125;</div>
                <div> &#125;</div>
              </div></div>,
            ]}
            />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Inicjalizacja nowego projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Terminal showFirstEntry="true" title="Terminal" output={[
              <div>
              <div><span style={{color: '#008000'}}>?</span> Yarn v1.15.2 found. Use Yarn to install dependencies? <span style={{color: '#00ffff'}}>Yes</span></div>
              <div>
                <div>Extracting project files...</div>
                <div>Installing dependencies...</div>
                <div>yarn install v1.15.2</div>
                <div><span style={{color: '#0000ff'}}>info</span> No lockfile found.</div>
                <div>[1/4] Resolving packages...</div>
                <div><span style={{color: '#008000'}}>?</span> react-native-vector-icons@6.0.0</div>
              </div></div>,
            ]}
            />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Instalacja aplikacji Expo na urządzeniu
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Image src={screens.expo01} style={{width: '360px', marginRight: '100px', display: 'inline'}} />
            <Image src={screens.expo02} style={{width: '360px', display: 'inline'}} />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Uruchamianie projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px', display: 'table'}}>
          <div style={{display: 'table-row'}}>
            <div style={{paddingRight: '100px', verticalAlign: 'top', display: 'table-cell'}}>
              <Image src={screens.filesExpo} fit />
            </div>
            <div style={{textAlign: 'left', marginLeft: '50px', verticalAlign: 'top', display: 'table-cell'}}>
              <div style={{color: 'white'}}>App.js</div>
              <CodePane fit source={code.code0401} lang="js" style={{width: '100%', fontSize: '18px'}}/>
            </div>
          </div>
        </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Uruchamianie projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Terminal showFirstEntry="true" title="Terminal" output={[
              <div>
              <div># expo start</div>
              <div> </div>
              <div>Starting project at <br />prezentacja-code-leszno-expo/assets/code/moja-pierwsza-apka
                <br />Expo DevTools is running at http://localhost:19002<br />
              Opening DevTools in the browser... (press shift-d to disable)<br />
            Starting Metro Bundler on port 19001.<br />
              <br />
                Tunnel ready.</div>
              </div>
            ]}
            />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Uruchamianie projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Image src={screens.expoMetro01} fit />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Uruchamianie projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px', display: 'table'}}>
            <div style={{display: 'table-row'}}>
              <div style={{paddingRight: '300px', verticalAlign: 'top', display: 'table-cell'}}>
                <Image src={screens.expoMetro02} fit />
              </div>
              <div style={{textAlign: 'left', marginLeft: '50px', verticalAlign: 'top', display: 'table-cell'}}>
                <Image src={screens.expoMetro02Mobile} fit />
              </div>
            </div>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Uruchamianie projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '45px'}}>
            <CodePane fit source={code.code0401} lang="js" style={{fontSize: '22px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Uruchamianie projektu Expo
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px', display: 'table'}}>
            <div style={{display: 'table-row'}}>
              <div style={{paddingRight: '200px', verticalAlign: 'top', display: 'table-cell'}}>
                <Image src={screens.expoMetro03} fit />
              </div>
              <div style={{textAlign: 'left', marginLeft: '50px', verticalAlign: 'top', display: 'table-cell'}}>
                <Image src={screens.expoMetro03Mobile} fit />
              </div>
            </div>
          </div>
        </Slide>


        <Slide bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Czytnik kodów kreskowych</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0101} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: Czytnik kodów kreskowych</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <CodePane fit source={code.code0102} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Case study: Czytnik kodów kreskowych
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
              Case study: Czytnik kodów kreskowych
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Image src={screens.caseDone00} style={{marginRight: '100px', display: 'inline'}} />
            <Image src={screens.caseDone01} style={{display: 'inline'}} />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">
              Case study: Czytnik kodów kreskowych
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Image src={screens.caseDone02} style={{marginRight: '100px', display: 'inline'}} />
            <Image src={screens.caseDone03} style={{display: 'inline'}} />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Cykl projektu
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Image src={images.expoWorkflows} fit />
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
            <CodePane fit source={code.code0501} lang="js" style={{fontSize: '28px'}}/>
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
            <CodePane fit source={code.code0502} lang="js" style={{fontSize: '28px'}}/>
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
            <CodePane fit source={code.code0503} lang="js" style={{fontSize: '28px'}}/>
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
            <Image src={screens.case02Done01} style={{marginRight: '100px', display: 'inline'}} />
            <Image src={screens.case02Done02} style={{display: 'inline'}} />
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="primary">Case study: GPS</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripBiale} />
          </div>
          <div style={{marginTop: '65px', color: 'white'}}>
            Od stycznia 2019 dostępne Expo SDK v32.0.0 - TaskManager:
            <List>
              <ListItem style={{paddingBottom: '30px'}}><span style={{fontWeight: 'bold'}}>Komponent Location</span>
              <br /><br /><div style={{paddingLeft: '65px', fontSize: '35px'}}>Zadanie w tle aktualizujące stan lokalizacji.
              <br /><br />Zadanie w tle umożliwiające wywołanie triggera geofencingu, jeśli mobilne urządzenie wejdzie lub wyjdzie z określonego obszaru geograficznego w celu np. wygenerowania powiadomienia.
              </div>
              </ListItem>
              <ListItem><span style={{fontWeight: 'bold'}}>Komponent BackgroundFetch</span>
              <br /><br /><div style={{paddingLeft: '65px', fontSize: '35px'}}>Pobieranie danych z sieci w trybie pracującym w tle poprzez komponent BackgroundFetch.
              </div>
              </ListItem>
            </List>
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
            <CodePane fit source={code.code0601} lang="js" style={{fontSize: '28px'}}/>
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
            <CodePane fit source={code.code0602} lang="js" style={{fontSize: '28px'}}/>
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
            <CodePane fit source={code.code0603} lang="js" style={{fontSize: '28px'}}/>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">Case study: Odtwarzacz muzyki</Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <Image src={images.expoZiomek} fit />
            <Text style={{fontSize: '80px', fontWeight: 'bold'}}>RTFM!</Text>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Dlaczego nie?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <BlockQuote>
              <Quote fit textColor="secondary" style={{fontSize: '50px', borderLeft: '1px solid #ed1941'}}>
                The intention of this document is to outline some of those cases, so that you don't end up building an app with Expo and getting frustrated when you encounter an obstacle that you can't overcome without switching to the bare workflow.
              </Quote>
              <Cite style={{fontSize: '35px'}} margin="10px 0 0 30px">Why not Expo?<br />docs.expo.io/versions/v32.0.0/introduction/why-not-expo/</Cite>
            </BlockQuote>
          </div>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Expo: Dlaczego nie?
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
          <ul style={{textAlign: 'left', fontSize: '45px'}}>
            <li style={{paddingBottom: '12px'}}>Brak obsługi Bluetooth</li>
            <li style={{paddingBottom: '12px'}}>Brak obsługi WebRTC</li>
            <li style={{paddingBottom: '12px'}}>Brak możliwości zakupów wewnątrz aplikacji</li>
            <li style={{paddingBottom: '12px'}}>Brak itegracji z Google Pay, Apple Pay</li>
            <li style={{paddingBottom: '12px'}}>Brak możliwości odtwarzania dźwięku w tle z wykorzystaniem natywnej kontroli</li>
            <li style={{paddingBottom: '12px'}}>Brak obsługi powiadomień push w tle</li>
            <li style={{paddingBottom: '12px'}}>Sporych rozmiarów plik aplikacji (od 20MB iOS, 15MB Android)</li>
          </ul>
          </div>
        </Slide>

        <Slide bgColor="primary">
          <div style={{position: 'absolute',top: '5%',left: '5%'}}>
            <Heading size={5} textColor="secondary">
              Snack.expo.io
            </Heading>
          </div>
          <div style={{position: 'absolute',top: '5%',right: '5%'}}>
            <Image src={images.logoWebtripCzarne} />
          </div>
          <div style={{marginTop: '65px'}}>
            <BlockQuote>
              <Quote fit textColor="secondary" style={{borderLeft: '1px solid #ed1941'}}>
                Fall in Love. See how quickly you can turn your ideas into performant cross-platform apps before installing a thing.
              </Quote>
              <Cite style={{fontSize: '70px'}} margin="10px 0 0 30px">snack.expo.io</Cite>
            </BlockQuote>
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
