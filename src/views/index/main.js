import Slider from "../../components/slider/slider";
import Select from "../../components/select-platform/select-platform";
import Tabs from "../../components/tabs/tabs";


window.onload = () => {
    const functionSlider = new Slider(".slider", {});
    const reviewsSlider = new Slider(".reviews-slider", {});
    
    const FunctionselectPlatform = new Select(".function__select-platform", {
        selectedId: 3
    });

    const TariffsPlatform = new Select(".tariffs__select-platform", {
        selectedId: 3
    });

    const TabsFaq = new Tabs(".faq-tabs", {});
}
