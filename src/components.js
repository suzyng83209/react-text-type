import styled from 'styled-components';

export const BlinkingCaret = styled.span`
    border-right: 4px solid ${props => (props.isBlink ? '#232323' : 'transparent')};
    padding-right: ${props => (props.last ? '8px' : '0')};
`;

export const Container = styled.div`
    font-size: ${props => props.size || '4em'};
    overflow: hidden;
    padding: 16px;
`;
