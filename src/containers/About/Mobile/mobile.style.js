import styled from 'styled-components'

const MobileWrapper = styled.section`
  .case {
    background: var(--primary);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 50px;

    img {
      display: block;
      width: 200px;
      height: 400px;
      border: 1px solid var(--text);
    }

    .right-side {
      width: 400px;
      text-align: center;
      margin-left: 60px;
      
      p {
        margin-top: 30px;
        color: var(--contrast);
      }
    }
  }
`

export default MobileWrapper