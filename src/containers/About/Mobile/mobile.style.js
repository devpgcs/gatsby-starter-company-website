import styled from 'styled-components'

const MobileWrapper = styled.section`
  background: var(--primary);
  .case {
    max-width: 750px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 50px 30px;
    @media (max-width: 768px) {
      h1 { font-size: 32px; }
    }

    img {
      display: block;
      width: 200px;
      max-height: 400px;
      height: 60vh;
      border: 1px solid var(--text);
      @media (max-width: 768px) {
        margin: 0 auto;
      }
    }

    .right-side {
      width: 400px;
      text-align: center;
      @media (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
      }
      
      p {
        margin-top: 30px;
        color: var(--contrast);
        @media (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
`

export default MobileWrapper