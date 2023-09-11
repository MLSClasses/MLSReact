import React,{useEffect} from 'react';
// import {Util} from "./util";
import "../assets/css/faq.css";
import "../pages/util";
import "../pages/main";
const Faq=()=>{
    // useEffect(() => {
    //         // FAQ Template - by CodyHouse.co
    //         var FaqTemplate = function(element) {
    //             this.element = element;
    //             this.sections = this.element.getElementsByClassName('cd-faq__group');
    //             this.triggers = this.element.getElementsByClassName('cd-faq__trigger');
    //             this.faqContainer = this.element.getElementsByClassName('cd-faq__items')[0];
    //             this.faqsCategoriesContainer = this.element.getElementsByClassName('cd-faq__categories')[0];
    //             this.faqsCategories = this.faqsCategoriesContainer.getElementsByClassName('cd-faq__category');
    //           this.faqOverlay = this.element.getElementsByClassName('cd-faq__overlay')[0];
    //           this.faqClose = this.element.getElementsByClassName('cd-faq__close-panel')[0];
    //           this.scrolling = false;
    //           initFaqEvents(this);
    //         console.log("this",this);
    //       };
        
    //       function initFaqEvents(faqs) {
    //           // click on a faq category
    //             faqs.faqsCategoriesContainer.addEventListener('click', function(event){
    //                 var category = event.target.closest('.cd-faq__category');
    //                 if(!category) return;
    //                 var mq = getMq(faqs),
    //                     selectedCategory = category.getAttribute('href').replace('#', '');
    //                 if(mq == 'mobile') { // on mobile, open faq panel
    //                     event.preventDefault();
    //                     faqs.faqContainer.scrollTop = 0;
    //                     Util.addClass(faqs.faqContainer, 'cd-faq__items--slide-in');
    //                     Util.addClass(faqs.faqClose, 'cd-faq__close-panel--move-left');
    //                     Util.addClass(faqs.faqOverlay, 'cd-faq__overlay--is-visible');
    //                     var selectedSection = faqs.faqContainer.getElementsByClassName('cd-faq__group--selected');
    //                     if(selectedSection.length > 0) {
    //                         Util.removeClass(selectedSection[0], 'cd-faq__group--selected');
    //                     }
    //                     Util.addClass(document.getElementById(selectedCategory), 'cd-faq__group--selected');
    //                 } else { // on desktop, scroll to section
    //                     if(!window.requestAnimationFrame) return;
    //                     event.preventDefault();
    //                     var windowScrollTop = window.scrollY || document.documentElement.scrollTop;
    //                     Util.scrollTo(document.getElementById(selectedCategory).getBoundingClientRect().top + windowScrollTop + 2, 200);
    //                 }
    //             });
        
    //             // on mobile -> close faq panel
    //             faqs.faqOverlay.addEventListener('click', function(event){
    //                 closeFaqPanel(faqs);
    //             });
    //             faqs.faqClose.addEventListener('click', function(event){
    //                 event.preventDefault();
    //                 closeFaqPanel(faqs);
    //             });
        
    //             // on desktop -> toggle faq content visibility when clicking on the trigger element
    //             faqs.faqContainer.addEventListener('click', function(event){
    //                 if(getMq(faqs) != 'desktop') return;
    //                 var trigger = event.target.closest('.cd-faq__trigger');
    //                 if(!trigger) return;
    //                 event.preventDefault();
    //                 var content = trigger.nextElementSibling,
    //                     parent = trigger.closest('li'),
    //                     bool = Util.hasClass(parent, 'cd-faq__item-visible');
        
    //                 Util.toggleClass(parent, 'cd-faq__item-visible', !bool);
        
    //                 //store initial and final height - animate faq content height
    //                 Util.addClass(content, 'cd-faq__content--visible');
    //                 var initHeight = bool ? content.offsetHeight: 0,
    //                     finalHeight = bool ? 0 : content.offsetHeight;
                    
    //                 if(window.requestAnimationFrame) {
    //                     Util.setHeight(initHeight, finalHeight, content, 200, function(){
    //                         heighAnimationCb(content, bool);
    //                     });
    //                 } else {
    //                     heighAnimationCb(content, bool);
    //                 }
    //             });
                
    //             if(window.requestAnimationFrame) {
    //                 // on scroll -> update selected category
    //                 window.addEventListener('scroll', function(){
    //                     if(getMq(faqs) != 'desktop' || faqs.scrolling) return;
    //                     faqs.scrolling = true;
    //                     window.requestAnimationFrame(updateCategory.bind(faqs)); 
    //                 });
    //             }
    //       };
        
    //       function closeFaqPanel(faqs) {
    //           Util.removeClass(faqs.faqContainer, 'cd-faq__items--slide-in');
    //           Util.removeClass(faqs.faqClose, 'cd-faq__close-panel--move-left');
    //           Util.removeClass(faqs.faqOverlay, 'cd-faq__overlay--is-visible');
    //       };
        
    //       function getMq(faqs) {
    //             //get MQ value ('desktop' or 'mobile') 
    //             return window.getComputedStyle(faqs.element, '::before').getPropertyValue('content').replace(/'|"/g, "");
    //       };
        
    //       function updateCategory() { // update selected category -> show green rectangle to the left of the category
    //           var selected = false;
    //             for(var i = 0; i < this.sections.length; i++) {
    //                 var top = this.sections[i].getBoundingClientRect().top,
    //                     bool = (top <= 0) && (-1*top < this.sections[i].offsetHeight);
    //                 Util.toggleClass(this.faqsCategories[i], 'cd-faq__category-selected', bool);
    //                 if(bool) selected = true;
    //             }
    //             if(!selected) Util.addClass(this.faqsCategories[0], 'cd-faq__category-selected');
    //             this.scrolling = false;
    //       };
        
    //       function heighAnimationCb(content, bool) {
    //             content.removeAttribute("style");
    //             if(bool) Util.removeClass(content, 'cd-faq__content--visible');
    //       };
        
    //       var faqTemplate = document.getElementsByClassName('js-cd-faq'),
    //           faqArray = [];
    //       if(faqTemplate.length > 0) {
    //             for(var i = 0; i < faqTemplate.length; i++) {
    //                 faqArray.push(new FaqTemplate(faqTemplate[i])); 
    //             }
    //       };        
    //   }, []);

    
return (
    <>
    <header className="cd-header flex flex-column flex-center">
  <div className="text-component text-center">
    <h1>FAQs</h1>
  </div>
</header>

<section className="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
	<ul className="cd-faq__categories">
		<li><a className="cd-faq__category cd-faq__category-selected truncate" href="#basics">FAQ</a></li>
		{/* <li><a className="cd-faq__category truncate" href="#mobile">Mobile</a></li>
		<li><a className="cd-faq__category truncate" href="#account">Account</a></li>
		<li><a className="cd-faq__category truncate" href="#payments">Payments</a></li>
		<li><a className="cd-faq__category truncate" href="#privacy">Privacy</a></li>
		<li><a className="cd-faq__category truncate" href="#delivery">Delivery</a></li> */}
	</ul> 

	<div className="cd-faq__items">
		<ul id="basics" className="cd-faq__group">
			<li className="cd-faq__title"><h2>FAQ</h2></li>
			<li className="cd-faq__item">
				<a className="cd-faq__trigger" href="#0"><span>Does MLS Classes offer tutoring for Test-Prep exams like SAT, ACT & AP required by colleges in USA?
</span></a>
				<div className="cd-faq__content">
          <div className="text-component">
            <p>Yes, MLS Classes provides comprehensive tutoring services for various admission tests required by colleges in the USA. They offer expert guidance and support for exams such as the SAT, ACT, and AP exams. Whether you're aiming to excel in the Scholastic Assessment Test (SAT), the American College Testing (ACT), or seeking preparation for Advanced Placement (AP) exams, MLS Classes has tailored tutoring programs to help you succeed and improve your chances of gaining admission to your desired colleges and universities.</p>
          </div>
				</div> 
			</li>

			<li className="cd-faq__item">
				<a className="cd-faq__trigger" href="#0"><span> Does MLS Classes provide tutoring services for school students of USA?</span></a>
				<div className="cd-faq__content">
          <div className="text-component">
            <p>MLS Classes offers tutoring services for students in grades 2-12, covering academic subjects like Science, Math, English, Coding & Test-Preps like SAT,PSAT, ACT,AP,AMC. With a team of experienced educators, MLS Classes provides personalized and customised ONE on ONE lessons, including mock exams and hands-on practical sessions. If you're interested, you can take advantage of a 7-day trial period to experience firsthand how our dedicated teachers cater to each student's needs effectively?</p>
          </div>
				</div> 
			</li>

			<li className="cd-faq__item">
				<a className="cd-faq__trigger" href="#0"><span> Could you provide us with the contact information to get course details of MLS Classes?</span></a>
				<div className="cd-faq__content">
          <div className="text-component">
            <p>Please contact us for more details :
Phone number +91 9649549754
Whatsapp number +91 9649549754
Whatsapp chat https://wa.me/message/XMS5KMWBGQZLG1
Contact us Form https://mlsclasses.com/contactus
Email id admission@mlsclasses.com
support@mlsclasses.com.</p>
          </div>
				</div> 
			</li>

			<li className="cd-faq__item">
				<a className="cd-faq__trigger" href="#0"><span>How does the online class system offered by MLS Classes work?</span></a>
				<div className="cd-faq__content">
          <div className="text-component">
            <p>Embark on a transformative learning journey with MLS Classes:
Identifying Skill Gaps: Pinpoint areas of weakness in math, English, science, and coding.
Mastering Skill Gaps: Receive personalized guidance to establish a strong foundation.
Monitoring Progress: Benefit from continuous tracking for optimal advancement.
In-depth Conceptual Classes: Focus on developing a profound understanding for enhanced confidence.
Real-Time Assessments and Tests: Engage in evaluations that provide valuable insights.
Engagement Through Parent-Teacher Meetings: Stay actively involved in your child's growth.
Catch-up Sessions Available: Ensure no learning opportunities are missed.
Discover the empowering MLS Classes experience, designed to propel your child towards academic excellence and a promising future..</p>
          </div>
				</div> 
			</li>
		</ul> 

		<ul id="mobile" className="cd-faq__group">
			<li className="cd-faq__title"><h2>Program Offered</h2></li>
			<li className="cd-faq__item">
				<a className="cd-faq__trigger" href="#0"><span>5 Is there any form of communication between the teachers at MLS Classes and the parents?</span></a>
				<div className="cd-faq__content">
          <div className="text-component">
            <p>At MLS Classes, parent-teacher meetings are conducted through virtual platforms on a bi-weekly or monthly basis, depending on the availability of both parents and teachers. These sessions serve as opportunities for teachers to discuss student performance evaluations, providing insights into class engagements, assignments, and overall advancements. Through this collaborative approach between parents and teachers, students receive personalised guidance, nurturing their path to success.</p>
          </div>
				</div> 
			</li>

		</ul> 

	</div> 

	<a href="#0" className="cd-faq__close-panel text-replace">Close</a>
  
  <div className="cd-faq__overlay" aria-hidden="true"></div>
</section> 
</>
)
}
export default Faq;


