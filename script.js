document.addEventListener("DOMContentLoaded", () => {
  const hoy = new Date();
  const diaHoy = hoy.getDate();       // 1–31
  const mesHoy = hoy.getMonth() + 1;  // 1–12

  document.querySelectorAll("td.bloqueado").forEach((td) => {
    const numeroDia = parseInt(td.dataset.dia);
    const numeroMes = parseInt(td.dataset.mes);
    const link = td.querySelector("a");

    // Desbloquear si la fecha del regalo es anterior o igual a hoy
    if (
      numeroMes < mesHoy ||
      (numeroMes === mesHoy && numeroDia <= diaHoy)
    ) {
      td.classList.remove("bloqueado");
      if (link) link.style.pointerEvents = "auto";
    } else {
      if (link) link.style.pointerEvents = "none";
    }
  });
});
