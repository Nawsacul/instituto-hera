function adjustImageSize() {
    const responsiveImages = document.getElementsByClassName('responsive-image');
    const screenWidth = window.innerWidth;

    // Ajuste o tamanho das imagens apenas se a largura da tela for igual ou maior que 768 pixels
    if (screenWidth >= 1200) {
        const referenceWidth = 1024;

        for (let i = 0; i < responsiveImages.length; i++) {
            const referenceImageWidth = parseInt(responsiveImages[i].getAttribute('data-reference-width'), 10);
            const referenceImageHeight = parseInt(responsiveImages[i].getAttribute('data-reference-height'), 10);

            const newImageWidth = (screenWidth * referenceImageWidth) / referenceWidth;
            const newImageHeight = (screenWidth * referenceImageHeight) / referenceWidth;

            responsiveImages[i].style.width = `${newImageWidth}px`;
            responsiveImages[i].style.height = `${newImageHeight}px`;
        }
    } else {
        // Redefinir o estilo para o tamanho original em dispositivos menores
        for (let i = 0; i < responsiveImages.length; i++) {
            responsiveImages[i].style.width = "";
            responsiveImages[i].style.height = "";
        }
    }
}

window.addEventListener('load', adjustImageSize);
window.addEventListener('resize', adjustImageSize);

function calculateGap() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
        const container = document.querySelector(".hero__container");
        const content = document.querySelector(".hero__content");
        const image = document.querySelector(".hero__image");
        const scheduleSections = document.querySelectorAll(".schedule");
        const scheduleV2Sections = document.querySelectorAll(".schedulev2");

        const containerStyle = window.getComputedStyle(container);
        const containerWidth = parseFloat(containerStyle.width);

        const contentStyle = window.getComputedStyle(content);
        const contentWidth = parseFloat(contentStyle.width);
        const contentMarginLeft = parseFloat(contentStyle.marginLeft);

        const imageStyle = window.getComputedStyle(image);
        const imageWidth = parseFloat(imageStyle.width);

        const scheduleContent = document.querySelector(".schedule__content");
        let widthDifference = 0;

        if (scheduleContent) {
            const scheduleContentStyle = window.getComputedStyle(scheduleContent);
            const scheduleContentWidth = parseFloat(scheduleContentStyle.width);
            widthDifference = contentWidth - scheduleContentWidth;
        }

        const gap = containerWidth - contentWidth - imageWidth - contentMarginLeft + widthDifference;

        // console.log("Gap:", gap);

        scheduleSections.forEach((section) => (section.style.gap = `${gap}px`));

        if (scheduleV2Sections.length > 0) {
            const scheduleV2Title = document.querySelector(".schedulev2__title");
            let widthDifferenceV2 = 0;

            if (scheduleV2Title) {
                const scheduleV2TitleStyle = window.getComputedStyle(scheduleV2Title);
                const scheduleV2TitleWidth = parseFloat(scheduleV2TitleStyle.width);
                widthDifferenceV2 = contentWidth - scheduleV2TitleWidth;
            }

            const columnGap = gap + widthDifferenceV2;

            scheduleV2Sections.forEach((section) => (section.style.columnGap = `${columnGap}px`));
        }
    } else {
        const scheduleSections = document.querySelectorAll(".schedule");
        scheduleSections.forEach((section) => (section.style.gap = ""));

        const scheduleV2Sections = document.querySelectorAll(".schedulev2");
        scheduleV2Sections.forEach((section) => (section.style.columnGap = ""));
    }
}

window.addEventListener("load", calculateGap);
window.addEventListener("resize", calculateGap);
