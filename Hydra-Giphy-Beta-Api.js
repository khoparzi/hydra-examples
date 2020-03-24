// With p5
p = new P5()
s0.init({src: p.canvas})
p.hide()
img = null;

// With beta api
url = "http://api.giphy.com/v1/gifs/search?api_key="+giphyApiKey+"&limit=1"
makeGif = (giphy) => {
  if (img != null && img.elt != null) { img.remove() }
  console.log(giphy.data[0].images.original)
  // img = p.createVideo(giphy.data[0].images.original.mp4)
  img = p.createImg(giphy.data[0].images.original.url)
  img.elt.style.zIndex = -10 // Push back the image element
  // Connect the canvas to buffer after loading image
  img.elt.onload = () => {
    s0.init({src: img.elt})
  }
}

query = "&q=dance+around&offset=4"
p.loadJSON(url+query, makeGif)
p.draw = () => {
  if (img != null && img.elt != null)
    img.position(p.random(),0)
}

src(s0).thresh(0.2).out(o1)//.scale(1,1.7,1)
// .repeat(5).invert(0).luma(0.15)
  // .thresh(0.2).color(1,0,0)
  // .scrollX(0.7)

src(o1).color(1,0,0)
  .diff(src(o1).color(0,1,0).scrollX(0.125))
  .diff(src(o1).color(0,0,1).scrollX(0.135))
  // .scrollY(0,1)
  // .scale(0.5)
  // .kaleid(18)
// .rotate(0,1)
.out()


p.remove()

p.rect(10,10, 100, 100)
