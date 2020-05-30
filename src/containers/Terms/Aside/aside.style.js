import styled from 'styled-components'

const AsideWrapper = styled.aside`
  width: 200px;
  height: 100%;
  background: var(--bg-color);
  @media (max-width: 768px) {
    background: var(--headings);
    z-index: 2;
    height: 470px;
    position: fixed;
    top: 105px;
    left: -260px;
    transition: left ease 0.5s;
    padding: 30px;
    overflow-y: scroll;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;

    &::-webkit-scrollbar {
      display: block;
      background: transparent;
      width: 10px;
    }
    
    &::-webkit-scrollbar-thumb { background: var(--contrast); border-radius: 20px; }

    &::-webkit-scrollbar-track-piece:start { margin-top: 100px; }

    &::-webkit-scrollbar-track-piece:end { margin-bottom: 100px; }
  }

  .case {
    position: relative;

    img {
      max-width: 100px;
      width: 100%;
      margin-bottom: 60px;
    }
    
    ul {
      width: 100%;
      list-style: none;
      padding: 0;

      li { 
        margin-bottom: 30px;
        font-family: Poppins;
        color: var(--text);
        cursor: pointer;
        outline: none;

        @media (max-width: 768px) { color: var(--contrast); }

        &:active, &:hover, &:focus { 
          color: var(--primary); 
          @media (max-width: 768px) { color: var(--aside-f); }
        }
      }
    }
  }
`

export default AsideWrapper