// // Utility function
export function Util () {};

// /* 
// 	class manipulation functions
// */
// Util.hasClass = function(el, className) {
// 	// if (el?.classList) return el?.classList.contains(className);
// 	// else return !!el?.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
// };

// Util.addClass = function(el, className) {
// 	var classList = className.split(' ');
//  	if (el.classList) el.classList.add(classList[0]);
//  	else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
//  	if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
// };

// Util.removeClass = function(el, className) {
// 	var classList = className.split(' ');
// 	if (el?.classList) el?.classList.remove(classList[0]);	
// 	else if(Util.hasClass(el, classList[0])) {
// 		var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
// 		el.className=el.className.replace(reg, ' ');
// 	}
// 	if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
// };

// Util.toggleClass = function(el, className, bool) {
// 	if(bool) Util.addClass(el, className);
// 	else Util.removeClass(el, className);
// };

// Util.setAttributes = function(el, attrs) {
//   for(var key in attrs) {
//     el.setAttribute(key, attrs[key]);
//   }
// };

// /* 
//   DOM manipulation
// */
// Util.getChildrenByClassName = function(el, className) {
//   var children = el.children,
//     childrenByClass = [];
//   for (var i = 0; i < el.children.length; i++) {
//     if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
//   }
//   return childrenByClass;
// };

