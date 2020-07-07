import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }
    }

    svg {
        margin-right: 4px;
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                color: #6c6c80;

            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        /* toda vez q tiver um elemento a precedido por outro a, aplica o seguinte: */
        & + a {
            margin-top: 16px;
        }

        /* demorar 0.2 segundos pra fazer o hover */
        transition: transform 0.2s;

        &:hover {
            /* movimenta pra esquerda 10px ao passar o mouse */
            transform: translateX(10px);
        }

        div {
            margin-left: 16px;
            margin-right: 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            /* margin total a esquerda */
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;