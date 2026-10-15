function office({ people, parcel = [], cover = "", tail = [] }) {
  const stack = `${parcel.slice(0, 3).map((src) => `<img src="${src}" alt="">`).join("")}`;
  const desk = (p, i) => `
      <div class="office-seat ${p.away ? "away" : ""} ${p.basic ? "basic" : ""}" data-key="${p.key}" style="--i:${i}">
        ${p.away ? "" : `<span class="office-who"><img src="${p.idle}" alt=""><span class="office-parcel">${stack}</span></span>`}
        <span class="office-desk"><i class="office-laptop"></i><span class="office-inbox">${stack}</span><i class="office-dots"><b></b><b></b><b></b></i></span>
        <span class="office-name">${ICON.check}${p.name}</span>
      </div>`;
  const node = el(`<div class="office" style="--cols:${people.length + (cover ? 1 : 0) + tail.length}"><div class="office-track">
    ${people.map(desk).join("")}
    ${cover ? `<div class="office-seat phone" style="--i:${people.length}"><span class="device"><span class="shot"><img src="${cover}" alt=""></span></span></div>` : ""}
    ${tail.map((p, i) => desk(p, people.length + 1 + i)).join("")}
  </div></div>`);
  const track = node.firstElementChild;
  const seats = [...track.children];
  const phone = seats.findIndex((s) => s.classList.contains("phone"));
  const still = () => document.documentElement.classList.contains("still");
  const later = (ms, fn) => still() ? fn() : setTimeout(fn, ms);
  function focus(i) {
    const col = track.clientWidth / seats.length;
    const spare = track.clientWidth - node.clientWidth;
    const x = spare > 0 ? Math.max(0, Math.min(spare, (i + 0.5) * col - node.clientWidth / 2)) : 0;
    track.style.transform = `translateX(${-x}px)`;
  }
  function work(i) {
    seats.forEach((s, k) => s.classList.toggle("working", k === i));
    if (seats[i]) focus(i);
  }
  function pass(i) {
    const from = seats[i];
    const to = seats[i + 1];
    if (!from || !to) return;
    const who = from.querySelector(".office-who");
    const col = track.clientWidth / seats.length;
    from.classList.remove("working");
    from.classList.add("walk", "carry", "done");
    who.style.setProperty("--x", `${col - (to.classList.contains("phone") ? 62 : 46)}px`);
    who.style.setProperty("--y", "54px");
    focus(i + 0.5);
    later(950, () => {
      from.classList.remove("carry");
      to.classList.add("has");
      work(i + 1);
      from.classList.add("back");
      who.style.setProperty("--x", "0px");
      who.style.setProperty("--y", "0px");
      later(950, () => from.classList.remove("walk", "back"));
    });
  }
  function ready() {
    if (phone < 0) return;
    seats[phone].classList.remove("working");
    seats[phone].classList.add("ready");
  }
  function finish(i) {
    seats[i]?.classList.remove("working");
    seats[i]?.classList.add("done");
  }
  function set(done) {
    seats.forEach((s, k) => {
      const isPhone = k === phone;
      s.classList.toggle("done", !isPhone && k < done);
      s.classList.toggle("has", k > 0 && k <= done);
      s.classList.toggle("ready", isPhone && k < done);
    });
    work(done < seats.length ? done : -1);
  }
  return { node, work, pass, ready, finish, set, focus, phone, size: seats.length };
}