// /* 
// 	Animate height of an element
// */
// Util.setHeight = function(start, to, element, duration, cb) {
// 	var change = to - start,
// 	    currentTime = null;

//   var animateHeight = function(timestamp){  
//     if (!currentTime) currentTime = timestamp;         
//     var progress = timestamp - currentTime;
//     var val = parseInt((progress/duration)*change + start);
//     // console.log(val);
//     element.setAttribute("style", "height:"+val+"px;");
//     if(progress < duration) {
//         window.requestAnimationFrame(animateHeight);
//     } else {
//     	cb();
//     }
//   };
  
//   //set the height of the element before starting animation -> fix bug on Safari
//   element.setAttribute("style", "height:"+start+"px;");
//   window.requestAnimationFrame(animateHeight);
// };

// /* 
// 	Smooth Scroll
// */

// Util.scrollTo = function(final, duration, cb) {
//   var start = window.scrollY || document.documentElement.scrollTop,
//       currentTime = null;
      
//   var animateScroll = function(timestamp){
//   	if (!currentTime) currentTime = timestamp;        
//     var progress = timestamp - currentTime;
//     if(progress > duration) progress = duration;
//     var val = Math.easeInOutQuad(progress, start, final-start, duration);
//     window.scrollTo(0, val);
//     if(progress < duration) {
//         window.requestAnimationFrame(animateScroll);
//     } else {
//       cb && cb();
//     }
//   };

