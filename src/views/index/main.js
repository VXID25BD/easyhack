import Slider from "../../components/slider/slider";
import Select from "../../components/select-platform/select-platform";
import Tabs from "../../components/tabs/tabs";
import Dropdown from "../../components/ui/dropdown/dropdown";

window.onload = () => {
    const functionSlider = new Slider(".slider", {});
    const reviewsSlider = new Slider(".reviews-slider", {});
    
    const languageDropdownHeader = new Dropdown(".header__language", {
        selectedId: 1,
        items: [
            {id: 1, img: "en.png", value: "En"},
            {id: 2, img: "ru.png", value: "Ru"},
        ]
    })
    const languageDropdownFooter = new Dropdown(".footer__language", {
        selectedId: 1,
        items: [
            {id: 1, img: "en.png", value: "En"},
            {id: 2, img: "ru.png", value: "Ru"},
        ]
    })

    const FunctionselectPlatform = new Select(".function__select-platform", {
        selectedId: 3
    });

    const TariffsPlatform = new Select(".tariffs__select-platform", {
        selectedId: 3
    });

    const TabsFaq = new Tabs(".faq-tabs", {
        multiTab: true,
    });
}
