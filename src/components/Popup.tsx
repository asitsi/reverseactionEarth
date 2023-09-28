import React from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';

const Popup = (props: any): any => {
  return props.trigger ? (
    <Wrap className="popup">
      <div className="popup_inner">
        <button
          className="close_btn"
          onClick={() => {
            props.setTrigger(false);
          }}
          style={{ color: `${props.Color}` }}
        >
          <CloseIcon style={{color: 'rgba(56, 204, 119, 1)'}}/>
        </button>
        {props.children}
      </div>
    </Wrap>
  ) : (
    ""
  );
};

export default Popup;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(11, 11, 11, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .popup_inner {
    position: relative;
    padding: 1rem 0;
    width: 100%;
    max-width: 840px;
    background-color: #fff;
    margin: 0 1rem;
    border-radius: 5px;
    .close_btn {
      position: absolute;
      top: 5px;
      right: 16px;
      background: none;
      color: #02b3e4;
      border: none;
      font-size: 2rem;
      cursor: pointer;
    }
  }
`;