//   window.requestAnimationFrame(animateScroll);
// };

// /* 
//   Focus utility classes
// */

// //Move focus to an element
// Util.moveFocus = function (element) {
//   if( !element ) element = document.getElementsByTagName("body")[0];
//   element.focus();
//   if (document.activeElement !== element) {
//     element.setAttribute('tabindex','-1');
//     element.focus();
//   }
// };

// /* 
//   Misc
// */

// Util.getIndexInArray = function(array, el) {
//   return Array.prototype.indexOf.call(array, el);
// };

// Util.cssSupports = function(property, value) {
//   if('CSS' in window) {
//     return CSS.supports(property, value);
//   } else {
//     var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
//     return jsProperty in document.body.style;
//   }
// };

// /* 
// 	Polyfills
// */
// //Closest() method
// if (!Element.prototype.matches) {
// 	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
// }

// if (!Element.prototype.closest) {
// 	Element.prototype.closest = function(s) {
// 		var el = this;
// 		if (!document.documentElement.contains(el)) return null;
// 		do {
// 			if (el.matches(s)) return el;
// 			el = el.parentElement || el.parentNode;
// 		} while (el !== null && el.nodeType === 1); 
// 		return null;
// 	};
// }

// //Custom Event() constructor
// if ( typeof window.CustomEvent !== "function" ) {

//   function CustomEvent ( event, params ) {
//     params = params || { bubbles: false, cancelable: false, detail: undefined };
//     var evt = document.createEvent( 'CustomEvent' );
//     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
//     return evt;
//    }

//   CustomEvent.prototype = window.Event.prototype;

//   window.CustomEvent = CustomEvent;
// }

// /* 
// 	Animation curves
// */
// Math.easeInOutQuad = function (t, b, c, d) {
// 	t /= d/2;
// 	if (t < 1) return c/2*t*t + b;
// 	t--;
// 	return -c/2 * (t*(t-2) - 1) + b;
// };