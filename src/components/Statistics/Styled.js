import styled from 'styled-components';

export const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 600px;
  margin: 0 auto 150px;
  .stats {
    display: flex;
    padding: 0;
    list-style: none;
    margin: 0;
    & > li {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border: 1px solid #d0d0d0;
      border-bottom: none;
      border-left: none;
      background: #eeeded;
      padding: 15px;
      &:last-child {
        border-right: none;
      }
    }
    .feedback-title,
    .value {
      display: block;
      font-weight: 600;
    }
    .feedback-title {
      margin-bottom: 8px;
      color: black;
    }
    .value {
      color: brown;
      font-size: 20px;
    }
  }
`;
