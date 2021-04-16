import BodyMap from "@/components/BodyMap";

const VueBodyMap = {
    install(Vue) {
        Vue.component("body-map", BodyMap);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueBodyMap);
}

export default VueBodyMap;
