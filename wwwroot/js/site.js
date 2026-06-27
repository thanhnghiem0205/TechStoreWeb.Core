// site.js - small interactions for prototype
// Mobile nav toggle (if added later)
function toggleMobileNav(){
    const el = document.querySelector('#mobile-nav');
    if(!el) return;
    el.classList.toggle('hidden');
}
