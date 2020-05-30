import styled from 'styled-components'

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 135px auto 0;
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    max-width: 750px;
  }
  @media (max-width: 768px) {
    h2 { font-size: 20px; }
    p, li { font-size: 14px; }
  }
  @media (max-width: 375px) {
    h2 { text-align: center; }
  }

  .compass {
    z-index: 2;
    display: none;
    outline: none;
    background: var(--text);
    position: fixed;
    top: 500px;
    left: 0px;
    transition: all ease 0.5s;
    padding: 0;
    width: 40px;
    height: 40px;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    opacity: 0.3;

    &:hover { opacity: 1; }

    img { width: 28px; height: 28px; }

    @media (max-width: 768px) { 
      display: flex;
      flex-wrap: wrap;
      justify-content: center; 
    }
  }
  
  .main {
    width: calc(100% - 260px);
    @media (max-width: 768px) {
      width: 100%;
    }

    .buttons-wrapper {
      max-width: 550px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        margin: 0 auto 30px;
      }

      .activate {
        border-color: var(--primary);
      }

      button {
        max-width: 250px;
        width: 100%;
        box-shadow: 0px 0px 15px var(--shadow);
        border: 2px solid transparent;
        padding: 30px;
        margin-bottom: 30px;
        @media(max-width: 574px) {
          margin: 0 auto 30px;

          &:nth-child(2) {
            margin-bottom: 0;
          }

          a {
            font-size: 14px;
          }
        }
      }
    }

    h2, p { margin-bottom: 30px; }
    p { text-align: justify; }
  }
`

export default MainWrapper