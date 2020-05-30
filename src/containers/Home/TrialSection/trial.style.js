import styled from "styled-components"
import TrialBg from "../../../images/bg.svg"

const DrawTrialWrapper = styled.div`
  @media (max-width: 768px) {
    h2 { font-size: 20px; }
    p, input { font-size: 14px; }
  }

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
      padding: 0 30px;
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
        margin: 0 30px;
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
        border-radius: 5px;
        padding: 8px 21px;
      }

      .terms {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;

        p { 
          margin-left: 6px; 
          @media(max-width: 425px) {
            width: 200px;
            text-align: center;
          }
        }
      }
    }
  }
`

export default DrawTrialWrapper
