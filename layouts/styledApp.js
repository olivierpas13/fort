import styled from 'styled-components';

const AppPage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fbfbfc;

  .sidebar-wrapper {
  display: none;

  &.active {
    display: block;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100% - 60px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }

  @media (min-width: 769px) {
    display: block;
    position: static;
  }
}

  .sidebar-toggle {
    display: none;
  }

  .page-header {
    display: none;
  }

  & .page-content {
    padding-left: 10em;
    margin: 2em auto;
    width: 80vw;
  }

  @media (max-width: 768px) {
    & .page-content {
      padding-left: 0;
      margin-top: 60px;
      width: 100%;
    }

    .sidebar-toggle {
      display: block;
      position: absolute;
      /* top: 15px; */
      left: 15px;
      background: none;
      border: none;
      font-size: 24px;
    }
    
    .page-header {
      z-index: 999;
      display: flex;
      position: fixed;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 0 15px;
      height: 60px;
      background-color: #222;
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

export default AppPage;


// import styled from 'styled-components';

// const AppPage = styled.section`
//     width: 98vw;
//     display: flex;
//     background-color: #fbfbfc;
//     & .page-content{
//         padding-left: 7em;
//         margin: 2em auto;
//         width: 75vw;
//     }
// `;

// export default AppPage;