import styled from 'styled-components'

const MobileWrapper = styled.section`
  z-index: 2;
  width: 100%;
  height: 45px;
  position: fixed;
  top: 0;
  display: block;
  padding: 15px 0;
  background: var(--bg-color);
  box-shadow: 5px 2px 5px 1px var(--shadow);

  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
    display: block;
    @media (max-width: 1024px) {
      display: none;
    }

    .navbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .logo,
      .list ul,
      .sing-up {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      .logo {
        width: 13%;
        justify-content: flex-start;

        img {
          display: block;
          width: 100%;
          height: 40px;
          border: 1px solid var(--text);
        }
      }

      .list {
        width: 50%;
      }

      .list ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        list-style: none;
      }

      .sing-up {
        width: 22%;
        justify-content: space-between;
        .login {
          color: var(--text);
        }

        button a {
          font-weight: bold;
        }
      }
    }
  }

  .mobile-case {
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
    max-width: 750px;
    margin: 0 auto;
    padding: 0 30px;

    .navbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      .logo,
      .list ul,
      .sing-up {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      .logo {
        width: 13%;
        justify-content: flex-start;

        img {
          display: block;
          width: 100%;
          height: 40px;
          border: 1px solid var(--text);
        }
      }

      .burger-btn {
        background: none;
        padding: 0;
        width: 30px;
        outline: none;
      }

      .list-mobile {
        z-index: 1;
        background: var(--bg-color);
        position: fixed;
        top: 0;
        right: -350px;
        transition: right ease 0.5s;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        width: 300px;
        height: 100%;
        box-shadow: -5px 5px 5px 1px var(--shadow);

        button:nth-child(1) {
          width: 20px;
          height: 20px;
          color: #eee;
          padding: 0;
          border-radius: 0;
          background: var(--secondary);
        }

        label {
          position: relative;
          left: 100%;
          > div {
            width: 20px;
          }
        }

        ul {
          list-style: none;
          padding: 30px 60px 60px;
          width: 100%;

          li {
            width: 100%;
            margin-bottom: 30px;

            a {
              color: var(--text);
              font-weight: bold;
              @media (max-width: 768px) {
                font-size: 14px;
              }
            }
          }
        }

        .sing-up {
          padding: 0 60px;

          .login {
            width: 100%;
            margin-bottom: 15px;
            color: var(--text);
            @media (max-width: 768px) {
              font-size: 14px;
            }
          }

          button a {
            font-weight: bold;
          }
        }
      }
    }
  }
`

export default MobileWrapper
