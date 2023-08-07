document.addEventListener("DOMContentLoaded", function () {
    const pairSections = document.querySelectorAll(".pair-section");
    
    pairSections.forEach(section => {
        const radioInput = section.querySelector(".pair-radio");
        const clickedContent = section.querySelector(".clicked-content");
        
        section.addEventListener("click", (event) => {
            // Prevent the click event from reaching the radio input
            event.stopPropagation();

            // If the clicked section is already active, do nothing
            if (section.classList.contains("clicked")) {
                return;
            }

            // Deactivate all other radio buttons
            pairSections.forEach(otherSection => {
                const otherRadioInput = otherSection.querySelector(".pair-radio");
                otherRadioInput.checked = false;
            });

            // Close all other clicked-content
            pairSections.forEach(otherSection => {
                if (otherSection !== section) {
                    const otherClickedContent = otherSection.querySelector(".clicked-content");
                    otherClickedContent.style.maxHeight = "0";
                    otherSection.classList.remove("clicked");
                }
            });
            
            // Toggle clicked-content visibility
            radioInput.checked = true;
            clickedContent.style.maxHeight = clickedContent.scrollHeight + "px";
            section.classList.add("clicked");
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", () => {
        pairSections.forEach(section => {
            const clickedContent = section.querySelector(".clicked-content");
            clickedContent.style.maxHeight = "0";
            section.classList.remove("clicked");
        });
    });
});
