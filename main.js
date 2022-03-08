class PhotoViewer {
  constructor(rootElm, images) {
    this.rootElm = rootElm;
    this.images = images;
    this.currrentIndex = 0;
  }
  init() {
    const frameElm = this.rootElm.querySelector(".frame");
    const image = this.images[this.currentIndex];

    frameElm.innerHTML = `
    <div class="currentImage">
        <img src="${image}"/>
    </div>
    `;
  }
}

const images = [
  "https://fakeing.pl/250x150/81DAF5",
  "https://fakeing.pl/250x150/81DAF5",
  "https://fakeing.pl/250x150/81DAF5",
];
new PhotoViewer(document.getElementById("photoViewer"), images).init();
