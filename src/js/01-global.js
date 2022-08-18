'use strict';

//  1º paso: llamar a las clases (buscar los elementos que necesitamos)
//  2º paso: escuchar al evento cuando hagamos click sobre la flecha
//  3º paso: añadir o quitar la clase collapsed
//  4º paso: añadir o quitar la clase rotate

const designFieldset = document.querySelector('.js-designFieldset');
const fillFieldset = document.querySelector('.js-fillFieldset');
const shareFieldset = document.querySelector('.js-shareFieldset');

const designArrow = document.querySelector('.js-design-arrow');
const fillArrow = document.querySelector('.js-fill-arrow');
const shareArrow = document.querySelector('.js-share-arrow');


const inputName = document.querySelector ('.js_inputName');
const inputJob = document.querySelector ('.js_inputJob');
const inputImg = document.querySelector ('.js_inputImg');
const inputEmail = document.querySelector ('.js_inputEmail');
const inputTel = document.querySelector ('.js_inputTel');
const inputLinkedin = document.querySelector ('.js_inputLinkedin');
const inputGithub = document.querySelector ('.js_inputGithub');

const previewName = document.querySelector ('.js_previewName');
const previewJob = document.querySelector ('.js_previewJob');
const previewImg = document.querySelector ('.js__profile-image');
const previewTel = document.querySelector ('.js_previewTel');
const previewEmail = document.querySelector ('.js_previewEmail');
const previewLinkedin = document.querySelector ('.js_previewLinkedin');
const previewGithub = document.querySelector ('.js_previewGithub');

const allRadios = document.querySelectorAll('.js_radio');
const firstRadio = document.querySelector('.js_firstRadio');
const previewCard = document.querySelector('.js_preview-container');

const shareBtn = document.querySelector('.js_shareBtn');


// if design desplegado {
//    fill y share se van a la mierda
// else if fill desplegado

// }
//}