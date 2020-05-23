import styled from 'styled-components'

const PartnerWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;

    .border {

      width: 40px;
      height: 5px;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      background: var(--secondary);
    }

    h2 {
      width: 100%;
      text-align: center;
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

    p a {
      color: var(--primary);
      font-weight: bold;
    }
  }
`

export default PartnerWrapper