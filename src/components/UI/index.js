import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CardButton from "@/components/UI/CardButton.vue";
import Modal from "@/components/UI/Modal.vue";
import Select from "@/components/UI/BlogSelect.vue";

const components = [CardButton, Modal, Select];

components.forEach((component) => Vue.component(component.name, component));

library.add(faTrash);
components.push(Vue.component("font-awesome-icon", FontAwesomeIcon));
