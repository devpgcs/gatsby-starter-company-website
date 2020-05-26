import styled from 'styled-components'

const PartnerWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    @media (max-width: 1024px) {
      max-width: 750px;
    }

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
      @media (max-width: 768px) {
        font-size: 20px;
      }
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
        @media (max-width: 768px) {
          margin-bottom: 30px;
        }
      }
    }

    p { 
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    p a {
      color: var(--primary);
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`

export default PartnerWrapper