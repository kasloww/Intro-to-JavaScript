let myForm = document.getElementById('myForm')

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()

    synth.triggerAttack(myForm.elements["yourName"].value)

    let timed = parseFloat(myForm.elements["timed"].value)

    synth.triggerRelease(Tone.now() + timed)
}

myForm.addEventListener("submit", onSubmit)