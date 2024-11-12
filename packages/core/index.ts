import { makeInstaller } from "@mini-element/utils";
import components from "./components";
import "@mini-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@mini-element/components";
export default installer;
