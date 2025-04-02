document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll("[data-popover]");

  triggers.forEach(trigger => {
    const popoverId = trigger.getAttribute("data-popover");
    const popover = document.getElementById(popoverId);

    if (!popover) return;

    // Function to position the popover
    function positionPopover() {
      popover.style.top = `${trigger.offsetTop + trigger.offsetHeight + 10}px`;
      popover.style.left = `${trigger.offsetLeft + (trigger.offsetWidth / 2) - (popover.offsetWidth / 2)}px`;
    }

    // Show popover on hover
    trigger.addEventListener("mouseenter", () => {
      positionPopover();
      popover.classList.add("active");
    });

    // Hide popover when not hovering
    trigger.addEventListener("mouseleave", () => {
      popover.classList.remove("active");
    });

    // Also hide if the mouse leaves the popover itself
    popover.addEventListener("mouseleave", () => {
      popover.classList.remove("active");
    });
  });
});
