a.setBins(4)
a.setCutoff(0.4)
a.setScale(8)

// load the video
v1 = document.createElement('video')
v1.autoplay = true
v1.loop = true
v1.crossOrigin = "anonymous"; // <-- [This is a hack for the cross-origin data error]
v1.src = 'https://cdn.glitch.com/31e3a76c-5b48-4eca-9acc-de768e56400e%2FEvangelion.webm?v=1564387385187' // -dope-
v1.volume = 0.2

// have fun!
s0.init({ src:v1 })

src(o0)
 .layer(src(s0)//
 .luma(({time}) => Math.sin(time * 0.05)/Math.PI, 0.025) //
 .color(()=>(a.fft[0]*-1.07),()=>(a.fft[2]*0.79),()=>(a.fft[3]*-1.9)).contrast(1.2))
 .modulateScale( osc(10,30.19).modulate(noise(100000)) ,()=>(a.fft[0]*0.4)).modulate(o0,0.00043)
.out()

// to see the actual video use:
src(s0).out()
