import styled from "styled-components"

const FooterWrapper = styled.footer`
  .case {
    max-width: 1200px;
    width: 100%;
    margin: 120px auto 30px;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
  }

  .main-col {
    height: calc(auto + 30px);
    display: flex;
    flex-wrap: wrap;

    .footer-titles {
      width: 100%;
    }
  }

  .one {
    width: 40%;
    align-content: flex-start;

    ul {
      padding: 0;
      width: calc(100% / 3);
      list-style: none;

      li {
        margin-top: 30px;
        a {
          color: var(--primary);
          font-weight: bold;
        }
      }
    }
  }

  .two {
    width: calc(40% - 31px);
    align-content: space-between;

    img {
      border: 1px solid var(--text);
      height: 40px;
    }

    .one,
    .two {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .two {
      border: none;
    }
  }

  .three {
    width: 20%;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    border-left: 0.5px solid gray;
    margin-left: 30px;

    p,
    button {
      margin-left: 30px;
    }

    .contact-btn {
      width: 100%;
    }

    .link {
      width: 100%;
    }
  }

  .copyright {
    width: 100%;
    text-align: center;
    margin-top: 120px;
  }
`

export default FooterWrapper
