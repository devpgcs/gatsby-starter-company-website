import styled from 'styled-components'

const SectionWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    @media(max-width: 1024px) {
      max-width: 750px; 
    }
  }

  p {
    width: 47.5%;
    margin-bottom: 30px;
    @media(max-width: 1024px) {
      width: 100%;
      text-align: center;
      margin-top: 60px;
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }

    a {
      color: var(--primary);
      font-weight: bold;
      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }

  .logos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
      border: 1px solid var(--text);
      width: 60px;
      height: 60px;
      @media (max-width: 425px) {
        width: calc(50vw / 2);
        height: calc(50vw / 2);
        margin-bottom: 15px;
      }
    }
  }
`;

export default SectionWrapper;