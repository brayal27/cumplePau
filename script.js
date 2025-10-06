document.addEventListener("DOMContentLoaded", () => {
  const hoy = new Date();
  const diaHoy = hoy.getDate();       // 1–31
  const mesHoy = hoy.getMonth() + 1;  // 1–12

  document.querySelectorAll("td.bloqueado").forEach((td) => {
    const numeroDia = parseInt(td.dataset.dia);
    const numeroMes = parseInt(td.dataset.mes);
    const link = td.querySelector("a");

    // Desbloquear si:
    // - es septiembre (9) y el día está entre 26 y 30, o
    // - es octubre (10) y el día es menor o igual al actual
    if (
      (numeroMes === 9 && numeroDia >= 26 && numeroDia <= 30) ||
      (numeroMes === 10 && numeroDia <= diaHoy)
    ) {
      td.classList.remove("bloqueado");
      if (link) link.style.pointerEvents = "auto";
    } else {
      if (link) link.style.pointerEvents = "none";
    }
  });
});
