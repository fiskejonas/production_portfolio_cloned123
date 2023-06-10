import { animate, scroll } from "motion";

document.querySelectorAll(".para_container").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("h2");
  scroll(animate(elementderskalparallaxes, { y: [-100, 100] }), {
    target: elementderskalparallaxes,
  });
});
