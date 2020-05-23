import styled from 'styled-components'

const AditionalWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 90px auto;
    padding: 0 30px;

    .border {

      width: 40px;
      height: 5px;
      display: block;
      margin-bottom: 10px;
      background: var(--secondary);
    }

    .integrations {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 30px auto;

      img {
        display: block;
        width: 60px;
        height: 60px;
        border: 1px solid var(--text);
      }
    }
  }
`

export default AditionalWrapper