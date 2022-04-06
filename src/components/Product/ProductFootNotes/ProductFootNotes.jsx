import {
  TagsContainer,
  Tag,
  EditorNote,
  NoteTitle,
  NoteDescription,
  NoteAuthor,
  Footer,
} from "./ProductFootNotes.styled";

const ProductFootNotes = () => {
  return (
    <Footer>
      <TagsContainer>
        <Tag>Blazers</Tag>
        <Tag>Jonathan Simkhai</Tag>
        <Tag>Viscose</Tag>
      </TagsContainer>

      <EditorNote>
        <NoteTitle>a note from the editor</NoteTitle>
        <NoteDescription>
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.
        </NoteDescription>
        <NoteAuthor>By MINNA SHIM, Fashion Editor</NoteAuthor>
      </EditorNote>
    </Footer>
  );
};

export default ProductFootNotes;
