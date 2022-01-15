import Vue from "vue";
import CardButton from "@/components/UI/CardButton.vue";
import Modal from "@/components/UI/Modal.vue";
import Select from "@/components/UI/BlogSelect.vue";

const components = [CardButton, Modal, Select];

components.forEach((component) => Vue.component(component.name, component));
