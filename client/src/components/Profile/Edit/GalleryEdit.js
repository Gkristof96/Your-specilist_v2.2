const GalleryEdit = () => {
  return (
    <div className="gallery-upload-card">
      <h1>Jelenleg nem tölthető fel fénykép</h1>
      <p>
        Lehetőséged van képeket feltölteni korábbi munkáidról, illetve itt tudod
        törölni a már feltöltött képeidet is.
      </p>
      <div className="gallery-container">
        <h1>Feltöltött képek</h1>
      </div>
      <form>
        <label>Tölts fel egy képet</label>
        <input type="file" />

        <button type="submit">Feltöltés</button>
      </form>
    </div>
  );
};

export default GalleryEdit;
