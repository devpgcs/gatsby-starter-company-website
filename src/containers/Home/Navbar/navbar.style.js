import styled from "styled-components"

const NavbarWrapper = styled.div`
  box-shadow: 0px 5px 15px var(--shadow);

  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .colOne {
    width: 200px;
    img {
      display: block;
      border: 1px solid var(--text);
      width: 200px;
      height: 40px;
    }
  }

  .colTwo {
    justify-content: center;
    width: calc(100% - 400px);

    a {
      font-weight: normal;
      color: var(--headings);
    }

    ul,
    li {
      list-style: none;
      padding: 0;
    }

    ul {
      width: 100%;
      padding: 0 8%;
      display: inline-flex;
      justify-content: space-around;

      @media (max-width: 1080px) {
        justify-content: center;
        padding: 0;
      }

      li {
        @media (max-width: 1080px) {
          width: auto;
          padding: 0 8px;
        }
      }
    }
  }

  .colThree {
    width: 200px;
    justify-content: space-between;
    button a {
      font-weight: bold;
      font-size: 14px;
    }
  }
`

export default NavbarWrapper
