
import styled from 'styled-components';

export const Container = styled.div`
  .switch-button {
    background: #1C1B1B;
    border-radius: 8px;
    overflow: hidden;
    width: 120px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    position: relative;
    padding-right: 60px;
    position: relative;
    border: 2px solid #555;


    &:before {
      content: "Over";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(60px);
        transition: transform 300ms linear;
        color: #111;
      }

      & + .switch-button-label {
        position: relative;
        padding: 5px 0;
        display: block;
        user-select: none;
        pointer-events: none;

        &:before {
          content: "";
          background: #444333;
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 5px;
          transform: translateX(0);
          transition: transform 300ms;
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
}`;
