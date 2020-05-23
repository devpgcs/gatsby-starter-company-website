import styled from "styled-components"
import TrialBg from "../../../images/bg.svg"

const DrawTrialWrapper = styled.div`

  .draw {
    background-image: url('${TrialBg}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .one {
    height: 255px;
    display: flex; 
    align-items: flex-end;
    justify-content: center;
    h2 {
      width: 472px;
      margin-bottom: 56px;
      text-align: center;
    }
  }

  .two {
    transform: rotate(180deg);
    margin-top: -1px;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    form {
      width: 425px;
      height: 450px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      background: var(--bg-color);
      
      .form-case {
        height: 100%;
        margin: 0 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: space-around;
        transform: rotate(180deg);
      }

      .input-field {
        width: 100%;
        border: 1px solid #3F7DC6;
        box-sizing: border-box;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        padding: 8px 21px;
      }

      .terms {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;

        p { margin-left: 6px; }
      }
    }
  }
`

export default DrawTrialWrapper