/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as renderHead, e as renderSlot, f as createAstro } from '../chunks/astro/server_nTBWaa2m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { FaLaptopCode, FaGithub, FaLinkedin, FaRegMoon } from 'react-icons/fa';
import { GrDocumentDownload, GrCaretPrevious, GrCaretNext } from 'react-icons/gr';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-2xl flex justify-between items-center px-4 py-2"> ${renderComponent($$result, "FaLaptopCode", FaLaptopCode, {})} <nav class="flex-2 flex justify-center gap-4 items-center"> <a href="#" class="hover:scale-110 rounded-lg transition duration-300">${renderComponent($$result, "FaGithub", FaGithub, {})}</a> <a href="#" class="hover:scale-110 rounded-lg transition duration-300">${renderComponent($$result, "FaLinkedin", FaLinkedin, {})}</a> </nav> </footer>`;
}, "C:/htdocs/Porfolio-Astro/src/components/FooterComponent/footer.astro", void 0);

const $$Buttonlight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<button id="theme-toggle" aria-label="Toggle light/dark mode" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800:scale-110 transition duration-300"> ${renderComponent($$result, "FaRegMoon", FaRegMoon, {})} </button>`;
}, "C:/htdocs/Porfolio-Astro/src/components/DarkLightButtonComponent/buttonlight.astro", void 0);

const $$DCVButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="../../../public/assets/CVMariaGargolesL.pdf" download="MariaGargoles" class="hover:scale-110 transition duration-300 flex items-center gap-2"> ${renderComponent($$result, "GrDocumentDownload", GrDocumentDownload, {})} </a>`;
}, "C:/htdocs/Porfolio-Astro/src/components/DownloadCVButton/DCVButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="text-2xl flex justify-between items-center px-4 py-2"> <div> <span class="firma"></span>  </div> <nav class="flex-1 flex justify-evenly gap-4 items-center"> <a href="/About" class="font-cinzel font-bold text-xl px-4 py-2 rounded-lg transition duration-300">About</a> <a href="/Projects" class="font-cinzel font-bold text-xl px-4 py-2 rounded-lg transition duration-300">Projects</a> <a href="/Contact" class="font-cinzel font-bold text-xl px-4 py-2 rounded-lg transition duration-300">Contact</a> </nav> <div class="flex-2 flex justify-center gap-4 items-center"> ${renderComponent($$result, "DCVButton", $$DCVButton, {})} ${renderComponent($$result, "Buttonlight", $$Buttonlight, { "class": "hover:scale-110 transition duration-300" })} </div> </header>`;
}, "C:/htdocs/Porfolio-Astro/src/components/HeaderComponent/header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Dynamictext = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<span id="dynamic-text" class="font-syne text-2xl font-bold mb-4 pb-5"></span> <script lang="ts">\n  const text = `Maria Gargoles Lajarin`;\n  const element = document.getElementById("dynamic-text");\n\n  let index = 0;\n\n  const typeText = () => {\n    if (element && index < text.length) {\n      element.textContent += text.charAt(index);\n      index++;\n      setTimeout(typeText, 45);\n    }\n  };\n\n  typeText();\n<\/script>'], ["", '<span id="dynamic-text" class="font-syne text-2xl font-bold mb-4 pb-5"></span> <script lang="ts">\n  const text = \\`Maria Gargoles Lajarin\\`;\n  const element = document.getElementById("dynamic-text");\n\n  let index = 0;\n\n  const typeText = () => {\n    if (element && index < text.length) {\n      element.textContent += text.charAt(index);\n      index++;\n      setTimeout(typeText, 45);\n    }\n  };\n\n  typeText();\n<\/script>'])), maybeRenderHead());
}, "C:/htdocs/Porfolio-Astro/src/components/DynamicTextComponet/dynamictext.astro", void 0);

const foto = new Proxy({"src":"/_astro/Studio2.BlG18uIa.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/htdocs/Porfolio-Astro/public/assets/Studio2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/htdocs/Porfolio-Astro/public/assets/Studio2.png");
							return target[name];
						}
					});

const $$MainComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="flex items-start justify-center w-full pt-10 px-6 mt-12"> <div class="w-full md:w-1/2 text-center px-4"> ${renderComponent($$result, "DynamicTextComponent", $$Dynamictext, {})} <h2 class="font-cinzel text-2xl font-bold mb-4 pb-2">
Junior FullStack Developer
</h2> <p class="font-roboto text-sm md:text-base">
Soy desarrolladora junior Full Stack con experiencia en administración de
      sistemas y ciberseguridad. Mi pasión por el desarrollo web me ha llevado a
      trabajar en proyectos como aplicaciones de gestión hotelera, integrando
      tecnologías como React, Node.js y MongoDB. Además, tengo sólidos
      conocimientos en la resolución de incidencias técnicas, automatización con
      scripts y metodologías ágiles. Estoy comprometida con el aprendizaje
      continuo y la creación de soluciones innovadoras que aporten valor.
