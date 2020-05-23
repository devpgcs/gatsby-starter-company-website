import styled from 'styled-components'

const TaskWrapper = styled.section`
  .case {
    max-width: 1200px;
    margin: 30px auto 0;
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .left-side, .right-side {
      margin-bottom: 60px;
      margin-top: 60px
    }

    .left-side {
      width: 45%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-right: 30px;

      .description {
        width: 100%;
        margin-top: 30px;
        text-align: center;

        p {
          width: 400px;
          margin: 0 auto;
        }
      }
    }

    .right-side {
      width: 45%;
      img {
        display: block;
        max-width: 450px;
        width: 50vw;
        max-height: 450px;
        height: 60vh;
        border: 1px solid var(--text);
      }
    }
  }

  .bg:nth-child(2) {
    background: var(--oPrimary);
  }
`

export default TaskWrapper