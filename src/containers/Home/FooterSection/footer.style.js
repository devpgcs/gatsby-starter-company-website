import styled from "styled-components"

const FooterWrapper = styled.footer`
  padding: 30px;
  .case {
    max-width: 1200px;
    width: 100%;
    margin: 120px auto 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media(max-width: 1024px) {
      max-width: 750px;
    }

    @media(max-width: 680px) {
      margin-top: 120px;
    }
  }

  .main-col {
    display: block;
    @media(max-width: 680px) { margin-bottom: 60px; }

    .footer-titles {
      width: 100%;
      @media(max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .one {
    width: 30%;
    align-content: flex-start;

    @media(max-width: 680px) { 
      width: 100%; 
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        width: calc(90% / 3);
        list-style: none;
        margin-top: 30px;

        @media (max-width: 1024px) {
          width: calc(95% / 2);
        }

        @media (max-width: 680px) {
          width: calc(70% / 2);
        }

        a {
          color: var(--primary);
          font-weight: bold;
          @media(max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .two {
    width: 30%;
    align-content: flex-start;
    @media(max-width: 680px) { width: 100%; }

    .logos-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    img {
      width: calc(90% / 3);
      display: block;
      border: 1px solid var(--text);
      height: 40px;
      margin-top: 30px;
      @media (max-width: 1024px) {
        width: calc(95% / 2);
      }
    }
  }

  .divider {
    display: block;
    width: 1px;
    background: var(--text);
    margin: 0 10px;
  }

  .three {
    width: 20%;
    display: block;
    @media(max-width: 680px) { width: 100%; }

    p, button { 
      margin-bottom: 15px; 
      @media(max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .copyright {
    max-width: 1200px;
    width: 100%;
    text-align: center;
    margin-top: 120px;

    @media(max-width: 768px) {
      font-size: 14px;
    }
    
    @media(max-width: 680px) { 
      margin-top: 30px; 
    }
  }
`

export default FooterWrapper
