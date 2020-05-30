import styled from 'styled-components'

const SectionWrapper = styled.section`
  margin-top: 60px;
  
  .case {
    max-width: 550px;
    margin: 0 auto;
    box-shadow: 0 5px 20px var(--shadow);
    border-radius: 10px;
    padding: 60px 0;

    form { max-width: 450px; margin: 0 auto; padding: 0 30px; box-shadow: none;}

    label { margin-bottom: 10px; }

    input, textarea {
      width: 100%;
      border: 1px solid var(--primary);
      box-sizing: border-box;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      padding: 8px 21px;
      margin-bottom: 30px;
    }

    textarea { height: 80px; background: var(--bg-color); outline: none; }

    button { display: block; margin: 30px auto 0; }
  }
`

export default SectionWrapper