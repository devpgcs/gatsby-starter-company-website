import styled from 'styled-components'

const IssuesWrapper = styled.section`
  margin-bottom: 60px;
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;

    h2 { 
      margin-bottom: 30px;
      @media(max-width: 768px) {
        font-size: 20px;
      }
    }

    .buttons-wrapper {
      max-width: 550px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      button {
        max-width: 250px;
        width: 100%;
        padding: 30px;
        box-shadow: 0px 0px 15px var(--shadow);
        @media(max-width: 574px) {
          margin: 0 auto 60px;

          &:nth-child(2) {
            margin-bottom: 0;
          }

          a {
            font-size: 14px;
          }
        }
      }
    }
  }
`

export default IssuesWrapper