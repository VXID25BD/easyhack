import Slider from "../../components/slider/slider";

window.onload = () => {
    const functionSlider = new Slider(".slider", {});
    const reviewsSlider = new Slider(".reviews-slider", {});

    document.querySelectorAll(".faq__question").forEach(q => q.addEventListener("click", (e) => e.target.classList.toggle("_active")));

}
