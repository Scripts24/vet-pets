// SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 600,
    reset: true,
    opacity: 0,
})

sr.reveal(`.title-home, .title`)
sr.reveal(`.p-home`, { origin: 'left', delay: 2000 })
sr.reveal(`.btn-home, .carousel, .card-team, .card-services `, { origin: 'bottom' })

