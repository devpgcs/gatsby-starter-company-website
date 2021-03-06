import styled from 'styled-components'

const OpinionsWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    @media(max-width: 1024px) {
      max-width: 750px;
    }

    .border {
      width: 40px;
      height: 5px;
      margin-bottom: 10px;
      background: var(--secondary);
    }

    .header {
      width: 100%;
      text-align: center;

      h2 {
        margin-bottom: 30px;
        @media (max-width: 768px) {
          font-size: 20px;
        }
      }

      p {
        max-width: 550px;
        margin: 0 auto;
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    .posted-images {
      max-width: 300px;
      width: 100%;
      margin: 30px auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      img {
        display: block;
        width: 70px;
        height: 70px;
        border: 1px solid var(--text);
      }
    }

    .explanation {
      max-width: 850px;
      margin: 30px auto;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    .perfil-wrapper {
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
      @media (max-width: 768px) {
        p { font-size: 14px; }
      }

      img {
        display: block;
        border: 1px solid var(--text);
        width: 70px;
        height: 70px;
        margin: 0 auto;
      }

      .perfil-name {
        width: 100%;
        display: block;
        font-size: 15px;
        margin-top: 30px;
        font-family: Quicksand;
        @media(prefers-color-scheme: dark) {
          color: var(--contrast);
        }
      }
    }
  }
`

export default OpinionsWrapper