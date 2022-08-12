import styled from 'styled-components';

export const StyledSection = styled.section`
  .section-title {
    margin-bottom: 20px;
    display: flex;
    gap: 8px;
    align-items: center;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.71px;

    letter-spacing: 1.25px;
    text-transform: uppercase;
  }

  .section-content {
    margin-bottom: 32px;
  }

  .section--right {
    justify-content: flex-end;
  }
`;
