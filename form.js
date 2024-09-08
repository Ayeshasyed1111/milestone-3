document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var skillsSection = document.getElementById("skillsSection");
    var toggleButton = document.getElementById("toggleSkills");
    // Toggle skills section visibility
    if (toggleButton && skillsSection) {
        var isSkillsVisible_1 = true;
        toggleButton.addEventListener("click", function () {
            isSkillsVisible_1 = !isSkillsVisible_1;
            skillsSection.style.display = isSkillsVisible_1 ? "block" : "none";
            toggleButton.textContent = isSkillsVisible_1
                ? "Hide Skills Section"
                : "Show Skills Section";
        });
    }
    // Form submission and resume generation
    resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        var name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value;
        var email = (_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value;
        var phone = (_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value;
        var education = (_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value;
        var experience = (_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value;
        var skills = (_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value;
        if (resumeOutput) {
            resumeOutput.innerHTML = "\n                <h2>Generated Resume</h2>\n                <p><strong>Name:</strong> ".concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Education:</strong> ").concat(education, "</p>\n                <p><strong>Experience:</strong> ").concat(experience, "</p>\n                <p><strong>Skills:</strong> ").concat(skills, "</p>\n            ");
        }
    });
});
