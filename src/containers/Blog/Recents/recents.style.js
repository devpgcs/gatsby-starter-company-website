import styled from 'styled-components'

const RecentsWrapper = styled.section`
  margin: 60px 0 0;

  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 1200px) {
      max-width: 800px;
    }

    @media(max-width: 800px) {
      max-width: 500px;
    }

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
      @media(max-width:  768px) {
        font-size: 20px;
      }
    }

    .search-case {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      @media(max-width: )
    }

    .search {
      max-width: 600px;
      width: 100%;
      display: inline-block;
      margin-top: 30px;
      margin-bottom: 60px;
      text-align: right;

      @media(max-width: 1200px) {
        max-width: 800px;
      }
  
      @media(max-width: 800px) {
        max-width: 500px;
      }

      &::after {
        content: 'SEARCH';
        font-family: Poppins;
        color: var(--text);
        position: relative;
        bottom: 42px;
        right: 30px;
        cursor: pointer;
      }

      div {
        border: 3px solid var(--primary);
        border-radius: 10px;
      }

      input {
        width: 100%;
        display: block;
        margin: 0 auto;
        font-size: 16px;
        line-height: 24px;  
        text-align: center;
        padding: 15px 0;
        border: none;
        border-radius: 10px;
        @media (max-width: 768px) {
          font-size: 14px;
        }
        @media (max-width: 800px) {
          width: calc(100% - 10px);
          text-align: left;
          padding-left: 10px;
        }
        @media(max-width: 480px) {
          width: calc(100% - 120px);
          margin: 0;
        }
      }
    }

    .blog-post {
      max-width: 350px;
      width: 100%;
      height: 350px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 60px;
      &:nth-child(2), &:nth-child(3), &:nth-child(5), &:nth-child(8), &:nth-child(6) {
        @media(max-width: 400px) { margin-bottom: 90px; }
      }

      @media (max-width: 1200px) {
        margin-bottom: 60px;
      }

      @media(max-width: 800px) {
        margin: 0 auto 60px;
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
        @media(max-width: 768px) {
          p {
            font-size: 14px;

            @media(max-width: 375px) {
              text-align: center;
            }
          }
        }

        p:nth-child(1) {
          margin-top: 30px;
        }

        a {
          width: 100%;
          display: block;
          margin-top: 15px; 
          font-size: 20px;
          @media (max-width: 768px) {
            font-size: 20px;
          }

          h2 {
            text-align: left;
            @media (max-width: 375px) { text-align: center; }
          }

          h2:nth-child(2) {
            font-size: 22px; 

            @media(max-width: 768px) {
              font-size: 20px;
            }

            @media(max-width: 375px) {
              text-align: center;
            }
          }
        }

        p:nth-child(3) {
          margin-top: 45px;
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export default RecentsWrapper;