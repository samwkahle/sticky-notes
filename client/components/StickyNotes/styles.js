import styled from 'styled-components';

export const NoteListWrapper = styled.ul`
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700;800&display=swap');

  margin-top: 70px;
  padding: 0;
  font-family: 'Assistant', sans-serif;

  @media (max-width:620px) {
    width: 100%;
    margin: 70px auto;
  }
`;


export const NoteWrapper = styled.li`
  margin: 40px;
  float: none;
  list-style: none;
  display: inline-block;
  @media (max-width: 620px) {
    margin: 40px 4%;
    float: none;
    display: inline-block;
    width: 40%;
  }
`;


export const Note = styled.div`
  text-decoration: none;
  display: block;
  width: 210px;
  padding: 1em;
  -moz-box-shadow: 5px 5px 7px #212121;
  -webkit-box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);
  -moz-transition: -moz-transform 0.15s linear;
  -o-transition: -o-transform 0.15s linear;
  -webkit-transition: -webkit-transform 0.15s linear;
  text-align: left;

  background-color: ${props => props.backgroundColor};
  color: ${props => props.color|| '#000'};

  -o-transform: rotate(${props => props.rotate}deg);
  -webkit-transform: rotate(${props => props.rotate}deg);
  -moz-transform: rotate(${props => props.rotate}deg);

  a, h4 {
    cursor: pointer;
  }
  a {
    color: white;
  }
  small {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 10px;
  }
  .buttons {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  @media (max-width: 620px) {
    width:100%;
  }
`;
