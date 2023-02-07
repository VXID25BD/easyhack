import Slider from "../../components/slider/slider";
import Select from "../../components/select-platform/select-platform";

window.onload = () => {
    const functionSlider = new Slider(".slider", {});
    const reviewsSlider = new Slider(".reviews-slider", {});
    
    const FunctionselectPlatform = new Select(".function__select-platform", {
        selectedId: 3
    });

    const TariffsPlatform = new Select(".tariffs__select-platform", {
        selectedId: 3
    });
    document.querySelectorAll(".faq__question").forEach(q => q.addEventListener("click", (e) => e.target.classList.toggle("_active")));

}