</p> </div> <div class="w-full md:w-1/2 text-center px-4"> <img${addAttribute(foto.src, "src")} alt="imagen maria gargoles" class="rounded-full mx-auto w-32 md:w-40"> </div> </main>`;
}, "C:/htdocs/Porfolio-Astro/src/components/MainComponent/MainComponent.astro", void 0);

const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<section class="container mx-auto px-4 py-8"> <h2 class="text-3xl font-syne font-bold mb-6 text-center">Last Projects</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Project 1 --> <div class="project-item border rounded-lg p-4 shadow-md slider-container"> <h2 class="text-xl font-semibold flex justify-center items-center mb-4">Dashboard Miranda</h2> <div class="relative overflow-hidden"> <div class="slider flex transition-transform duration-300"> <div class="min-w-full h-64 bg-red-500 flex justify-center items-center text-white text-2xl font-bold">Slide 1</div> <div class="min-w-full h-64 bg-green-500 flex justify-center items-center text-white text-2xl font-bold">Slide 2</div> <div class="min-w-full h-64 bg-blue-500 flex justify-center items-center text-white text-2xl font-bold">Slide 3</div> </div> <button class="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretPrevious", GrCaretPrevious, {})} </button> <button class="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretNext", GrCaretNext, {})} </button> </div> <p class="mt-4 font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div> <!-- Project 2 --> <div class="project-item border rounded-lg p-4 shadow-md slider-container"> <h2 class="text-xl font-syne flex justify-center font-semibold mb-4">Hotel Miranda</h2> <div class="relative overflow-hidden"> <div class="slider flex transition-transform duration-300"> <div class="min-w-full h-64 bg-purple-500 flex justify-center items-center text-white text-2xl font-bold">Slide 1</div> <div class="min-w-full h-64 bg-yellow-500 flex justify-center items-center text-white text-2xl font-bold">Slide 2</div> <div class="min-w-full h-64 bg-pink-500 flex justify-center items-center text-white text-2xl font-bold">Slide 3</div> </div> <button class="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretPrevious", GrCaretPrevious, {})} </button> <button class="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretNext", GrCaretNext, {})} </button> </div> <p class="mt-4 font-roboto">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </div> <!-- Project 3 --> <div class="project-item border rounded-lg p-4 shadow-md slider-container"> <h2 class="text-xl flex font-syne justify-center font-semibold mb-4">APP Imagenes</h2> <div class="relative overflow-hidden"> <div class="slider flex transition-transform duration-300"> <div class="min-w-full h-64 bg-teal-500 flex justify-center items-center text-white text-2xl font-bold">Slide 1</div> <div class="min-w-full h-64 bg-orange-500 flex justify-center items-center text-white text-2xl font-bold">Slide 2</div> <div class="min-w-full h-64 bg-indigo-500 flex justify-center items-center text-white text-2xl font-bold">Slide 3</div> </div> <button class="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretPrevious", GrCaretPrevious, {})} </button> <button class="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretNext", GrCaretNext, {})} </button> </div> <p class="mt-4 font-roboto">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p> </div> <!-- Project 4 --> <div class="project-item border rounded-lg p-4 shadow-md slider-container"> <h2 class="text-xl font-syne flex justify-center font-semibold mb-4">Project 4</h2> <div class="relative overflow-hidden"> <div class="slider flex transition-transform duration-300"> <div class="min-w-full h-64 bg-lime-500 flex justify-center items-center text-white text-2xl font-bold">Slide 1</div> <div class="min-w-full h-64 bg-cyan-500 flex justify-center items-center text-white text-2xl font-bold">Slide 2</div> <div class="min-w-full h-64 bg-fuchsia-500 flex justify-center items-center text-white text-2xl font-bold">Slide 3</div> </div> <button class="prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretPrevious", GrCaretPrevious, {})} </button> <button class="next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"> ${renderComponent($$result, "GrCaretNext", GrCaretNext, {})} </button> </div> <p class="mt-4 font-roboto">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> </div> </div> </section>`;
}, "C:/htdocs/Porfolio-Astro/src/components/ProyectsComponent/proyects.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="light"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "MainComponent", $$MainComponent, {})} ${renderComponent($$result, "Proyects", $$Proyects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/htdocs/Porfolio-Astro/src/components/ProyectsComponent/proyects.astro", "client:component-export": "default" })} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/htdocs/Porfolio-Astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/htdocs/Porfolio-Astro/src/pages/index.astro", void 0);

const $$file = "C:/htdocs/Porfolio-Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
