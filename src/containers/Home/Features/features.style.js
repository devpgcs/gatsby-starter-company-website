import styled from 'styled-components'

const FeatureSection = styled.section`
  margin: 100px 0 0;

  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .border {
      background: var(--secondary);
      width: 40px;
      height: 5px;
      margin-left: 2px;
      margin-bottom: 10px;
    }

    h2 {  width: 100%; margin-bottom: 30px; }

    p {
      width: 100%;
      margin-bottom: 50px;

      a {
        color: var(--primary);
        font-weight: bold;
      }
    }
  }

  .feature {
    background: var(--bg-color);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: calc(80% / 4);
    padding: 15px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px var(--shadow);

    img {
      width: 60px;
      height: 60px;
      border: 1px solid var(--text);
    }

    p {
      width: 70%;
      margin: 0;
    }
  }
`

export default FeatureSection