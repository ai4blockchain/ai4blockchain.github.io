// Assumed to be in the timezone of the conference.
const startTime = new Date(2021, 12 - 1, 8, 8)
let nextEventTime = startTime
document.querySelectorAll('b[data-length-mins], strong[data-length-mins]').forEach(element => {
    const offsetMins = parseInt(element.dataset.lengthMins, 10)
    element.textContent = `${String(nextEventTime.getHours()).padStart(2, '0')}:${String(nextEventTime.getMinutes()).padStart(2, '0')}`
    // nextEventTime = new Date(nextEventTime)
    nextEventTime.setMinutes(nextEventTime.getMinutes() + offsetMins)
})