import React, { memo, useRef, useState } from 'react';
import { remote } from 'electron';
import SwitchButton from '../../components/SwitchButton';
import { Container, HeaderContainer, WebviewContainer, WindowButtonContainer, OhterButtonsContainer } from './styles';

const Home: React.FC = () => {
  const webviewRef = useRef<React.DetailedHTMLProps<React.WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>>();
  const win = remote.getCurrentWindow();
  const [url, setUrl] = useState('http://');
  const [maximized, setMaximized] = useState(false);

  function handleCloseBrowser () {
    win.close();
  }

  function handleMaximizeBrowser () {
    if (maximized) {
      setMaximized(false);
      win.unmaximize();
    } else {
      setMaximized(true);
      win.maximize();
    }
  }

  function handleMinimizeBrowser () {
    win.minimize();
  }

  function handleGo () {
    webviewRef.current.src = url;
  }

  function handleInputText (e: string) {
    setUrl(e);
  }

  function handleInputEnter (e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleGo();
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <WindowButtonContainer>
          <button type="button" id="close" onClick={handleCloseBrowser} className="close-button"></button>
          <button type="button" id="maximize" onClick={handleMaximizeBrowser} className="maximize-button"></button>
          <button type="button" id="minimize" onClick={handleMinimizeBrowser} className="minimize-button"></button>
        </WindowButtonContainer>
        <input type="text" placeholder="URL" onChange={e => handleInputText(e.target.value)} onKeyDown={handleInputEnter} value={url} />
        <OhterButtonsContainer>
          <SwitchButton />
          {/* <button type="button" id="go" onClick={handleGo}>🌎</button> */}
          <button type="button" id="back">◀</button>
          <button type="button" id="forward">▶</button>
          <button type="button" id="home">🏠</button>
        </OhterButtonsContainer>
      </HeaderContainer>
      <WebviewContainer>
        <webview src="https://google.com" ref={webviewRef}></webview>
      </WebviewContainer>
    </Container>
  );
};

export default memo(Home);
