import styled from 'styled-components'

const IssuesWrapper = styled.section`
  margin-bottom: 90px;
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;

    h2 { margin-bottom: 30px;}

    .buttons-wrapper {
      max-width: 550px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      button {
        max-width: 250px;
        padding: 30px;
        box-shadow: 0px 0px 15px var(--shadow);
      }
    }
  }
`

export default IssuesWrapper