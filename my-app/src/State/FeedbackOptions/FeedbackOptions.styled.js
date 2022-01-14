import styled from '@emotion/styled';

export const Heading = styled.h2`
    font-weight: bold;
    font-size: 22px;
    line-height: 1.166em;
    text-align: left;
    color: #26562E;
`;

export const ButtonClass = styled.button`
    border: transparent;
    cursor: pointer;
    background: #13B42D;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.875em;
    color: #ffffff;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:not(:last-child) {
        margin-right: 10px;
    }
    `;