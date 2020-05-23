import styled from 'styled-components'

const SectionWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
  }

  p {
    width: 47.5%;
    margin-bottom: 30px;

    a {
      color: var(--primary);
      font-weight: bold;
    }
  }

  .logos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 60px;
    img {
      border: 1px solid var(--text);
      width: 60px;
      height: 60px;
    }
  }
`;

export default SectionWrapper;