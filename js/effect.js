let timeline = gsap.timeline();

timeline.from(".background", { duration: 0.5, scale: 0 });
timeline.from(".logo", { duration: 0.5, opacity: 0, scale: 2 });
timeline.from("h1", { duration: 0.5, opacity: 5, scale: 2 });

