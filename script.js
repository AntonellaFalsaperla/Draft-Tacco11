function toggleColors() {
    // toggle background color
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('bg-red');
    // toggle Tacco 11 logo color scheme
    const logo = document.getElementById('ped-logo');
    if (logo.src.includes("simbolo donna2.png")) {
    } else {
        logo.src = 'simbolo donna2.png';
    }
}