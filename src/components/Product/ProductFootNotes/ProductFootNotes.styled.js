import styled from "styled-components";
//
export const Footer = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 2rem;
  }
  @media only screen and (min-width: 1200px) {
    width: auto;
    margin-top: 4rem;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
  margin: 5rem 0;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 2rem 0;
  }
  @media only screen and (min-width: 1200px) {
    width: 30%;
    margin: 5rem 0;
  }
`;
export const Tag = styled.div`
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  text-decoration: underline;
  color: #111;
  transition: all 0.3s ease;

  &:hover {
    color: #000;
  }
`;
export const EditorNote = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const NoteTitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const NoteDescription = styled.p`
  width: 60%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 1.35rem;
  }
  @media only screen and (min-width: 1200px) {
    width: 60%;
    font-size: 1.5rem;
  }
`;
export const NoteAuthor = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
