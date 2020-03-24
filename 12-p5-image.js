p = new P5()
s0.init({src: p.canvas})
p.hide()
let img;

p.loadImage(atom.project.getPaths()[0]+'/Hydra/File.svg', img => {
  p.clear()
  p.image(img, 0, 0)
})
