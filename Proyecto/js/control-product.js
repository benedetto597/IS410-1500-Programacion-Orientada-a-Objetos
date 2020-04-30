// Obtener intervalo de tiempo restante para finalización de una promoción
const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadline);
        el.innerHTML = `
            <h6 class="text-white bg-danger  py-2 text-center my-2 ">${time.remainDays} Dias | ${time.remainHours} Horas | ${time.remainMinutes} Minutos | ${time.remainSeconds} Segundos</h6>
            `;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML = `
                    <h6 class="text-white bg-danger px-2 py-2 text-center mx-2 my-2 ">Promoción Expirada</h6>
                    `;
        }
    }, 1000)
}

countdown('Mon Oct 26 2020 00:16:56 GMT-0500', 'clock');