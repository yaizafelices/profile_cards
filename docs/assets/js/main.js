"use strict";const designFieldset=document.querySelector(".js-designFieldset"),fillFieldset=document.querySelector(".js-fillFieldset"),shareFieldset=document.querySelector(".js-shareFieldset"),designArrow=document.querySelector(".js-design-arrow"),fillArrow=document.querySelector(".js-fill-arrow"),shareArrow=document.querySelector(".js-share-arrow"),inputName=document.querySelector(".js_inputName"),inputJob=document.querySelector(".js_inputJob"),inputImg=document.querySelector(".js_inputImg"),inputEmail=document.querySelector(".js_inputEmail"),inputTel=document.querySelector(".js_inputTel"),inputLinkedin=document.querySelector(".js_inputLinkedin"),inputGithub=document.querySelector(".js_inputGithub"),previewName=document.querySelector(".js_previewName"),previewJob=document.querySelector(".js_previewJob"),previewImg=document.querySelector(".js__profile-image"),previewTel=document.querySelector(".js_previewTel"),previewEmail=document.querySelector(".js_previewEmail"),previewLinkedin=document.querySelector(".js_previewLinkedin"),previewGithub=document.querySelector(".js_previewGithub"),allRadios=document.querySelectorAll(".js_radio"),firstRadio=document.querySelector(".js_firstRadio"),previewCard=document.querySelector(".js_preview-container"),shareBtn=document.querySelector(".js_shareBtn"),inputList=document.querySelectorAll(".js_input"),shareTwitter=document.querySelector(".js_shareTwitter"),designCollapsable=document.querySelector(".js-design"),fillCollapsable=document.querySelector(".js-fill"),shareCollapsable=document.querySelector(".js-share");function handleClick(e){e.preventDefault();const t=e.currentTarget.id;"design"===t?(designFieldset.classList.toggle("collapsed"),designArrow.classList.toggle("rotate"),fillFieldset.classList.add("collapsed"),fillArrow.classList.remove("rotate"),shareFieldset.classList.add("collapsed"),shareArrow.classList.remove("rotate"),shareTwitter.classList.add("collapsed"),shareBtn.classList.remove("clicked"),warning.innerHTML=""):"fill"===t?(fillFieldset.classList.toggle("collapsed"),fillArrow.classList.toggle("rotate"),designFieldset.classList.add("collapsed"),designArrow.classList.remove("rotate"),shareFieldset.classList.add("collapsed"),shareArrow.classList.remove("rotate"),shareTwitter.classList.add("collapsed"),shareBtn.classList.remove("clicked"),warning.innerHTML=""):"share"===t&&(shareFieldset.classList.toggle("collapsed"),shareArrow.classList.toggle("rotate"),shareTwitter.classList.contains("collapsed")?shareTwitter.classList.add("collapsed"):(shareTwitter.classList.toggle("collapsed"),shareBtn.classList.toggle("clicked")),designFieldset.classList.add("collapsed"),designArrow.classList.remove("rotate"),fillFieldset.classList.add("collapsed"),fillArrow.classList.remove("rotate"))}designArrow.classList.add("rotate"),designCollapsable.addEventListener("click",handleClick),fillCollapsable.addEventListener("click",handleClick),shareCollapsable.addEventListener("click",handleClick);const allInputs=document.querySelector(".js_allInputs"),data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},allButtons=document.querySelectorAll(".js_previewBtn");allButtons.forEach(e=>e.removeAttribute("href"));const handleInput=e=>{const t=e.target.name,r=e.target.value,l=document.getElementById(t);data[t]=r,"name"===t||"job"===t?l.innerHTML=r:"linkedin"===t||"github"===t?l.href=r:"email"===t?l.href="mailto: "+r:"phone"===t?l.href="tel: "+r:""===r&&(l.href.disabled=!0)};allInputs.addEventListener("keyup",handleInput);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage);const resetBtn=document.querySelector(".js-reset-btn");function clearObjectData(){data.palette=1,data.name="",data.job="",data.phone="",data.email="",data.linkedin="",data.github="",data.photo=""}function renderPreview(e){previewCard.classList.remove("palette-2","palette-3"),previewCard.classList.add("palette-1"),previewName.innerHTML="Nombre Apellido",previewJob.innerHTML="Front-end developer",previewTel.href=e.phone,previewEmail.href=e.email,previewLinkedin.href=e.linkedin,previewGithub.href=e.github,previewImg.style.backgroundImage="url(./assets/images/joker_face.jpg)"}function clearAllInputs(){firstRadio.checked=!0,inputName.value="",inputJob.value="",inputTel.value="",inputEmail.value="",inputLinkedin.value="",inputGithub.value="",inputImg.value="",profilePreview.style.backgroundImage="url(./assets/images/joker_face.jpg)"}const handleReset=e=>{e.preventDefault(),clearObjectData(),renderPreview(data),clearAllInputs(),localStorage.removeItem("cardStoraged"),shareTwitter.classList.add("collapsed"),shareBtn.classList.remove("clicked"),allButtons.forEach(e=>e.removeAttribute("href"))};function handlerRadio(e){const t=parseInt(e.currentTarget.value);data.palette=t,previewCard.classList.remove("palette-1","palette-2","palette-3"),previewCard.classList.add("palette-"+t)}resetBtn.addEventListener("click",handleReset);for(const e of allRadios)e.addEventListener("click",handlerRadio);const linkCard=document.querySelector(".js_link-card"),warning=document.querySelector(".js_warning"),btnTwitter=document.querySelector(".js_shareTwitterBtn");function handleCreateCard(e){e.preventDefault(),console.log(data),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{console.log(e),e.success?(linkCard.innerHTML=e.cardURL,linkCard.href=e.cardURL,shareTwitter.classList.remove("collapsed"),shareBtn.classList.add("clicked"),warning.innerHTML="",warning.innerHTML="",btnTwitter.href="https://twitter.com/intent/tweet?text=Os%20comparto%20mi%20tarjeta%20profesional&url="+e.cardURL,localStorage.setItem("cardStoraged",JSON.stringify(e.cardURL))):warning.innerHTML="Deben estar rellenos todos los campos"})}shareBtn.addEventListener("click",handleCreateCard);