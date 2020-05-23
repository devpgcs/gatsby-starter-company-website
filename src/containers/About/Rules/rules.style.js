import styled from 'styled-components'

const RulesWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 60px auto ;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .left-side, .right-side { width: calc(90% / 2); }

    .left-side {
      h1 { margin-bottom: 30px; font-weight: bold; }
      p { text-align: justify; }
    }

    .right-side {
      img {
        display: block;
        width: 500px;
        height: 350px;
        border: 1px solid var(--text);
      }
    }
  }
`

export default RulesWrapper