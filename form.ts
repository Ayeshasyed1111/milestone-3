document.addEventListener("DOMContentLoaded", () => {
  const resumeForm = document.getElementById(
    "resumeForm"
  ) as HTMLFormElement | null;
  const resumeOutput = document.getElementById(
    "resumeOutput"
  ) as HTMLDivElement | null;
  const skillsSection = document.getElementById(
    "skillsSection"
  ) as HTMLElement | null;
  const toggleButton = document.getElementById(
    "toggleSkills"
  ) as HTMLButtonElement | null;

  // Toggle skills section visibility
  if (toggleButton && skillsSection) {
    let isSkillsVisible: boolean = true;

    toggleButton.addEventListener("click", () => {
      isSkillsVisible = !isSkillsVisible;
      skillsSection.style.display = isSkillsVisible ? "block" : "none";
      toggleButton.textContent = isSkillsVisible
        ? "Hide Skills Section"
        : "Show Skills Section";
    });
  }

  // Form submission and resume generation
  resumeForm?.addEventListener("submit", (event: Event) => {
    event.preventDefault();
    const profilepicture = (document.getElementById("profilepicture") as HTMLInputElement)?.value;

    

    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
    const education = (
      document.getElementById("education") as HTMLTextAreaElement
    )?.value;
    const experience = (
      document.getElementById("experience") as HTMLTextAreaElement
    )?.value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)
      ?.value;

    if (resumeOutput) {
      resumeOutput.innerHTML = `
                <h2>Generated Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Education:</strong> ${education}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>profilepicture</strong>${profilepicture}</p>
            `;
    }
  });
});
