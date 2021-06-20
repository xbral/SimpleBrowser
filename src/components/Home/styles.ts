import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 33px 1fr;
`;

export const HeaderContainer = styled.div`
  background: #2D2D2D;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  -webkit-user-select: none;
  -webkit-app-region: drag;

  input {
    border-radius: 8px;
    border: 2px solid #555;
    padding: 5px 20px;
    width: 100%;
    background: #1C1B1B;
    color: #fff;
    -webkit-app-region: no-drag;
    outline: none;
    font-family: sans-serif;
  }
`;

export const WebviewContainer = styled.div`
  background: #333;
  height: 100%;
  border-bottom-left-radius: 6px !important;
  
  webview {
    border-bottom-left-radius: 6px !important;
    width: 100%;
    height: 100%;
    
    iframe {
      border-bottom-left-radius: 6px !important;
    }
  }
`;

export const WindowButtonContainer = styled.section`
  min-width: 65px;
  
  button {
    -webkit-app-region: no-drag;
    border: none;
    border-radius: 50%;
    padding: 2px 5px;
    margin-left: 4px;
    background: none;
    width: 15px;
    height: 15px;
    cursor: pointer;
    outline: none;
  }

  .close-button {
    background: #FD615B;
  }

  .maximize-button {
    background: #FEBD44;
  }

  .minimize-button {
    background: #2EC84E;
  }
`;

export const OhterButtonsContainer = styled.section`
  min-width: 260px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button {
    background: none;
    -webkit-app-region: no-drag;
    border: none;
    margin-left: 5px;
    padding: 2px 5px;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
  }

  button#back, #forward {
    color: #fff;
  }
`;
