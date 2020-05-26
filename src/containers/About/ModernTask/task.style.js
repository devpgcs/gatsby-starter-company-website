import styled from 'styled-components'

const TaskWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    @media (max-width: 1024px) {
      max-width: 750px;
    }

    .left-side {
      width: 40%;
      max-width: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto 60px;
      }      

      .description {
        width: 100%;
        margin-top: 30px;
        text-align: center;

        p {
          margin: 0 auto;
          @media (max-width: 768px) {
            font-size: 14px;
            margin
          }
        }
      }
    }

    .right-side {
      width: 40%;
      max-width: 500px;
      max-height: 300px;

      @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
      }

      img {
        display: block;
        max-width: 500px;
        max-height: 300px;
        width: 100%;
        height: 56vw;
        border: 1px solid var(--text);
        @media (max-width: 768px) {
          margin: 0 auto;
        }
      }
    }
  }

  .bg:nth-child(2) {
    background: var(--oPrimary);
  }
`

export default TaskWrapper