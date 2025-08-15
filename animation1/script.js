var tl= gsap.timeline({
    repeat: -1
});

tl
.to(".imgcontain",{
    width:"100%",
    ease: Expo.easeInOut,
    // duration:2,
    stagger:2
}, 'same')

.to(".text h1",{
    top:"0",
    ease: Expo.easeInOut,
    // duration:2,
    stagger:2
},'same')
.to(".text h1",{
    top:"-100%",
    delay:2,
    ease: Expo.easeInOut,
    // duration:2,
    stagger:2
},'same')