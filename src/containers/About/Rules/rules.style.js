import styled from 'styled-components'

const RulesWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 1024px) {
      max-width: 750px;
    }

    .left-side, .right-side { 
      width: calc(90% / 2); 
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .left-side {

      h1 { 
        margin-bottom: 30px; 
        font-weight: bold;
        @media (max-width: 768px) {
          text-align: center;
        }
        @media (max-width: 768px) {
          font-size: 32px;
        }
      }

      p { 
        text-align: justify;
        @media (max-width: 768px) {
          &:nth-child(7) {
            margin-bottom: 60px;
          }
        } 
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    .right-side {
      max-width: 500px;
      @media (max-width: 768px) {
        margin: 0 auto;
      }
      
      img {
        display: block;
        width: 100%;
        max-height: 300px;
        height: 56vw;
        border: 1px solid var(--text);
      }
    }
  }
`

export default RulesWrapper