import styled from 'styled-components'

const RecomendationWrapper = styled.section`
  margin: 60px 0;

  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .border {
      display: block;
      margin: 0 auto 10px;
      width: 40px;
      height: 10px;
      background: var(--secondary);
    }

    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
    }

    .blog-post {
      min-width: 350px;
      width: calc(90% / 3);
      height: 350px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }

      img {
        display: block;
        width: 100%;
        height: 200px;
        border-radius: 10px;
        border: 1px solid var(--text);
        z-index: 0;
      }

      .post-info {
        background: var(--bg-color);
        width: 240px;
        min-height: 200px;
        height: auto;
        position: relative;
        bottom: 80px;
        left: center;
        right: center;
        z-index: 1;
        border-radius: 10px;
        box-shadow: 0px 5px 20px var(--shadow);
        padding: 0 30px;

        p:nth-child(1) {
          margin-top: 30px;
        }

        h2:nth-child(2) { margin-top: 15px; font-size: 22px; text-align: left; }

        p:nth-child(3) {
          margin-top: 45px;
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export default RecomendationWrapper;